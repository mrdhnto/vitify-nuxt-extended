import db from '~/models';
import { Op } from "sequelize";
import { responseSuccess, responseError } from '~/server/helpers/responseApi'


export default async function fetchPermissionsFromDb(user) {
    try {
        const UserRolesModel = db.mainUserRolesModel;
        const RolePermissionsModel = db.mainRolePermissionsModel;
        
        const userRoleDetail = await UserRolesModel.findAll({
          where: { user_id: user.id },
        });
        const roleId = userRoleDetail.map((item) => item.role_id);
        
        const rolePermissionsDetail = await RolePermissionsModel.findAll({
          where: { role_id: {
            [Op.in]: roleId
          } },
          include: [
            { model: db.mainMenusModel },
            { model: db.mainPermissionsModel },
          ],
        });

        const permissions = {};

        rolePermissionsDetail.forEach(async (rolePermission) => {
          const menu = rolePermission?.mainMenusModel?.dataValues?.slug;
          const action = rolePermission?.mainPermissionsModel?.dataValues?.slug;
          
          if (!menu || !action) {
            console.warn("Invalid menu or action data:");
            return; // Skip this iteration if data is invalid
          }
      
          // If the menu already exists, add the action if it's not already present
          if (permissions[menu]) {
            if (!permissions[menu].actions.includes(action)) {
              permissions[menu].actions.push(action);
            }
          } else {
            // Initialize the menu with the action
            permissions[menu] = {
              actions: [action],
            };
          }
        });

        const payload = [];
        Object.keys(permissions).forEach((key) => {
          payload.push({
            subject: key,
            actions: permissions[key].actions
          })
        })
        return payload
    } catch(err) {
        console.log(err)
    }
};