/**
 * Modules
 */

var isEmpty = require('is-empty')
var typeOf = require('component-type')

/**
 * Types.
 */

var types = [
  'arguments',
  'array',
  'boolean',
  'date',
  'function',
  'null',
  'number',
  'object',
  'regexp',
  'string',
  'undefined'
]

/**
 * Exports alias
 */

var is = exports

/**
 * Expose type checkers.
 *
 * @param {Mixed} value
 * @return {Boolean}
 */

types.forEach(function (type) {
  exports[type] = generate(type)
})

/**
 * Add alias for `function` for old browsers.
 */

exports.fn = exports['function']

/**
 * Expose `empty` check.
 */

exports.empty = isEmpty

/**
 * Expose `nan` check.
 */

exports.nan = function (val) {
  return is.number(val) && val !== val // eslint-disable-line
}

/**
 * Generate a type checker.
 *
 * @param {String} type
 * @return {Function}
 */

function generate (type) {
  return function (value) {
    return type === typeOf(value)
  }
}
