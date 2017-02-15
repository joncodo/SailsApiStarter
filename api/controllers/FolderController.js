// # FolderController
// ## Server-side actions for managing folders
// See http://sailsjs.com/docs/concepts/controllers

const AWS = require('aws-sdk');
AWS.config.loadFromPath('./s3-config.json');

const s3 = new AWS.S3({
  endpoint: 's3.amazonaws.com',
  signatureVersion: 'v4'
});

module.exports = {
  // ## .create()
  // POST /v1/folder/:folderName
  // > Create a folder
  create: function(req, res) {
    const data = {
      Bucket: req.params.folderName
    };

    s3.createBucket(data, function(error, response) {
      if (error) {
        console.log(error);
        return res.status(500).send(error);
      } else {
        console.log(response);
        return res.status(200).send('Successfully created folder: ' + req.params.folderName);
      }
    });
  },

  // ## .list()
  // GET /v1/folders
  // > List the names of all folders
  list: function(req, res) {
    s3.listBuckets(function(error, data) {
      if (error) {
        return res.status(500).send(error);
      } else {
        return res.status(200).send(data);
      }
    });
  },

  // ## .delete()
  // DELETE /v1/folder/:folderName
  // > Remove a folder by name
  delete: function(req, res) {
    const data = {
      Bucket: req.params.folderName
    };

    console.log('deleting file form s3: ', data);
    s3.deleteBucket(data, function(error, data) {
      if (error) {
        return res.status(500).send(error);
      } else {
        return res.status(200).send('folder: ' + data.Bucket + ' was deleted');
      }
    });
  }
};
