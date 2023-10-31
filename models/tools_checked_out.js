
const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/connection');

class ToolsCheckedOut extends Model { }

ToolsCheckedOut.init(
    {
        id: {
            type: DataTypes.INTEGER
            , allowNull: false
            , autoIncrement: true
            , primaryKey: true
        }
        , tool_id: {
            type: DataTypes.INTEGER
            , references: {
                model: 'tools'
                , key: 'id'
            }
        }
        , user_id: {
            type: DataTypes.INTEGER
            , references: {
                model: 'users'
                , key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'tools_checked_out'
    }
);

module.exports = ToolsCheckedOut;