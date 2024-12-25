// load every model files from respective db, make sure the name not conflicted with another model in other DB as well
import mainUsersModel from './users.js';
import mainMenusModel from './menus.js';
import mainPermissionsModel from './permissions.js';
import mainRolesModel from './roles.js';
import mainUserRolesModel from './user-roles.js';
import mainRolePermissionsModel from './role-permissions.js';
import mainJobTitleModel from './job-title.js';

const tables = {
  mainUsersModel,
  mainMenusModel,
  mainPermissionsModel,
  mainRolesModel,
  mainUserRolesModel,
  mainRolePermissionsModel,
  mainJobTitleModel
}

export default tables;