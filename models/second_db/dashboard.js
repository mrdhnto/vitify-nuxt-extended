'use strict';
import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
  class Dashboard extends Model {
    static associate(models) {
    }
  }

  Dashboard.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      icon: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      value: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      unit: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      color: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      caption: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    },
    {
      sequelize,
      tableName: 'dashboard',
      modelName: 'Dashboard',
      timestamps: false,
    }
  );

  return Dashboard;
};
