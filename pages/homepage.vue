<script setup lang="ts">
definePageMeta({
  layout: 'dashboard',
  icon: 'mdi-home',
  title: 'Homepage',
  drawerIndex: 0,
  middleware: 'guards',
  subject: 'home',
  actions: 'read'
})
</script>

<template>
  <div class="d-flex flex-column items-center justify-center overflow-hidden relative text-center" style="height: -webkit-fill-available;">
    <div>
      <v-icon icon="custom:vitify-nuxt" size="3em" color="primary" class="mb-4" />
      <p>Opinionated Starter Template</p>
    </div>
  </div>
</template>

<style scoped>
</style>
