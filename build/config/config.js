"use strict";

require('dotenv').config();
module.exports = {
  "development": {
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_DATABASE_NAME,
    "host": process.env.DB_HOST,
    "dialect": process.env.DB_DIALECT,
    "logging": false,
    "freezeTableName": true,
    "query": {
      "raw": true
    },
    "timezone": "+07:00"
  }
};