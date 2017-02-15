# Amazon S3 Proxy Server

a [Sails](http://sailsjs.com) application

**You will need to edit the file s3-config.json.example to be s3-config.json and then change the contents of that file to have the correct keys. You can find these keys in the AWS management console under your username > Your security credentials > Access Keys > Create new access key - [here](https://console.aws.amazon.com/iam/home?region=us-east-1#/security_credential)**

```
npm install
npm start
```

## TODO

- Get a public url of the image that users can see at a later date?
- Docker
- Jenkins run tests and deploy
- Host this on dev1

## Questions

- How long do we make the resources public?

## Commands

```
npm start // start the app
npm test // Run unit tests
npm run docs // Generate and view the docs
npm run production // prod mode
npm debug //Listens for process on default debug port
```

## Reference Code

- <http://stackoverflow.com/questions/7511321/uploading-base64-encoded-image-to-amazon-s3-via-node-js>
- <https://aws.amazon.com/sdk-for-node-js/>
- <http://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/getting-started-nodejs.html#getting-started-nodejs-install-sdk>
- <http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html>
