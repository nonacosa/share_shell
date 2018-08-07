var shell = require('shelljs');



var exec = shell.exec('docker ps -a', function (code, stdout, stderr) {
    if (code === 0) {
        console.log('code === 0')
        console.log(stdout)
    } else {
        console.log(stderr)
    }
});

module.exports.exec = exec;

