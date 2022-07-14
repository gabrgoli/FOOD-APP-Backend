const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo


   sequelize.define('Recipe', {
    

    id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey:true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    summary: {
      type : DataTypes.TEXT,
      
    },
    healthScore: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    favorite: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    instructions: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
    
    image:{
      type: DataTypes.STRING(12345),
    },
    createdInDb: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    }
  });
};

