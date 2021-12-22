#!/usr/bin/env node
import scal from './src/index.js'

let input = process.argv.slice(2).join(' ')
let res = scal(input)
console.log(res)