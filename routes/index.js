const express = require('express');
const mongoose = require('mongoose');
const { body, validationResult } = require('express-validator/check');
const router = express.Router();
const Device = mongoose.model('Device');

router.get('/', (req, res) => {
    res.render('form', { title: 'COSP Updates'});
});

// Submit route
router.post('/',
    [body('device')
        .isLength({ min: 1})
        .withMessage('Please enter the device name.'),
     body('maintainer')
         .isLength({ min: 1})
         .withMessage('Please enter the maintainer\'s name')
    ],
    async (req, res) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
        try {
            await Device.findOne({ device: req.body.device }, async (err, device) => {
                if (err) console.log(err);
                await device.set(req.body);
                await device.save((err) => {
                    if (err) console.log(err);
                    res.send('Updated successfully.')
                });
            });
        } catch (e) {
            const device = new Device(req.body);
            await device.save();
        }
    } else {
        res.render('form', {
            title: 'COSP Updates',
            errors: errors.array(),
            data: req.body
        });
    }
    console.log(req.body);
    res.render('form', { title: 'COSP Updates' });
});

module.exports = router;