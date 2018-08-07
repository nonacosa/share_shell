var fs = require('fs-extra')
var format = require('./format')


// With async/await:
async function mkfile(str, path) {

    try {

        await fs.outputFile(path, format.toHtmlFormat(str))

        const data = await fs.readFile(path, 'utf8')

    } catch (err) {
        console.error(err)
    }
}

module.exports.mkfile = mkfile