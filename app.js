const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const path = require('path');
const helmet = require('helmet');
const mongoose = require('mongoose');
const config = require('./api/config/main');
const passport = require('passport');
const router = require('./api/routes/index');

mongoose.connect(config.database);
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended:false}));
app.use(bodyParser.json());
app.use(cookieParser());

app.use(logger('dev'));
app.use(helmet());
app.use(passport.initialize());

app.use('/', express.static(__dirname + '/public'));
app.use('/assets', express.static(__dirname + '/public'));
router(app);

const server = app.listen(port);
console.log(`Listening in port ${port}`);