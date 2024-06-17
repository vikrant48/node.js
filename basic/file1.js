// const xyz = require('./file2')   

// console.log(xyz)  // {} require return a empty object when witout exporting from file2 

// console.log(xyz.people , xyz.obj)

const {people, obj} = require('./file2') // by destructering 
console.log(people ,obj)

const os = require('os')
console.log(os.platform() ,os.homedir())



