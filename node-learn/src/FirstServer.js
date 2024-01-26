const http = require("http")
const querystring = require("querystring")
const fs = require("fs")
const path = require("path")

const port = process.env.PORT || 1008 //TODO: undefined env

const server = http.createServer((req, res) => {
    /*    res.statusCode = 200
        res.setHeader("Content-Type", "text/plain")
        res.end("Hello World")*/

    res.statusCode = 200
    if (req.url === "/") {
        return respondText(req, res);
    }
    if (req.url === "/json") {
        return respondJson(req, res);
    }
    if (req.url.match(/^\/echo/)) {
        return respondEcho(req, res);
    }
    if (req.url.match(/^\/static/)) {
        return respondStatic(req, res)
    }
    return respondNotFound(req, res);
})

server.listen(port, () => {
    console.log(`Server running at port ${port}`)
})

function respondText(req, res) {
    res.setHeader("Content-Type", "text/plain")
    res.end("Hello World")
}

function respondJson(req, res) {
    res.setHeader("Content-Type", "application/json")
    res.end(JSON.stringify({
        text: "Hello World",
        numbers: [1, 2, 3],
    }))
}


function respondEcho(req, res) {
    console.log("req url: ", req.url)
    const {input = ''} = querystring.parse( //这里的解构需要url中有input参数，否则永远是空值
        // const input = querystring.parse(
        req.url
            .split('?') //get url and params
            .slice(1) //remove the first element - url
            .join('')
    )
    console.log("input: ", input)
    res.setHeader('Content-Type', 'application/json')
    res.end(
        JSON.stringify({
            normal: input,
            shouty: input.toUpperCase(),
            characterCount: input.length,
            backwards: input
                .split('')
                .reverse()
                .join('')
        })
    )
}

function respondStatic (req, res) {
    const filename = path.join(__dirname,"/public",req.url.split('/static')[1])//.replaceAll("\\", "\/")//.replaceAll("\/", "\\")
    console.log("filename: ", filename)
    fs.createReadStream(filename)
        .on('error', () => respondNotFound(req, res))
        .pipe(res)
}

function respondNotFound(req, res) {
    res.writeHead(404, {
        "Content-Type": "text/plain",
    })
    res.end("Not Found")
}

/*function fileNotFound(err, res) {
    res.writeHead(404, {
        "Content-Type": "text/plain",
    })
    res.end("Not Found ", JSON.stringify(err) )
}*/
