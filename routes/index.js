const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const auth = require('http-auth');
const { body, validationResult } = require('express-validator/check');
const router = express.Router();
const Device = mongoose.model('Device');
const Pusher = require('pusher');
const pusher = new Pusher({
    appId: process.env.APP_ID,
    key: process.env.KEY,
    secret: process.env.SECRET,
    cluster: 'eu',
    encrypted: true
});
const basic = auth.basic({
    file: path.join(__dirname, '../users.htpasswd'),
});

router.get('/', auth.connect(basic), (req, res) => {
    res.render('form', { title: 'COSP Updates'});
});

router.get('/checkUpdate', async (req, res) => {
    const reqDevice = req.query.device;
    const deviceBuild = Number(req.query.date);
    try {
        await Device.findOne({device: reqDevice}, async (err, device) => {
            if (device === null) {
                res.send('error');
            }
            else if ((Number(await device.get('buildDate')) > deviceBuild)) {
                res.send({
                    update: true,
                    download: await device.get('download'),
                    changeLog: await device.get('changeLog')
                });
            } else {
                res.send({update: false, download: '', changeLog: await device.get('changeLog')});
            }
        });
    } catch (e) {
        console.log(e);
        res.send("Error!");
    }
});

router.get('/latestDownload', async (req, res) => {
   const reqDevice = req.query.device;
    try {
        await Device.findOne({device: reqDevice}, async (err, device) => {
            if (device === null) {
                res.send('error');
            } else {
                res.send({date: await device.get('buildDate'), download: await device.get('download')});
            }
        });
    } catch (e) {
        console.log(e);
        res.send("Error!");
    }
});

// Submit route
router.post('/',
    [
        body('device')
            .isLength({ min: 1 })
            .withMessage('Please enter the device name.'),
        body('maintainer')
            .isLength({ min: 1 })
            .withMessage('Please enter the maintainer\'s name'),
        body('buildDate')
            .isLength({ min: 1 })
            .isNumeric()
            .withMessage('Please enter the build date.'),
        body('changeLog')
            .isLength({ min: 1 })
            .withMessage('Please enter the changelog.'),
        body('download')
            .isURL({ require_valid_protocol: true })
            .withMessage('Please enter a valid URL')
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (errors.isEmpty()) {
            try {
                await Device.findOne({ device: req.body.device }, async (err, device) => {
                    if (err || device === null) {
                        const device = new Device(req.body);
                        await device.save(err => {
                            if (err) console.log(err);
                            res.send('Created device successfully.');
                        });

                    } else {
                        await device.set(req.body);
                        await device.save((err) => {
                            if (err) console.log(err);
                            res.send('Updated successfully.');
                            pusher.trigger('cosp-updates', 'updates-pushed', {
                                "device": req.body.device
                            })
                        });
                    }
                });
            } catch (e) {}
        } else {
            res.render('form', {
                title: 'COSP Updates',
                errors: errors.array(),
                data: req.body
            });
        }
        console.log(req.body);
    });

module.exports = router;