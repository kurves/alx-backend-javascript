const express = require('express');
const countStudents = require('./3-read_file_async');

const databasePath = process.argv[2];

const app = express();

app.use((req, res, next) => {
  res.setHeader('Content-Type', 'text/plain');
  next();
});

app.get('/', (req, res) => {
  res.status(200).send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  res.status(200).write('This is the list of our students\n');
  try {
    await countStudents(databasePath);
  } catch (error) {
    res.write(error.message);
  }
  res.end();
});

app.listen(1245, () => {
  console.log('Server is listening on port 1245');
});

module.exports = app;

