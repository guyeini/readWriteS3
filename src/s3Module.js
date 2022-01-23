var AWS = require("aws-sdk");


const readFromS3 = async (s3 , params) => {
    s3.getObject(params, function(err, data) {
      if (err) console.log("Error : ",err, err.stack); // an error occurred
      else {
        result = data.Body.toString();
        console.log(result);
        const json = JSON.parse(result);
        console.log(json.name); 
      }             
    });
  }

  const writeToS3 = async (s3 , writeObj) => {
    s3.putObject(writeObj, function(err, data) {
      if (err) console.log(err, err.stack); // an error occurred
      else     console.log(data);           
    })
  }


exports.readFromS3 = readFromS3;
exports.writeToS3 = writeToS3;



