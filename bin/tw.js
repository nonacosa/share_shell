#!/usr/bin/env node
var program = require('commander');
var exec_shell = require('./exec_shell');
var appInfo = require('../package.json');
var shell = require('shelljs');
var S = require('string');
var format = require('./format');
var file = require('./file');

program
    .version(appInfo.version)
program
    .command('share <shell>')

    .alias('s')

    .description('Enter the "shell" you want to convert and include it in \" \"  ')

    .option("-p, --path <path>", "Enter you html path , default ./share_you_shell.html")

    .action(function (cmd, options) {
        var path = typeof options.path == 'string' ? options.path : "./share_you_shell.html"

        exec_shell.exec(cmd, (res) => {

            var res_arr = S(res).lines()
            let str = format.toTypedFormat([cmd].concat(res_arr))
            file.mkfile(str, path)
        })
    }).on('--help', function () {

        console.log('  Examples:');
    });

program.parse(process.argv);