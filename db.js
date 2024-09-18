const path = require('path');
const { Sequelize, Model, DataTypes } = require('sequelize');

// TODO - create the new sequelize connection

const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: path.join(__dirname, 'db.sqlite')
})

sequelize.sync()
module.exports = {
    sequelize,
    Sequelize,
    Model,
    DataTypes
};
