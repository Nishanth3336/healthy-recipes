const http = require('http');
const path = require('path');
const fs= require("fs");
const { emitWarning } = require('process');
const cors = require('cors')



const server = http.createServer((req, res)=> {
    console.log(req.url)

    // let filePath = path.join(__dirname, 'public', req.url === "/" ? 'portfolio.html' : req.url);
    
    // let extname = path.extname(filePath)
    // console.log("Ext: ", extname);

    // switch(extname) {
    //     case '.css':
    //         contentType= "text/css";
    //         break;
    //     case '.js':
    //         contentType= "text/javascript";
    //         break;
    //     case '.json':
    //         contentType= "text/json";
    //         break;
    //     case '.jpg':
    //         contentType= "text/jpg";
    //         break;
    //     case '.html':
    //         contentType= "text/html";
    //         break;
    // }

    // console.log(contentType)

    // fs.readFile(filePath, (err, content)=> {
    //     if(err) {
    //         if(err.code = 'ENONET'){    //file doesnt exist
    //             fs.readFile(path.join(__dirname, 'public', '404.html'), 
    //             (err, content)=> {
    //                 if(err) throw err;
    //                     res.writeHead(200, {'Content-Type': 'text/html'});
    //                     res.end(content, 'utf-8');
    //             })
    //         }else {
    //             res.writeHead(500);
    //             res.end(`server error ${err.code} has occured`)
    //         }
    //     }else{
    //         res.setHeader('Access-Control-Allow-Origin', '*');
    //         res.setHeader('Access-Control-Allow-Methods', 'GET, POST')
    //         res.writeHead(200, {'Content-Type': contentType})
    //         res.end(content, 'utf-8')
    //     }
        
    // })

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST')
    if(req.url == "/") {
        fs.readFile(path.join(__dirname, 'public', 'portfolio.html'), 
        (err, content)=> {
            if(err) throw err;
            res.writeHead(200, {'Content-Type': 'text/html'}); 
            res.end(content, 'utf-8');
        })
    }
    else if(req.url == "/pic") {
        fs.readFile(path.join(__dirname, 'public', 'NISH_3.jpeg'), function (err, content) {
            if (err) throw err;
              res.end(content);
            });
    } 
    else if (req.url == "/api") {
        fs.readFile(path.join(__dirname, 'public', 'db.json'), 
        (err, content)=> {
            if(err) throw err;
            res.writeHead(200, {'Content-Type': 'application/json', 'mode': 'no-cors'});
            res.end(content, 'utf-8');
        })
    }
    else {
        fs.readFile(path.join(__dirname, 'public', '404.html'), 
        (err, content)=> {
            if(err) throw err;
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(content, 'utf-8');
        })
    }
        


});

const PORT = process.env.PORT || 3336;
server.listen(PORT, ()=> console.log(`The server is running at ${PORT}`));