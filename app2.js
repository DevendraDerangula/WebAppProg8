
const http = require('http')

const hostname = process.env.hostname || '127.0.0.1'
const port = process.env.port || 3001

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')

    res.write('<html><head><title>Devendra Table</title></head>')
    res.write('<body>')
    res.write('<h1>Devendra Derangula - Cities I Want to Visit</h1>')

    res.write('<table border="1">')
    res.write('<tr><th>City</th><th>Country</th><th>Reason</th></tr>')
    res.write('<tr><td>New York</td><td>USA</td><td>Times Square</td></tr>')
    res.write('<tr><td>Tokyo</td><td>Japan</td><td>Technology</td></tr>')
    res.write('<tr><td>Paris</td><td>France</td><td>Eiffel Tower</td></tr>')
    res.write('</table>')

    res.end('</body></html>')
})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
})
