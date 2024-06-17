const fs = require('fs')

const readstreem = fs.createReadStream('./basic/docs/docs3.txt',{encoding: 'utf-8'})
const writestreem = fs.createWriteStream('./basic/docs/docs4.txt')

// without using pipe 
// readstreem.on('data',(chunk)=>{
//     console.log('---new chunk----')
//     console.log(chunk)
//     writestreem.write('\n ---new chunk---- \n')
//     writestreem.write(chunk)
// })

readstreem.pipe(writestreem)