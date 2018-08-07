var fs = require('fs-extra')
var format = require('./format')

// fs.mkdirs('/Users/zhuang/Desktop/test.html')

// With async/await:
async function mkfile(str) {
    let f = '/Users/zhuang/Desktop/test2.html'
    try {
        console.log('-----')
        console.log(str)
        console.log(format.toHtmlFormat(str))
        await fs.outputFile(f, format.toHtmlFormat(str))

        const data = await fs.readFile(f, 'utf8')

        console.log(data) // => hello!
    } catch (err) {
        console.error(err)
    }
}

module.exports.mkfile = mkfile