/**
 * FolderController
 *
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
    * FolderController.create()
    * POST /folder/
    * @description :: Removes a file from the s3 bucket (folder) that you choose
    * @param {string} folder the s3 bucket(folder) you wish to create
    */
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

   /**
    * FolderController.list()
    * /file/list
    * @description :: Removes a file from the s3 bucket (folder) that you choose
    * @param {string} folder the s3 bucket(folder) you wish to delete
    */
   list: function(req, res) {
     s3.listBuckets(function(error, data) {
       if (error) {
         return res.status(500).send(error);
       } else {
         return res.status(200).send(data);
       }
     });
   },

   /**
    * FolderController.delete()
    * /file/delete
    * @description :: Removes a file from the s3 bucket (folder) that you choose
    * @param {string} folder the s3 bucket(folder) you wish to delete
    */
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
