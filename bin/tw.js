#!/usr/bin/env node
var program = require('commander');
var exec_shell = require('./exec_shell');
var appInfo = require('../package.json');
var shell = require('shelljs');
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
    // .option("-n, --name <mode>", "输出我的名字")
    //注册一个callback函数
    .action(function (cmd, options) {
        var nm = typeof options.name == 'string' ? options.name : ""

        console.log(cmd, nm);
        // console.log(exec_shell.exec);
        console.log(typeof exec_shell.exec);
        exec_shell.exec(cmd, (res) => {
            console.log(res)
        })
    }).on('--help', function () {
        //这里输出子命令的帮助
        console.log('  Examples:');
    });

program.parse(process.argv);