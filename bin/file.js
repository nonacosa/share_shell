var fs = require('fs-extra')

// fs.mkdirs('/Users/zhuang/Desktop/test.html')

// With async/await:
async function mkfile(f) {
    try {
        await fs.outputFile(f, 'hello!')

        const data = await fs.readFile(f, 'utf8')

        console.log(data) // => hello!
    } catch (err) {
        console.error(err)
    }
}

mkfile('/Users/zhuang/Desktop/test.html')