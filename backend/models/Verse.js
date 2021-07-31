const {DataTypes, Model} = require ("sequelize");
const sequelize = require("../sqldb/connection");

//create the model for messages
class Verse extends Model {}
  
// string is only 255 varcar so maybe extend
Verse.init({ 
    verseText: {
        type: DataTypes.STRING, 
        allowNull: false,
    },
    verseBook: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    verseChapter: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    verseNumber: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    sequelize, 
    modelName: 'Verse' // make sure to include these quotes next time ... stupid
});

module.exports = Verse;