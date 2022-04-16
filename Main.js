const http = require("http");
const fs = require('fs').promises;

const host = 'localhost';
const port = 8000;

const htmlRequest = function (req, res) {
    
    const path = req.url
    console.log(path)

    // index html file (default)
    if (path == '/') {
        readFileResponse(res, "./index.html" , "text/html");
        return;
    }

    // file reader
    if (path.includes('.html')) {
        readFileResponse(res, `.${path}` ,"text/html");
        return;
    }

    if (path.includes('.js')) {
        readFileResponse(res, `.${path}`, "text/javascript");
        return;
    }

    // else error 404 not found
    res.writeHead(404);
    res.end("Resource on server not found!");
}

const readFileResponse = function (res, path, type) {
    console.log(`path:${path}`)
    console.log(`type:${String(type)}`)

    fs.readFile(path)
        .then(contents => {
            res.setHeader("Content-Type", type);
            res.writeHead(200);
            res.write(contents);
            res.end();
        }).catch(err => {
            console.log(err)
            res.writeHead(500);
            res.end(err);
        })
}

const server = http.createServer(htmlRequest);

server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});