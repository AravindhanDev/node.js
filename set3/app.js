var http = require("http")
var date = require("./date.js")
var daysLeft = require("./daysLeft.js")

function allowAccess(res) {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Methods", "POST")
    res.setHeader("Access-Control-Allow-Headers", "Content-Type")
}

var server = http.createServer(function (req, res) {
    if (req.method === "OPTIONS") {
        allowAccess(res)
        res.writeHead(204)
        res.end()
        return
    }
    allowAccess(res)
    if (req.url === "/currentDate" && req.method === "GET") {
        res.writeHead(200, { "content-type": "application/json" })
        res.end(JSON.stringify({ currentDate: date.currentDate }))
    }
    if (req.url === "/fromNow" && req.method === "POST") {
        var body = ""
        req.on("data", function (data) {
            body += data
        })
        req.on("end", function () {
            var jsonData = JSON.parse(body)
            var left = daysLeft.fromNow(new Date(jsonData.to))
            res.writeHead(200, { "content-type": "application/json" })
            res.end(JSON.stringify({ daysLeft: left }))
        })
    }
    if (req.url === "/daysLeft" && req.method === "POST") {
        var body = ""
        req.on("data", function (data) {
            body += data
        })
        req.on("end", function () {
            var jsonData = JSON.parse(body)
            var left = daysLeft.fromTo(
                new Date(jsonData.to),
                new Date(jsonData.from)
            )
            res.writeHead(200, { "content-type": "application/json" })
            res.end(JSON.stringify({ daysLeft: left }))
        })
    }
})

server.listen(9000, function () {
    console.log("Server started on port 9000")
})
