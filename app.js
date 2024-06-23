const express = require('express')

//express app 
const app = express()

//listen for request
app.listen(3000)

// register view engine
app.set('view engine', 'ejs');
// app.set('views', 'myviews');

/* without ejs 
app.get('/',(req, res)=>{
    // res.send('hi')
    res.sendFile('./view/index.html',{root: __dirname})
})
app.get('/about',(req, res)=>{
    // res.send('hi')
    res.sendFile('./view/about.html',{root: __dirname})
})

//redirect
app.get('/about-us', (req, res)=>{
    res.redirect('/about')
})

//404
app.use((req, res)=>{
    // res.send('hi')
    res.status(404).sendFile('./view/404.html',{root: __dirname})
})*/

//with ejs
app.get('/',(req, res)=>{
    // res.send('hi')
    res.render('index')
})
app.get('/about',(req, res)=>{
    // res.send('hi')
    res.render('about')
})


//404
app.use((req, res)=>{
    // res.send('hi')
    res.status(404).render('404')
})