const express = require('express');
require('dotenv').config();
const connectDb = require('./config/db');
connectDb();
const path = require('path');
const app = express();
const PORT = process.env.PORT;
app.use(express.json());//allows us to accept JSON data in the req.body

app.use("/api/products", require('./routes/product.route'))

if (process.env.NODE_ENV == "production") {
    console.log("production enviornment")
    app.use(express.static(path.join(__dirname, "../frontend/dist")))
    app.get(/.*/, (req, res) => {
        res.sendFile(path.resolve(__dirname, "../frontend/dist/index.html"));
    })
}

app.listen(PORT, () => {
    console.log("Server started at http://localhost:5000 hello")
})



