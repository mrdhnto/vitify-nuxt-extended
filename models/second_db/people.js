'use strict';
import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
  class People extends Model {
    static associate(models) {
    }
  }

  People.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      role: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: 'people',
      modelName: 'People',
      timestamps: false,
    }
  );

  return People;
};
