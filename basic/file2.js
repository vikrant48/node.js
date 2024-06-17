const arr = [1,2,3,4,5,6,7,8]
console.log(arr)

// module.exports = 'hellow'  // whatever we exports here that will reflect there
//exporting single data 
// module.exports = arr

//exporting multiple data at one time 
const people = ['man', 'women']

const obj = {
    name: 'vikrant',
    age: 21
}

module.exports = {     // this will over write the previous one 
    people ,obj
}

