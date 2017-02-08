//Connects to s3 -> uploads base64 image
//Reference: http://stackoverflow.com/questions/7511321/uploading-base64-encoded-image-to-amazon-s3-via-node-js

var AWS = require('aws-sdk');
AWS.config.loadFromPath('./s3-config.json');

var s3 = new AWS.S3({
    endpoint: 's3-eu-central-1.amazonaws.com',
    signatureVersion: 'v4'
});

var image = "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";
var fileName = 'test2.png';

var buffer = new Buffer(image.replace(/^data:image\/\w+;base64,/, ""),'base64');

var params = {
  Bucket: 'teamone-files',
  Key: fileName,
  Body: buffer,
  ContentEncoding: 'base64',
  ContentType: 'image/jpeg'
};
s3.putObject(params, function(err, data) {
   if (err) {
       console.log(err)
   } else {
       console.log("Successfully uploaded data to:", teamone-files , fileName);
   }
});
