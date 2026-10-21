
const http = require('http')

const hostname = '127.0.0.1'
const port = 3001

// Ingredients for Double Chocolate Brownies
const ingredients = [
    { name: 'Flour', amount: 1, unit: 'cup' },
    { name: 'Sugar', amount: 1, unit: 'cup' },
    { name: 'Cocoa Powder', amount: 0.5, unit: 'cup' },
    { name: 'Butter', amount: 0.5, unit: 'cup' },
    { name: 'Chocolate Chips', amount: 1, unit: 'cup' }
]

// Keep track of used ingredients
const used = [false, false, false, false, false]

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html')

    if (req.method !== 'GET') {
        res.statusCode = 404
        res.end('Not Found')
        return
    }

    let result = ''

    if (used.every(item => item === true)) {
        result = 'nothing left'
    } else {
        let index = Math.floor(Math.random() * ingredients.length)

        // Find the next unused ingredient
        while (used[index]) {
            index = (index + 1) % ingredients.length
        }

        used[index] = true

        const ingredient = ingredients[index]

        result = `Ingredient ${index}: ${ingredient.amount} ${ingredient.unit} of ${ingredient.name}`
    }

    res.statusCode = 200

    res.end(`
        <html>
        <head>
            <title>Devendra lists an ingredient</title>
        </head>
        <body>
            <h1>Devendra's Double Chocolate Brownies</h1>
            <h2>Ingredient Collection</h2>
            <p>${result}</p>
        </body>
        </html>
    `)
})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
})
