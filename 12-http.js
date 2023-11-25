const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('Welcome to our home page')
    }
    if(req.url === '/about'){
        res.end('Here is our short history')
    }
    if(req.url === '/faq'){
        res.end('here are frequently asked questions')
    }
    if(req.url === '/packages'){
        res.end('here is packages page')
    }
    if(req.url === '/free-packages'){
        res.end('here is free-packages page')
    }
    res.end(`
    <h1>Oops!</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href="/">back home</a>
    `)
})

server.listen(5000)