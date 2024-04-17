'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    static associate(models) {
      // define association here
    }

    static async addBook(title, author, price) {
      try {
        const book = await Book.create({ title, author, price });
        return book;
      } catch (error) {
        throw new Error('Failed to add book');
      }
    }

    static async deleteBook(id) {
      try {
        const book = await Book.findByPk(id);
        if (!book) {
          throw new Error('Book not found');
        }
        await book.destroy();
        return true; 
      } catch (error) {
        throw new Error('Failed to delete book');
      }
    }

    static async updateBook(id, title, price) {
      try {
        const book = await Book.findByPk(id);
        if (!book) {
          throw new Error('Book not found');
        }
        book.title = title;
        book.price = price;
        await book.save();
        return book; 
      } catch (error) {
        throw new Error('Failed to update book');
      }
    }
  }

  Book.init({
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    price: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'Book',
  });

  return Book;
};
