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

// Get Home Page
app.get('/', async (req, res) => {
  try {
    const books = await Book.findAll();
    res.render('Home', { books }); 
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Add New Book Page
app.get('/newBook', (req, res) => {
  res.render('newBook'); 
});

app.post('/books', async (req, res) => {
  try {
    const { title, author, price } = req.body;
    const book = await Book.create({ title, author, price });
    res.redirect('/'); 
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete Existing Book
app.post('/books/:id/delete', async (req, res) => {
  try {
    const { id } = req.params;
    await Book.deleteBook(id);
    res.redirect('/');
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get Update Page
app.get('/books/:id/update', async (req, res) => {
    try {
        const book = await Book.findByPk(req.params.id);
        res.render('updateBook', { book: book });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Update Existing Book
app.post('/books/:id/update', async (req, res) => {
    try {
        const { id } = req.params;
        const { title, price } = req.body;
        await Book.updateBook(id, title, price);
        res.redirect('/');
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = app;
