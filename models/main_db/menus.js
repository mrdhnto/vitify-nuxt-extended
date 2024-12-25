'use strict';
import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
  class mainMenusModel extends Model {
    static associate(models) {
    }
  }

  mainMenusModel.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: { type: DataTypes.STRING, length: 200, allowNull: false },
      slug: { type: DataTypes.STRING, length: 200, allowNull: false },
    },
    {
      sequelize,
      tableName: 'menus',
      modelName: 'mainMenusModel',
      timestamps: false,
    }
);

return mainMenusModel;
};