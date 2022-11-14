// const names_obj = require('./secondmodule')
// const sayHi = require('./modules')
// const data_from_alternative  = require('./alternative_flavour')
// // console.log(names)
// console.log(data_from_alternative)

// sayHi('prashant')
// sayHi (names_obj.john)
// sayHi (names_obj.peter)
// let p=require('./alternative_flavour')

const _  = require('lodash')

const items = [1,[2,[3,[4]]]]

const newArray = _.flattenDeep(items )
console.log(newArray)