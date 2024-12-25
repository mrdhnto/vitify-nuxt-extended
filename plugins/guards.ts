import { checkUserPermission } from '~/shared/access-control'
export default defineNuxtPlugin((nuxtApp) => {
  const isLoggedIn = () => {
    const { loggedIn } = useUserSession();
    return loggedIn.value;
  };

  nuxtApp.provide('guards', {
    isLoggedIn,
    hasAccess: (meta) => {
      const { user } = useUserSession(); // Get user state
      const permissions = user.value?.permissions || [];
      return checkUserPermission(meta, permissions);
    },
  });
});
