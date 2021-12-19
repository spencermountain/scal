#!/usr/bin/env node
import scal from './src/index.js'

let input = process.argv.slice(2)
let res = scal(input)
console.log(JSON.stringify(res, null, 2))