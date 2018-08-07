var _ = require('lodash')

var toTypedFormat = function (orgin) {
    let result = ""
    if (!orgin instanceof Array) {
        console.error('format error !')
    }
    _.each(orgin, (res, index) => {
        if (index === 0) {
            result += res + "^1000\\n"
        } else if (index === orgin.length - 1) {
            result += " end     :) \\n"
        } else {
            result += "`" + res + "`" + "^100\\n"
        }

    })
    console.log(result)
    return result;

}

module.exports.toTypedFormat = toTypedFormat