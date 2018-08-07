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
    return result;

}

var toHtmlFormat = function (type_arr_str) {
    var html = ""
    const header = "<html><head><script src='https://cdn.jsdelivr.net/npm/typed.js@2'></script></head><body><pre style='background-color: black;color: white; height:800px' id='app'></pre></body>"
    let script =
        "\n<script>\n"
        + "var source_arr = [ \" " + type_arr_str + " \" ]\n" + "var app = new Typed('#app', {strings: source_arr,typeSpeed: 1,loop: false});"
        + "\n</script>\n"
    html += header
    html += script + "\n</html>"
    return html

}

module.exports.toTypedFormat = toTypedFormat
module.exports.toHtmlFormat = toHtmlFormat