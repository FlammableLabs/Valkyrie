const functions = require('../shared/functions');

const openssl = require('openssl-nodejs');

const test1 = [
    'x509',
	'-noout',
    '-subject',
    '-in',
    __dirname + '/certificates/test1.pem'
];

openssl(test1, function (err, buffer) {
    console.log(`Original:`, buffer.toString());
    console.log(`Processed:`, functions.GetBetween(": ", "/", buffer.toString()));
});