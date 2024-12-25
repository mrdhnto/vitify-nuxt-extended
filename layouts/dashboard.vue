<template>
  <v-app>
    <AppDrawer />
    <AppBar />
    <v-main style="margin-top: var(--margin-top-app-bar);">
      <NuxtPage />
    </v-main>
    <AppFooter />
  </v-app>
</template>

<style scoped>
.v-main {
  padding-top: 0;
  padding-bottom: 0;
  margin-top: var(--v-layout-top);
  margin-bottom: var(--v-layout-bottom);
  height: calc(100vh - var(--v-layout-top) - var(--v-layout-bottom) - var(--margin-top-app-bar));
  overflow-y: auto;
  transition-property: padding;
}
</style>