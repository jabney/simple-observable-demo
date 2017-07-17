const fs = require('fs')

/**
 * @function read Read a source json file and return as an object
 * @param {string} path The path to a source config file
 * @return {Object} The json source as an object
 */
function read(path) {
  const file = fs.readFileSync(path)
  return JSON.parse(file)
}

/**
 * @function merge Merge two config objects
 * @param {Object} config The source config object
 * @param {Object} extend The object to merge with the source config
 * @return {Object} A new merged object
 */
function merge(config, extend) {
  return Object.assign({}, config, extend)
}

/**
 * @function extend Create a new config by extending an existing one
 * @param {string} inConfig The path to the source config file
 * @param {string|null} outConfig The path to the target config file
 * @param {Object} extend The object to merge with the source config
 * @return {Object} The merged config
 */
function extend(inConfig, outConfig = null, extend = {}) {
  const config = read(inConfig)
  const newConfig = merge(config, extend)

  if (outConfig) {
    fs.writeFileSync(outConfig, JSON.stringify(newConfig, null, 2))
  }

  return newConfig
}

extend.read = read
extend.merge = merge

module.exports = extend
