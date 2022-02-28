const express = require('express')
const books = require('./books')

var app = express()

app.use(express.json())
var PORT = 5000

app.listen(PORT, (err) => {
    if (err) {
        console.log(err)
    }
})

app.get('/books', paginatedResult(books), (req, res) => {
    res.json(res.paginatedResult)
})

function paginatedResult(model) {
    return (req, res, next) => {
        const sortMethod = req.query.sort
        switch (sortMethod) {
            case 'asec':
                books.sort(function (a, b) {
                    var nameA = a.title.toUpperCase()
                    var nameB = b.title.toUpperCase()
                    if (nameA < nameB) {
                        return -1
                    }
                    if (nameA > nameB) {
                        return 1
                    }
                    return 0
                })
                break

            case 'decs':
                books.sort(function (a, b) {
                    var nameA = a.title.toUpperCase()
                    var nameB = b.title.toUpperCase()
                    if (nameA > nameB) {
                        return -1
                    }
                    if (nameA < nameB) {
                        return 1
                    }
                    return 0
                })
                break

            case 'createdAt':
                books.sort(function (a, b) {
                    var nameA = Date.parse(a.createdAt)
                    var nameB = Date.parse(b.ccreatedAt)
                    if (nameA < nameB) {
                        return -1
                    }
                    if (nameA > nameB) {
                        return 1
                    }
                    return 0
                })
                break

            default:
                console.log('other option!')
                break
        }

        const page = parseInt(req.query.page)
        const limit = parseInt(req.query.limit)
        if (!page && !limit) {
            res.json(model)
        }
        const startIndex = (page - 1) * limit
        const endIndex = page * limit
        const results = {}

        if (endIndex < model.length) {
            results.next = {
                page: page + 1,
                limit: limit,
            }
        }

        if (startIndex > 0) {
            results.previous = {
                page: page - 1,
                limit: limit,
            }
        }

        results.books = model.slice(startIndex, endIndex)
        res.json(results)

        res.paginatedResult = results
        next()
    }
}

app.post('/books', (req, res) => {
    const newbook = {
        title: req.body.title,
        description: req.body.description,
        author: req.body.author,
        createdAt: new Date(Date.now()),
        updatedAt: null,
    }
    books.push(newbook)
    res.json(newbook)
})

app.put('/books/:title', (req, res) => {
    const check_title = req.params.title
    let index = books.findIndex((b) => b.title === check_title)

    let updatedbook = {}
    if (index >= 0) {
        console.log(books[index])
        updatedbook = books[index]
        updatedbook.title = req.body.title
        updatedbook.description = req.body.description
        updatedbook.author = req.body.author
        updatedbook.createdAt = req.body.createdAt
        updatedbook.updatedAt = new Date(Date.now())
    }
    res.json(updatedbook)
})

app.delete('/books/:title', (req, res) => {
    const check_title = req.params.title
    let index = books.findIndex((b) => b.title === check_title)
    if (index >= 0) {
        books.splice(index, 1)
        res.json('deleted')
    } else {
        app.status(404)
    }
})
