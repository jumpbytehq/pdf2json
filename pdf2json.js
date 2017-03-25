'use strict';

var P2JCMD = require('./lib/p2jcmd');
var srcFile = "testPDF.pdf"
new P2JCMD().start(srcFile, function (err, data) {
    if (err) {
        throw err;
    }
    console.log('response:- ', JSON.stringify(data));
});
