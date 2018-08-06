#!/usr/bin/env node
var program = require('commander');
var appInfo = require('./package.json');

program
    .version(appInfo.version)
    .usage('这里是我私人玩耍的命令哦！[options] <package>')

//像git风格一样的子命令
program
    //子命令
    .command('tw_tmernal <cmd>')
    //短命令 - 简写方式
    .alias('tw_t')
    //说明
    .description('is a plug-in to Generate printer styles .html file to show our terminal operation.')
    //resume的子命令
    .option("-exec, --execute <mode>", "请输入您要转换的shell")
    //注册一个callback函数
    .action(function (cmd, options) {
        var shell = typeof options.name == 'string' ? options.name : ""

        console.log('正在转换 "%s" ... ', shell);
    }).on('--help', function () {
        //这里输出子命令的帮助
        // console.log('  Examples:');
        // console.log('    运行方法：');
        // console.log('    $ ./bin/wcj.js resume ss -n aaaaa');
        // console.log('    $ ./bin/wcj.js resume ss');
        // console.log();
    });

program.parse(process.argv);