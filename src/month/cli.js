import toJSON from './json.js'
const reset = '\x1b[0m'
//cheaper than requiring chalk
const cli = {
  // green: str => '\x1b[32m' + str + reset,
  // red: str => '\x1b[31m' + str + reset,
  blue: str => '\x1b[34m' + str + reset,
  // magenta: str => '\x1b[35m' + str + reset,
  // cyan: str => '\x1b[36m' + str + reset,
  // yellow: str => '\x1b[33m' + str + reset,
  // black: str => '\x1b[30m' + str + reset,
  dim: str => '\x1b[2m' + str + reset,
  italic: str => '\x1b[3m' + str + reset,
  grey: str => '\x1b[90m' + str + reset,
}

const pad = num => String(num).padStart(2, ' ')

const toCLI = function (res, obj) {
  let json = toJSON(res, obj)
  let s = res[0][6]
  let str = `\n    ${s.format('{month} {year}')}\n`
  str += cli.dim(' Mo Tu We Th Fr Sa Su\n')
  // print the days
  json.forEach(days => {
    days.forEach(obj => {
      if (obj.empty === true) {
        str += '   '
      } else if (obj.selected) {
        str += ' ' + cli.blue(pad(obj.date))
      } else {
        str += ' ' + pad(obj.date)
      }
    })
    str += '\n'
  })
  str += '\n'
  return str
}
export default toCLI