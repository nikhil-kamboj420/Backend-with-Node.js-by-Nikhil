import http from 'http';
import fs from 'fs';
import path from 'path';

let port = 3000;
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.write('Welcome to the HTTP server\n');
        res.write('Try visiting /hello or /json or /html\n');
        res.end();
    } else if (req.url === '/hello') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.write('Hello World from /hello');
        res.end();
    } else if (req.url === '/json') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify({ message: 'This is a JSON response', time: new Date().toISOString() }));
        res.end();
    } else if (req.url === '/html') {
        const filePath = path.join(process.cwd(), 'index.html');
        fs.readFile(filePath, (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Error loading HTML file');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.write('404 Not Found');
        res.end();
    }
});
server.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
});