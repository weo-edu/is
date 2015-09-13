/**
 * Modules
 */

var isEmpty = require('is-empty')
var isPromise = require('is-promise')
var isGenerator = require('is-generator')
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
 * Expose `promise` check.
 */

exports.promise = isPromise

/**
 * Expose `generator` check.
 */

exports.generator = isGenerator

/**
 * Expose `generator function` check.
 */

exports.generatorFunction = isGenerator.fn

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
