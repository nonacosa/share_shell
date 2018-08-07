var fs = require('fs-extra')

// fs.mkdirs('/Users/zhuang/Desktop/test.html')

// With async/await:
async function example(f) {
    try {
        await fs.outputFile(f, 'hello!')

        const data = await fs.readFile(f, 'utf8')

        console.log(data) // => hello!
    } catch (err) {
        console.error(err)
    }
}

example('/Users/zhuang/Desktop/test.html')