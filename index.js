var cursor = require("oro-cursor")
var head   = require("oro-head")
var tail   = require("oro-tail")

function _get (path, $$$) {
  if ($$$ == null)      return $$$
  if (path.length == 0) return $$$
  return _get(tail(path), $$$[head(path)])
}

module.exports = function get (path) {
  return function __get ($$$) {
    try {
      return _get(cursor(path), $$$)
    } catch () {
      return undefined
    }
  }
}
