
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
        , user_id: {
            type: DataTypes.INTEGER
            , references: {
                model: 'users'
                , key: 'id'
            }
        }
        , tool_id: {
            type: DataTypes.INTEGER
            , references: {
                model: 'tools'
                , key: 'id'
            }
        }
        , checkout_date: {
            type: DataTypes.DATE
        }
        , return_date: {
            type: DataTypes.DATE
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