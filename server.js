const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

const connectDB = require('./config/db');
connectDB();

//ROUTES
app.use('/api/files', require('./config/db'))

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})