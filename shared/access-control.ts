export const checkUserPermission = (meta, permissions) => {
  if (!meta || !permissions) return false;

  // Allow if the user has a global "manages" permission
  const hasAllPermission = permissions.some(
    (perm) => perm.subject === 'manages' && perm.actions.includes('all')
  );
  if (hasAllPermission) return true;

  // Find specific permission for the subject
  const userPermission = permissions.find((perm) => perm.subject === meta.subject);
  if (!userPermission) return false;

  meta.actions = Array.isArray(meta.actions) ? meta.actions : [meta.actions];
  // Check if all required actions are included
  return meta.actions.every((action) => userPermission.actions.includes(action));
};

export const can = (subject: string, actions: string, event: object = {}) => {
  let user
  if(typeof useUserSession !== 'function') user = event?.context?.loggedInUser
  else {
    const { session } = useUserSession();
    user = session?._value?.user || null;
  }
  const permissions = user?.permissions || [];
  return checkUserPermission({ subject, actions: Array.isArray(actions) ? actions : [actions] }, permissions); // Normalize actions to an array
};