const http = require('http');
const hostname = '127.0.0.1';
const port = 4758; 

const server = http.createServer((req, res) => {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/plain');
	res.end('Funciona'); 
});

server.listen(port, hostname, () => {
	console.log('Servidor funcionando em http://${hostname}:${port}/');
});

