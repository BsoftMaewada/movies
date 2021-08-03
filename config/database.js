const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/movies', {
        useNewUrlParser: true, 
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false,

});

const db = mongoose.connection;

db.on('connected', () =>{
    console.log('Connected to MongoDB at ${db.host}:${db.port}');
});