const express = require('express');
const redis = require('redis');
const mongoose = require('mongoose')
const routes = require('./routes')
const { getStatus, getStats } = require('./controllers/AppController');
const redisClient = require('./utils/redis');


const app = express();
app.use('/', routes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log("Sever running on port 5000");
})