'use strict';
import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
  class mainPermissionsModel extends Model {
    static associate(models) {
      // define association here
    }
  }

  mainPermissionsModel.init(
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
      tableName: 'permissions',
      modelName: 'mainPermissionsModel',
      timestamps: false,
    }
);

return mainPermissionsModel;
};