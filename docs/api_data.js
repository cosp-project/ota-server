define({ "api": [
  {
    "type": "get",
    "url": "/checkUpdate",
    "title": "Check if update exists",
    "name": "GetCheckUpdate",
    "group": "Update",
    "version": "0.2.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "device",
            "description": "<p>The user's device</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "date",
            "description": "<p>The build date in the format &quot;yymmdd&quot;</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "channel",
            "description": "<p>The update channel</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "update",
            "description": "<p>Whether an update is available</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "download",
            "description": "<p>Download URL</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "changeLog",
            "description": "<p>Device update changelog</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\"update\":true,\"download\":\"https://download.example.com\",\"changeLog\":\"Sample Changelog\"}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "DeviceNotFound",
            "description": "<p>The device was not found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n    \"error\": \"DeviceNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/index.js",
    "groupTitle": "Update"
  },
  {
    "type": "get",
    "url": "/checkUpdate",
    "title": "Check if update exists",
    "name": "GetCheckUpdate",
    "group": "Update",
    "version": "0.1.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "device",
            "description": "<p>The user's device</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "date",
            "description": "<p>The build date in the format &quot;yymmdd&quot;</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "update",
            "description": "<p>Whether an update is available</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "download",
            "description": "<p>Download URL</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "changeLog",
            "description": "<p>Device update changelog</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\"update\":true,\"download\":\"https://download.example.com\",\"changeLog\":\"Sample Changelog\"}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "DeviceNotFound",
            "description": "<p>The device was not found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n    \"error\": \"DeviceNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/_apidoc.js",
    "groupTitle": "Update"
  },
  {
    "type": "get",
    "url": "/latestDownload",
    "title": "Get the latest download link",
    "name": "GetLatestDownload",
    "group": "Update",
    "version": "0.2.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "device",
            "description": "<p>The user's device</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "channel",
            "description": "<p>The update channel</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "date",
            "description": "<p>The latest build date</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "download",
            "description": "<p>Download URL</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\"date\":190129,\"download\":\"https://download.example.com\"}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "DeviceNotFound",
            "description": "<p>The device was not found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n    \"error\": \"DeviceNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/index.js",
    "groupTitle": "Update"
  },
  {
    "type": "get",
    "url": "/latestDownload",
    "title": "Get the latest download link",
    "name": "GetLatestDownload",
    "group": "Update",
    "version": "0.1.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "device",
            "description": "<p>The user's device</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "date",
            "description": "<p>The latest build date</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "download",
            "description": "<p>Download URL</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\"date\":190129,\"download\":\"https://download.example.com\"}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "DeviceNotFound",
            "description": "<p>The device was not found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n    \"error\": \"DeviceNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/_apidoc.js",
    "groupTitle": "Update"
  }
] });
