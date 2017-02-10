/**
 * FileController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See http://sailsjs.com/docs/concepts/controllers
 */

const AWS = require('aws-sdk');
AWS.config.loadFromPath('./s3-config.json');

const s3 = new AWS.S3({
  endpoint: 's3-eu-central-1.amazonaws.com',
  signatureVersion: 'v4'
});


module.exports = {
  // TODO upload multiple files at once
  // TODO get the filename of the file you uploaded

  /**
   * FileController.upload()
   * /file/upload
   * @description :: Removes a file from the s3 bucket (folder) that you choose
   * @help        :: See http://sailsjs.com/docs/concepts/controllers
   * @param {string} folder the s3 bucket(folder) form which you wish to delete
   * @param {string} fileName the name of the file you wish to delete
   */
  create: function(req, res) {
    const files = req.files || req.file('image');
    files._files.forEach(function(file) {
      const buffer = file.stream._readableState.buffer[0];
      const fileName = file.stream.filename;
      const byteOffset = file.stream.byteOffset;
      const byteCount = file.stream.byteCount;
      const contentType = file.stream.headers['content-type'];

      const data = {
        Bucket: 'teamone-files',
        Key: fileName,
        Body: buffer,
        ContentType: contentType
      };

      console.log('data', data);

      s3.putObject(data, function(error, response) {
        if (error) {
          return res.send(500, error);
        } else {
          console.log(response);
          return res.send(200, 'Successfully uploaded data to: teamone - files', fileName);
        }
      });
    });
  },

  /**
   * FileController.delete()
   * /file/delete
   * @description :: Removes a file from the s3 bucket (folder) that you choose
   * @help        :: See http://sailsjs.com/docs/concepts/controllers
   * @param {string} folder the s3 bucket(folder) form which you wish to delete
   * @param {string} fileName the name of the file you wish to delete
   */
  delete: function(req, res) {
    const params = req.params.all();

    const params = {
      Bucket: params.folder,
      Key: params.fileName
    };
    s3.deleteObject(params, function(err, data) {
      if (err) {
        return res.send(500, error);
      } else {
        return res.send(200, 'file was deleted');
      }
    });
  }
};
