
const { DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

Tools.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        tool_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        date_added: {
            type: DataTypes.DATE,
            defaultValue: Sequelize.NOW
        },
        is_available:
        {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'tools',
    }
);

module.exports = Tools;