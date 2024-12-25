<script setup lang="ts">
import type { RouteRecordRaw } from 'vue-router';
const { hasAccess } = useNuxtApp().$guards;

const { item } = defineProps<{
  item: RouteRecordRaw;
}>();

// Function to check if the user has permission for a specific route
const canAccessRoute = (route: RouteRecordRaw) => {
  const meta = route.meta || {};
  // Uncomment this if login is required for all routes
  // if (!isLoggedIn()) return false;
  if (!meta.subject || !meta.actions) return true; // No restrictions, always accessible
  return hasAccess(meta); // Use guard to check permission
};

// Filter visible children based on user permissions
const visibleChildren = computed(() =>
  item.children
    ?.filter((child) => child.meta?.icon && canAccessRoute(child)) // Filter by icon and permission
    .sort((a, b) => (a.meta?.drawerIndex ?? 99) - (b.meta?.drawerIndex ?? 98)) // Sort by drawerIndex
);

const visibleChildrenNum = computed(() => visibleChildren.value?.length || 0);

// Determine if the current item is a single menu item (not a parent)
const isItem = computed(() => !item.children || visibleChildrenNum.value === 0);
const title = toRef(() => item.meta?.title);
const icon = toRef(() => item.meta?.icon);

// Check if the parent menu itself is accessible
const canAccessItem = computed(() => canAccessRoute(item) || visibleChildrenNum.value > 0);

// Route destination for single menu items
const to = computed<RouteRecordRaw>(() => ({
  name: item.name || visibleChildren.value?.[0]?.name,
}));
</script>

<template>
  <!-- Render as a single menu item -->
  <v-list-item
    v-if="isItem && icon && canAccessItem"
    :to="to"
    :prepend-icon="icon"
    active-class="text-primary"
    :title="title"
  />

  <!-- Render as a group with children -->
  <v-list-group
    v-else-if="!isItem && icon && canAccessItem"
    :prepend-icon="icon"
    color="primary"
  >
    <template #activator="{ props: vProps }">
      <v-list-item :title="title" v-bind="vProps" />
    </template>
    <!-- Render visible children only -->
    <AppDrawerItem
      v-for="child in visibleChildren"
      :key="child.name"
      :item="child"
    />
  </v-list-group>
</template>
