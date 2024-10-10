import React from 'react';import logo from './logo.svg';import './App.scss';import socketClient  from "socket.io-client";
const SERVER = "http://127.0.0.1:8080";
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
function App() {
  var socket = socketClient (SERVER);
  return (
    <div>
      <div className='App'></div>
        <header className='App-header'></header>
          <img src='{logo}' className='App-logo' alt='logo'></img>
          <p></p>
          Edit <code>src/app.js</code> and save to reload.
          <p></p>
            className='App-link'
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'

            Learn React
    </div>
  ); 
}
export default App