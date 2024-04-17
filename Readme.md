# Online Bookstore CRUD Operations
## Live Deployment
This application is deployed and live at [Online Bookstore](https://online-bookstore-qdab.onrender.com/).

This repository contains a Node.js application built with Express, EJS files, and PostgreSQL database for managing an online bookstore. The application supports basic CRUD (Create, Read, Update, Delete) operations for books.

## Operations

### 1. Create (Add a New Book)
- Access the "Add New Book" page by visiting `/newBook`.
- Fill out the required fields (title, author, price) and submit the form.
- The new book will be added to the database.
  
<img width="960" alt="Screenshot 2024-04-17 221737" src="https://github.com/Prathibha-yadav/online-bookstore/assets/126705101/7f075bfd-1ddd-4a30-90ad-3e15ced96ddf">

### 2. Read (Display Books)
- The home page displays all books currently stored in the database.
- Access the home page by visiting `/`.
- Each book entry displays its title, author, and price.
  
<img width="960" alt="Screenshot 2024-04-17 221749" src="https://github.com/Prathibha-yadav/online-bookstore/assets/126705101/5da48a2f-1252-4c6f-9d5c-a88431b1ff72">

### 3. Update (Title and Price)
- To update a book's title and/or price, visit the "Update" page for that book by clicking the "Update" button next to the book on the home page.
- Update the fields as necessary and submit the form.
- The book's details will be updated in the database.
  
<img width="960" alt="Screenshot 2024-04-17 221837" src="https://github.com/Prathibha-yadav/online-bookstore/assets/126705101/a59860cb-c69c-46e9-98e0-a43bb6f31de8">

### 4. Delete
- To delete a book, click the "Delete" button next to the book on the home page.
- The book will be removed from the database.
  
<img width="960" alt="Screenshot 2024-04-17 221911" src="https://github.com/Prathibha-yadav/online-bookstore/assets/126705101/f36d22ab-3582-4ec2-a2e4-6ae34eedbdd8">

## Code Structure
- The main application logic is in `app.js`.
- Database models are defined in `models/Book.js`.
- Views (EJS files) are stored in the `views/` directory.

## Dependencies
- Express
- EJS
- PostgreSQL

## Requirements
- Node.js
- PostgreSQL

## Installation
1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Run `npm install` to install dependencies.

## Configuration
1. Set up a PostgreSQL database.
2. Update the database configuration in `models/index.js` if necessary.

## Usage
1. Start the application by running `npm start`.
2. Access the application in your browser at `http://localhost:3000`.
