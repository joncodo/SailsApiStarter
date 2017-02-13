/**
 * FileController
 * @module
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See http://sailsjs.com/docs/concepts/controllers
 */

const AWS = require('aws-sdk');
AWS.config.loadFromPath('./s3-config.json');

const s3 = new AWS.S3({
  endpoint: 's3.amazonaws.com',
  signatureVersion: 'v4'
});

module.exports = {
  /**
   * POST /file/:folder/:fileName
   * Creates a file in the folder
   */
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

  /**
   * /file/read/folder/fileName.txt
   */
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

  /**
   * FileController.delete()
   * /file/delete
   * @description :: Removes a file from the s3 bucket (folder) that you choose
   * @param {string} folder the s3 bucket(folder) form which you wish to delete
   * @param {string} fileName the name of the file you wish to delete
   */
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
