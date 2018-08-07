var shell = require('shelljs');



var exec_fn = function (cmd, fn) {

    shell.exec(cmd, function (code, stdout, stderr) {
        if (code === 0) {
            console.log('code === 0')
            // console.log(stdout)
            fn(stdout)
        } else {
            console.log(stderr)
        }
    });
}

module.exports.exec = exec_fn;

