//1. import mongoose - require mongoose

const mongoose = require('mongoose');
const DB = "product_manager_db"


//connect mongoose lib to MongoDb

mongoose.connect('mongodb://localhost/' + DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Established a connection to the database'))
    .catch(err => console.log('Something went wrong when connecting to the database ', err));