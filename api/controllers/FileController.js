// # FileController
// ## Server-side actions for managing files
// See http://sailsjs.com/docs/concepts/controllers

const AWS = require('aws-sdk');
AWS.config.loadFromPath('./s3-config.json');

const s3 = new AWS.S3({
  endpoint: 's3.amazonaws.com',
  signatureVersion: 'v4'
});

module.exports = {
  // ## .create()
  // POST /v1/file/:folder/:fileName
  // > Creates a file in the folder
  create: function(req, res) {
    req.file('image')._files.forEach(function(file) {
      const buffer = file.stream._readableState.buffer[0];
      const fileName = req.params.fileName || file.stream.filename;
      const byteOffset = file.stream.byteOffset;
      const byteCount = file.stream.byteCount;
      const contentType = file.stream.headers['content-type'];

      const data = {
        Bucket: req.params.folder || 'teamone-files',
        Key: fileName,
        Body: buffer,
        ContentType: contentType
      };

      console.log('uploading file to s3:', data);

      s3.putObject(data, function(error, response) {
        if (error) {
          console.log(error);
          return res.status(500).send(error);
        } else {
          console.log(response);
          return res.status(200).send('Successfully uploaded data to: teamone - files' + fileName);
        }
      });
    });
  },

  // ## .read()
  // GET /v1/file/:folder/:fileName
  // > Read the data of a file
  read: function read(req, res) {
    console.log(req.params);
    const data = {
      Bucket: req.params.folder,
      Key: req.params.fileName
    };

    console.log('reading file form s3: ', data);
    s3.getObject(data, function(error, data) {
      if (error) {
        console.log('could not get file from s3', error);
        return res.status(500).send(error);
      } else {
        console.log('file from s3: ', data);
        return res.status(200).send(data);
      }
    });
  },

  // ## .delete()
  // DELETE /v1/file/:folder/:fileName
  // > Remove a file from a folder
  delete: function(req, res) {
    const data = {
      Bucket: req.params.folder,
      Key: req.params.fileName
    };

    console.log('deleting file form s3: ', data);
    s3.deleteObject(data, function(error, data) {
      if (error) {
        return res.status(500).send(error);
      } else {
        return res.status(200).send('file was deleted');
      }
    });
  }
};
