<script setup lang="ts">
definePageMeta({
  layout: 'dashboard',
  title: 'Nested Routes',
  icon: 'mdi-view-list',
  drawerIndex: 2,
  middleware: 'guards',
  subject: 'nested-page',
  actions: 'read'
})
</script>
<template>
  <NuxtPage />
</template>
