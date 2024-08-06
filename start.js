const express = require('express');
const connectDB = require('./db.js');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const Route = require('./Routes/app');

app.use('/',Route);
connectDB();

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log('Server started on port ' + PORT + '...');
});