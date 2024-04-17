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
