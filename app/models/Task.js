"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Task.belongsTo(models.User, {foreignKey: "userID"})
    }
  }
  Task.init(
    {
      titulo: DataTypes.STRING,
      descripcion: DataTypes.TEXT,
    },
    {
      sequelize,
      tableName: "Tasks",
      modelName: "Task",
    }
  );
  return Task;
};
