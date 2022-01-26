"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Task,{
        foreignKey: 'userID'
      })
    }
  }
  User.init(
    {
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isAlpha: {
            msg: "El nombre solo debe contener letras"
          },
          len: {
            args:[3, 255],
            msg: "El nombre tiene que tener al menos 3 caracteres"
          }
        }
      },
      apellido: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isAlpha: {
            msg: "El nombre solo debe contener letras"
          },
          len: {
            args:[3, 255],
            msg: "El nombre tiene que tener al menos 3 caracteres"
          }
        }
      },
      edad:DataTypes.INTEGER,
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: {
            msg: "El email debe ser valido"
          }
        }
      },
      contraseña: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: "User",
      modelName: "User",
    }
  );
  return User;
};
