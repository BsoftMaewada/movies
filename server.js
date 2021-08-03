//SERVER
/* ==== External Modules ==== */
const express = require('express');
const indexRouter = require('./routes/index');
const logger = require('morgan');
/* ==== Internal Modules ==== */
require('./config/database');
/* ==== Instanced Modules ==== */
const app = express();
/* ==== Configuration ==== */
const PORT = 5000;
app.set('view engine', 'ejs');
/* ==== Middleware ==== */
app.use(logger('dev'));
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
/* ==== Routes & Controllers  ==== */
app.use('/', indexRouter)
/* ==== Server Listener ==== */
app.listen(PORT, () => {
    console.log('Express is listening on port:${PORT}')
});