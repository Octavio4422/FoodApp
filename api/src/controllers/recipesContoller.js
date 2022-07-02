require('dotenv').config();
const { Recipe, Diet } = require('../db.js');
const axios = require('axios');
const { Op } = require('sequelize');
const { API_KEY } = process.env;