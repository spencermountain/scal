import parse from './parse.js'
import minimist from 'minimist'
import month from './month/index.js'

const alias = {
  y: 'year',
  m: 'month',
  w: 'week',
  ascii: 'cli',
}

const fmt = {
  month: month
}

const src = function (input, opt = {}) {
  let opts = minimist(input.split(/ /), { alias })
  Object.assign(opts, opt)
  let str = opts._.join(' ')
  // start-end dates
  let obj = parse(str)


  let type = 'month'
  if (opts.year) {
    type = 'year'
  }
  if (opts.week) {
    type = 'week'
  }
  if (opts.quarter) {
    type = 'quarter'
  }

  // list of spacetime objects
  let res = fmt[type].calc(obj)

  // formats
  if (opts.json) {
    return fmt[type].json(res, obj)
  }
  if (opts.unicode) {
    return fmt[type].unicode(res, obj)
  }
  if (opts.html) {
    return fmt[type].html(res, obj)
  }
  if (opts.cli) {
    return fmt[type].cli(res, obj)
  }
  return fmt[type].cli(res, obj)
}
export default src