'use strict';
import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
  class mainJobTitleModel extends Model {
    static associate(models) {
    }
  }

  mainJobTitleModel.init(
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
      tableName: 'job_title',
      modelName: 'mainJobTitleModel',
      timestamps: false,
    }
);

return mainJobTitleModel;
};