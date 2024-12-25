'use strict';
import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
  class mainUsersModel extends Model {
    static associate(models) {
      // define association here
      this.belongsTo(models.mainJobTitleModel, {
        foreignKey: 'job_title_id',
        sourceKey: 'id',
      })
    }
  }

  mainUsersModel.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      fullname: { type: DataTypes.STRING, length: 200, allowNull: false },
      email: { type: DataTypes.STRING, length: 200, allowNull: false },
      password: { type: DataTypes.STRING, length: 200, allowNull: false },
      job_title_id: { type: DataTypes.INTEGER, allowNull: false},
    },
    {
      sequelize,
      modelName: 'users',
      timestamps: false,
    }
);

return mainUsersModel;
};