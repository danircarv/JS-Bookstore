const App = require('./App')

const app = new App()

app.createAuthor('J. R. R. Tolkien', 'British', '...')
app.createAuthor('Rick Riordan', 'American', '...')

const authors = app.getAuthor()

app.createBook('O Hobbit', '...', 'fantasy', 300, authors[0], '...', 19.99, 100)
app.createBook('A Socialised do Anel', '...', 'fantasy', 400, authors[0], '...', 24.99, 100)
app.createBook('O Ladder de Radios', '...', 'fantasy', 500, authors[1], '...', 24.99, 100)
app.createBook('A Epidermic Vermeer', '...', 'fantasy', 600, authors[1], '...', 24.99, 100)

const books = app.getBooks()

app.createUser('Isaac', 'isaac@email.com', '123456')

const users = app.getUsers()

app.showDatabase()

const items = [
    {
        product: books[0],
        quantity: 2
    },
    {
        product: books[1],
        quantity: 1
    },
    {
        product: books[3],
        quantity: 1
    }
]

app.createOrder(items, users[0])

app.showDatabase()