var fs = require('fs-extra')
var format = require('./format')

// fs.mkdirs('/Users/zhuang/Desktop/test.html')

// With async/await:
async function mkfile(str, path) {
    // let f = '/Users/zhuang/Desktop/test2.html'
    try {

        await fs.outputFile(path, format.toHtmlFormat(str))

        const data = await fs.readFile(path, 'utf8')

    } catch (err) {
        console.error(err)
    }
}

module.exports.mkfile = mkfile