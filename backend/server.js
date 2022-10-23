require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const taskRoutes = require('./routes/tasks');

const app = express();
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method)
  next();
});

app.use('/api/tasks',taskRoutes);

// connect to db
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("connected to db");

    app.listen(process.env.PORT, () => {
      console.log("Server started")
    });

  })
  .catch((error) => {
    console.log(error);
  })
