'use strict';
import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
  class mainRolesModel extends Model {
    static associate(models) {
      // define association here
    }
  }

  mainRolesModel.init(
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
      tableName: 'roles',
      modelName: 'mainRolesModel',
      timestamps: false,
    }
);

return mainRolesModel;
};