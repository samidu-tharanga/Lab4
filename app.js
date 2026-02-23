const fs = require('fs');
const http = require('http');

fs.readFile('file.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});

fs.writeFile('file.txt', 'Hello Node!', (err) => {
    if (err) throw err;
    console.log('File Saved!');
});

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('Hello World!');
    res.end();
}).listen(8080, () => {
    console.log('Server running at http://localhost:8080');
});

const myPromise = new Promise((resolve, reject) => {
    const success = true;
    success ? resolve('Success!') : reject('Failure!');
});

async function runTask() {
    try {
        const result = await myPromise;
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

runTask();