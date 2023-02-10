import express from 'express';
import dotenv from 'dotenv';
// import products from './data/Products.js';
import cors from 'cors';
import mysql from 'mysql';

dotenv.config();
// Sequelize;

const app = express();
//use after const app=express()
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '****',
  database: 'gentle',
});

app.get('/', (req, res) => {
  res.json('connected to backend! :)');
});

app.get('/products', (req, res) => {
  const q = 'SELECT * FROM Products';
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`server running on port ${PORT}`));
