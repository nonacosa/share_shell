var shell = require('shelljs');

if (!shell.which('git')) {
    shell.echo('Sorry, this script requires git');
    shell.exit(1);
}
shell.exec('docker ps -a', function (code, stdout, stderr) {
    if (code === 0) {
        console.log('code === 0')
        console.log(stdout)
    } else {
        console.log(stderr)
    }
});

