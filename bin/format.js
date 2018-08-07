var _ = require('lodash')

var toTypedFormat = function (orgin) {
    let result = ""
    if (!orgin instanceof Array) {
        console.error('format error !')
    }
    _.each(orgin, (res, index) => {
        if (index === 0) {
            result += res + "^1000\n"
        }
        result += "`" + res + "`" + "^1000\n"

        if (index === orgin.length) {
            result += " end  \n :) \n"
        }
    })
    console.log(result)
    return result;

}