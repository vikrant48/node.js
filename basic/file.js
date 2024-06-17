// default file system
const fs = require('fs')

//reading files   async (take time but does not block other code) first read the file when its done it will fire callback function

// fs.readFile('./basic/docs/docs1.txt', (err,data)=>{
//     if(err){
//         console.log(err)
//     }
//     // console.log(data) //<Buffer 68 65 6c 6c 6f 77 20 69 6d 20 64 6f 63 20 31 20> pakege of data sent 
//     console.log(data.toString()) //hellow im doc 1  
// });
// console.log('im first boz above one take time to read the file ')

//writing files 

//to an existing file it will over write the content

// fs.writeFile('./basic/docs/docs1.txt', 'overwriting docs1 content',()=>{
//     console.log('file was written')
// })

//to a new file  it will create a file and write there 

// fs.writeFile('./basic/docs/docs2.txt', 'create a new file - docs2 content',()=>{
//     console.log('file was written')
// })


//create and delete directories
if(!fs.existsSync('./basic/asset')){
    fs.mkdir('./basic/asset', (err)=>{
        if(err){
            console.log(err)
        }
        console.log('dir created')
    })
}else{
    fs.rmdir('./basic/asset',(err)=>{
        console.log(err)
    })
    console.log('dir was deleted')
}

//deleting files
if(fs.existsSync('./basic/docs/todelete.txt')){
    fs.unlink('./basic/docs/todelete.txt',(err)=>{
        console.log(err)
    })
    console.log('file was deleted')
}

//else{
//     fs.link('./basic/docs/todelete.txt',(err)=>{
//         console.log(err)
//     })
//     console.log('file was created')
// }

