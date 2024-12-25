'use strict';
import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
  class mainRolePermissionsModel extends Model {
    static associate(models) {
      this.belongsTo(models.mainMenusModel, {
        foreignKey: 'menu_id',
        sourceKey: 'id',
        onDelete: 'RESTRICT',
        onUpdate: 'CASCADE',
      });

      this.belongsTo(models.mainPermissionsModel, {
        foreignKey: 'permission_id',
        sourceKey: 'id',
        onDelete: 'RESTRICT',
        onUpdate: 'CASCADE',
      });

      this.belongsTo(models.mainRolesModel, {
        foreignKey: 'role_id',
        sourceKey: 'id',
        onDelete: 'RESTRICT',
        onUpdate: 'CASCADE',
      });
    }
  }

  mainRolePermissionsModel.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      role_id: { type: DataTypes.INTEGER, allowNull: false },
      menu_id: { type: DataTypes.INTEGER, allowNull: false },
      permission_id: { type: DataTypes.INTEGER, allowNull: false },
    },
    {
      sequelize,
      tableName: 'role_permissions',
      modelName: 'mainRolePermissionsModel',
      timestamps: false,
    }
);

return mainRolePermissionsModel;
};