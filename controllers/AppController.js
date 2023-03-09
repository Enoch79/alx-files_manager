const redisClient = require('../utils/redis');
const mongoose = require('mongoose');
const User = require('../models/User');
const File = require('../models/File');


const getStatus = async (req, res) => {
    const redisStatus = await redisClient.pingAsync;
    const dbStatus = mongoose.connection.readyState == 1 ? true : false;
    const status = { redis: redisStatus == 'PONG', db: dbStatus };
    res.status(200).json(status);
};


const getStats = async (req, res) => {
    const userCount = await User.countDocuments();
    const fileCount = await File.countDocuments();
    const stats = { users: userCount, files: fileCount };
    res.status(200).json(stats);
};


module.exports = { getStatus, getStats };