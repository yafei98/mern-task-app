const express = require('express');
require('dotenv').config();
const connectDb = require('./config/db');
connectDb();

const app = express();

app.use(express.json());//allows us to accept JSON data in the req.body

app.use("/api/products", require('./routes/product.route'))

app.listen(5000, () => {
    console.log("Server started at http://localhost:5000 hello")
})



