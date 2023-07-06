const express = require('express');
const app = express();
require('dotenv').config();
const db = require('./db');


app.get('/', (req, res) => {
    res.send('Hello, World!');
  });

  const fetchProducts = async () => {
    try {
      const queryText = 'SELECT * FROM products';
      const result = await db.query(queryText);
      const products = result.rows;
      console.log(products);
    } catch (error) {
      console.error('Error executing query:', error);
    }
  };
  
  fetchProducts();

const { PORT } = require('./config')
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});