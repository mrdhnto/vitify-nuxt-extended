<script setup lang="ts">
definePageMeta({
  title: 'Menu 2',
  icon: 'mdi-view-list',
  middleware: 'guards',
  subject: 'nested-2',
  actions: 'read'
})
</script>
<template>
  <NuxtPage />
</template>
