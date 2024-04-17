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

module.exports = app;
