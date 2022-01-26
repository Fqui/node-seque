const express = require('express');
const User = require('./User');
const Task = require('./Task');

const Router = express.Router();

//Rutas
User(Router);
Task(Router);

module.exports = Router;