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
    .usage('这里是我私人玩耍的命令哦！[options] <package>')

//像git风格一样的子命令
program
    //子命令
    .command('typewriter_terminal <shell>')
    //短命令 - 简写方式
    .alias('twt')
    //说明
    .description('Enter the "shell" you want to convert and include it in \" \"  ')
    //resume的子命令
    .option("-p, --path <path>", "Enter you html path , default ./share_you_shell.html")
    //注册一个callback函数
    .action(function (cmd, options) {
        var path = typeof options.path == 'string' ? options.path : "./share_you_shell.html"

        console.log('cmd, path');
        console.log(cmd, path);
        exec_shell.exec(cmd, (res) => {

            var res_arr = S(res).lines()
            let str = format.toTypedFormat([cmd].concat(res_arr))
            file.mkfile(str, path)
        })
    }).on('--help', function () {
        //这里输出子命令的帮助
        console.log('  Examples:');
    });

program.parse(process.argv);