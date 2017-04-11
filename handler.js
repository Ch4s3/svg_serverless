'use strict';
var Trianglify = require('trianglify')
module.exports.triangles = (event, context, callback) => {
  //this check is broken!
  var width = event.queryStringParameters.width
  var height = event.queryStringParameters.height

  if(height !== undefined && width !== undefined) {
    var pattern = Trianglify({width: Number(width), height: Number(height)}).svg().innerHTML
  } else {
    var pattern = Trianglify({width: 1024, height: 256}).svg().innerHTML
    var width = 1024
    var height = 256
  }
  var response = {
    statusCode: 200,
    headers: { 'Access-Control-Allow-Origin': '*' },
    body: JSON.stringify({
      svg: pattern,
      width: width,
      height: height,
      eventData: event
    }),
  };

  callback(null, response);

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};
