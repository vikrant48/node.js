const http = require('http')
const fs = require('fs')
const  _ = require('lodash')

const server = http.createServer((req, res)=>{
    console.log(req)
    console.log(req.url ,req.method)

    //res 
    // res.setHeader('Content-Type','text/plain')
    // res.write('im respond')
    // res.write('im second responsed ')
    // res.end()

    // by emporting file 
    res.setHeader('Content-type','text/html')

    let path = './basic/view/'
    switch (req.url) {
        case '/':
            path += 'index.html'
            res.statusCode = 200
            break;
        case '/about':
            path += 'about.html'
            res.statusCode = 200
            break;
        //redirect 
        case '/about-me':
            res.statusCode = 301
            res.setHeader('Location','/about')
            res.end()
            break;        
    
        default:
            path += '404.html'
            res.statusCode = 404
            break;
    }
    
    fs.readFile(path, (err,data)=>{
        if(err){
            console.log(err)
            res.end()
        }else{
            res.write(data)
            res.end()
            // res.end(data) //this will also work for only one file 
        }  
    })


})

server.listen(3000,'localhost',()=>{
    console.log('listing for request on port 3000')
})