const {DataTypes, Model} = require ("sequelize");
const sequelize = require("../sqldb/connection");

//create the model for messages
class Image extends Model {}
  
// string is only 255 varcar so maybe extend
Image.init({ 
    imageURL: {
        type: DataTypes.STRING, 
        allowNull: false,
    }
}, {
    sequelize, 
    modelName: 'Images' // make sure to include these quotes next time ... stupid
});

module.exports = Image;