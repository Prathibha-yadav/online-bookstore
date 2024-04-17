const express = require('express');
const app = express();
const { Book, User } = require("./models");
const path = require("path");

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.get('/', async (req, res) => {
  try {
    const books = await Book.findAll();
    res.render('Home', { books }); // Pass books data to the Home view
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/newBook', (req, res) => {
  res.render('newBook'); 
});

app.post('/books', async (req, res) => {
  try {
    const { title, author, price } = req.body;
    const book = await Book.create({ title, author, price });
    res.redirect('/'); // Redirect to the home page after adding a new book
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/books/:id/delete', async (req, res) => {
  try {
    const { id } = req.params;
    await Book.deleteBook(id);
    res.redirect('/'); // Redirect to the home page after deleting the book
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// app.js
app.get('/books/:id/update', async (req, res) => {
    try {
        const book = await Book.findByPk(req.params.id);
        res.render('updateBook', { book: book });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


// app.js
app.post('/books/:id/update', async (req, res) => {
    try {
        const { id } = req.params;
        const { title, price } = req.body;
        await Book.updateBook(id, title, price);
        // Redirect to home page or any other appropriate page
        res.redirect('/');
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

  

module.exports = app;
