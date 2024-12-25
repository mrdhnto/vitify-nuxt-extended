'use strict';
import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
  class mainUserRolesModel extends Model {
    static associate(models) {
      this.hasMany(models.mainUsersModel, {
        foreignKey: 'id',
        sourceKey: 'user_id',
        onDelete: 'RESTRICT',
        onUpdate: 'CASCADE',
      });

      this.hasMany(models.mainRolesModel, {
        foreignKey: 'id',
        sourceKey: 'role_id',
        onDelete: 'RESTRICT',
        onUpdate: 'CASCADE',
      });
    }
  }

  mainUserRolesModel.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      user_id: { type: DataTypes.INTEGER, allowNull: false },
      role_id: { type: DataTypes.INTEGER, allowNull: false },
    },
    {
      sequelize,
      tableName: 'user_roles',
      modelName: 'mainUserRolesModel',
      timestamps: false,
    }
);

return mainUserRolesModel;
};