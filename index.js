var AWS = require("aws-sdk");
console.log("hello");
var rwS3 = require('./src/s3Module')


const accessKeyId = "AKIAWTKOH7SG3J7JZU5C"
const secretAccessKey = "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"
const bucket = "wixmigration"
let result;
const s3 = new AWS.S3({
  accessKeyId: accessKeyId,  
  secretAccessKey: secretAccessKey, 
  Bucket: bucket   
});
const writeBody = { "new" : "new Hello 23.1.2022"}
var params = {Bucket: bucket, Key: 'test.json'}
var writeObj = { Bucket: bucket, Key: 'new2.json' , Body : JSON.stringify(writeBody) };


  (async () => {
    await console.log("hello33");
    await rwS3.readFromS3(s3 , params)
    await rwS3.writeToS3(s3 , writeObj)
  })();
 
  