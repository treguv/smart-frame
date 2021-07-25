const {DataTypes, Model} = require ("sequelize");
const sequelize = require("../sqldb/connection");

//create the model for messages
class Messages extends Model {}

Messages.init({ 
    messageText: {
        type: DataTypes.STRING, //TODO this is varchar255, maybe extend later
        allowNull: false,
    },
    messageTopic: {
        type: Datatypes.STRING,
        allowNull: false,
    }
}, 
{
    sequelize, 
    modelName: Messages
})

module.exports = Messages;