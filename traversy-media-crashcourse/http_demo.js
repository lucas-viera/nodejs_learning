const http = require ('http');

http.createServer((req, res) => {
    res.write('Hello from http server');
    res.end();
})
.listen(5555, () => console.log('Server is running...'));