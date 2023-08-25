const express = require('express')
const app = express()
const cors = require('cors');
require('./Config/db')
const eventRouter = require('./Route/AddEvents')


const PORT = process.env.PORT || 9000;
app.use(cors())
app.use(express.json())
app.use(eventRouter)


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});


app.listen(PORT, (err) => {
    if (err) {
        throw err;
    }
    console.log(`Server running on Port ${PORT}`)
});



