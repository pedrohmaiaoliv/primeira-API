const http = require("http");
const fs = require("fs");


const server = http.createServer(function (req, res) {
	fs.readFile("./login.html", function (error, data) {
		if (error) {
			res.writeHead(404, { "Content-Type": "text/plain" });
			res.end("Error: File not found");
		} else {
			res.writeHead(200, { "Content-Type": "text/html" });
			res.end(data);
		}
	});
});

server.listen(5500, () => {
	console.log("server on na porta 5500");
});
