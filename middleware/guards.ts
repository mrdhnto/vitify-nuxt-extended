export default defineNuxtRouteMiddleware(async (to) => {
  const { $guards } = useNuxtApp();
  
  // Destructure guard functions
  const { isLoggedIn, hasAccess } = $guards;
  
  // Extract meta information from the route
  const meta = to.meta || {};

  // Allow public routes
  if (meta.public) return;

  // Handle routes accessible only to unauthenticated users
  if (meta.unauthenticatedOnly) {
    if (isLoggedIn()) {
      return navigateTo('/homepage'); // Redirect to homepage if already logged in
    }
    return; // Allow access if not logged in
  }

  // Require login for non-public routes
  if (!isLoggedIn()) {
    return navigateTo('/login'); // Redirect to login if not logged in
  }

  // Check for specific permissions if `subject` and `actions` are defined
  if (meta.subject && meta.actions && !hasAccess(meta)) {
    return navigateTo('/unauthorized'); // Redirect to unauthorized page if access is denied
  }

  // Allow access if all checks pass
});