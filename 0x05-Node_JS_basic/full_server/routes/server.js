const express = require('express');
const indexRouter = require('./routes/index');

const app = express();

app.use('/', indexRouter);

const PORT = 1245;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

module.exports = app;

