#!/usr/bin/env node

var exec = require('child_process').exec;

// Makes sure the babel executable in the path is babel 6 (or greater), not
// babel 5, which it is if you upgrade from an older version of react-sdk and
// run 'npm install' since the package has changed to babel-cli, so 'babel'
// remains installed and the executable in node_modules/.bin remains as babel
// 5.

exec("babel -V", function (error, stdout, stderr) {
    if ((error && error.code) || parseInt(stdout.substr(0,1), 10) < 6) {
        console.log("\033[31m\033[1m"+
            '*****************************************\n'+
            '* matrix-react-sdk has moved to babel 6 *\n'+
            '* Please "rm -rf node_modules && npm i" *\n'+
            '* then restore links as appropriate     *\n'+
            '*****************************************\n'+
        "\033[91m");
        process.exit(1);
    }
});
