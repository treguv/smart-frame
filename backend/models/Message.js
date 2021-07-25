const {DataTypes, Model} = require ("sequelize");
const sequelize = require("../sqldb/connection");

//create the model for messages
class Message extends Model {}
  
// string is only 255 varcar so maybe extend
Message.init({ 
    messageText: {
        type: DataTypes.STRING, 
        allowNull: false,
    },
    messageTopic: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    sequelize, 
    modelName: 'Messages' // make sure to include these quotes next time ... stupid
});

module.exports = Message;