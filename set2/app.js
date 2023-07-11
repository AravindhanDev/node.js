var fs = require("fs")
var http = require("http")

http.createServer(function (req, res) {
    if (req.url === "/") {
        res.write("dir path " + __dirname)
        res.write("\nfile path " + __filename)
        res.end()
    }
    if (req.url === "/readFile") {
        fs.readFile(__dirname + "/demo.txt", "utf-8", function (err, data) {
            if (err) return
            res.writeHead(200, { "content-type": "application/json" })
            console.log(data)
            res.end(JSON.stringify({ fileContent: data }))
        })
    }
}).listen(9000, function () {
    console.log("Server started on port 9000")
})
