
const Tools = require('./tools');
const Users = require('./users');
const ToolsCheckedOut = require('./tools_checked_out');

console.log('Sync DB Models');

// Model Relationships
Users.hasMany(ToolsCheckedOut, {
    foreignKey: 'user_id',
});

Tools.hasMany(ToolsCheckedOut, {
    foreignKey: 'tool_id',
});


// Model Associations

Users.belongsToMany(Tools, {
    through: ToolsCheckedOut,
    foreignKey: 'user_id',
});

Tools.belongsToMany(Users, {
    through: ToolsCheckedOut,
    foreignKey: 'tool_id',
});

ToolsCheckedOut.belongsTo(Tools, {
    foreignKey: 'tool_id'
});

module.exports = { Tools, Users, ToolsCheckedOut };
