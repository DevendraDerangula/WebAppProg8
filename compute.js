
const http = require('http')

const hostname = '127.0.0.1'
const port = 3001

const server = http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Content-Type', 'text/plain')

    if (req.method !== 'GET') {
        res.statusCode = 404
        res.end('Not Found')
        return
    }

    const url = new URL(req.url, `http://${hostname}:${port}`)

    const x = Number(url.searchParams.get('x'))
    const y = Number(url.searchParams.get('y'))

    if (!url.searchParams.has('x') || !url.searchParams.has('y') ||
        !Number.isFinite(x) || !Number.isFinite(y) || x <= 0) {
        res.statusCode = 400
        res.end('Please provide valid x and y values. x must be positive.')
        return
    }

    const result1 = Math.imul(x, y)
    const result2 = Math.log(x)

    res.statusCode = 200
    res.end(`Math.imul(${x}, ${y}) is ${result1} and Math.log(${x}) is ${result2}`)
})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
})
