const mongoose = require('mongoose')
const config = require('../Config/config')


let newConfig = config;

mongoose.connect(newConfig, {
    // useNewUrlParser: true,
    // useCreateIndex: true,
    // useFindAndModify: false,
    // useUnifiedTopology: true,


})


module.exports = newConfig;