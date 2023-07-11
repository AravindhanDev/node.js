var http = require("http")
var PORT = 9000

http.createServer(function (req, res) {
    console.log(req)
    if (req.url === "/") {
        res.writeHead(200, { "Content-Type": "text/html" })
        res.write("Johan Liebert")
        res.end()
    }
}).listen(PORT, function () {
    console.log(`Server started on port ${PORT}`)
})
