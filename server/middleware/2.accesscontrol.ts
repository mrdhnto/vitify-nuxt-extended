import fetchPermissionsFromDb from "~/server/helpers/cachePermission";

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const url = event.node.req.url;

  if(!url.includes('/api/')) return;

  if (config.public.nonAuthURL.includes(url)) {
    return; // No authentication needed for login
  }
  
  const nodeCache = useNitroApp().h3App.nodeCache

  const loggedInUser = event.context.loggedInUser

  if(!loggedInUser.hasOwnProperty('permissions')) {
    const cachedPermissions = nodeCache.get(`auth-${loggedInUser.id}`);
    
    if (!cachedPermissions) {
      const permissions = await fetchPermissionsFromDb(loggedInUser);
        nodeCache.set(`auth-${loggedInUser.id}`, permissions);
        event.context.loggedInUser.permissions = permissions;
        return
    }

    event.context.loggedInUser.permissions = cachedPermissions;
    return
  }

  event.context.loggedInUser.permissions = loggedInUser.permissions
})