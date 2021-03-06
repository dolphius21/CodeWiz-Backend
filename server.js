// Dependencies
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const app = require('./app');

// MongoDB Connection String
const connectionString = process.env.CONNECTION_STRING;

mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  })
  .then(() => console.log('MongoDB connection successful!'));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`App running on port ${port}...`));
