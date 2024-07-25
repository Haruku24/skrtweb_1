const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: 'localhost',
  port: 3307, // Ganti dengan port yang sesuai
  user: 'root',
  password: '',
  database: 'skrt_db'
});


db.connect(err => {
  if (err) {
    console.error('Database connection failed:', err.stack);
    return;
  }
  console.log('Connected to database.');
});

app.post('/submit', (req, res) => {
  const { name, address, phone, paymentMethod } = req.body;
  const sql = 'INSERT INTO payments (name, address, phone, payment_method) VALUES (?, ?, ?, ?)';
  db.query(sql, [name, address, phone, paymentMethod], (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send('Data inserted');
    }
  });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
