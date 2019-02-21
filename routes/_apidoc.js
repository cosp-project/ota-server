/**
 * @api {get} /checkUpdate Check if update exists
 * @apiName GetCheckUpdate
 * @apiGroup Update
 * @apiVersion 0.1.1
 *
 * @apiParam {String} device The user's device
 * @apiParam {Number} date The build date in the format "yymmdd"
 *
 * @apiSuccess {Boolean} update Whether an update is available
 * @apiSuccess {String} download Download URL
 * @apiSuccess {String} changeLog Device update changelog
 *
 * @apiSuccessExample {json} Success-Response:
 * {"update":true,"download":"https://download.example.com","changeLog":"Sample Changelog"}
 *
 * @apiError DeviceNotFound The device was not found
 * @apiErrorExample {json} Error-Response:
 *  HTTP/1.1 404 Not Found
 *  {
 *      "error": "DeviceNotFound"
 *  }
 *
 */

/**
 * @api {get} /latestDownload Get the latest download link
 * @apiName GetLatestDownload
 * @apiGroup Update
 * @apiVersion 0.1.1
 *
 * @apiParam {String} device The user's device
 *
 * @apiSuccess {Number} date The latest build date
 * @apiSuccess {String} download Download URL
 *
 * @apiSuccessExample {json} Success-Response:
 * {"date":190129,"download":"https://download.example.com"}
 *
 * @apiError DeviceNotFound The device was not found
 * @apiErrorExample {json} Error-Response:
 *  HTTP/1.1 404 Not Found
 *  {
 *      "error": "DeviceNotFound"
 *  }
 *
 */