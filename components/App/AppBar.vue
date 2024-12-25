<script setup lang='ts'>
import { mergeProps } from 'vue'
import { useDisplay } from 'vuetify'

const theme = useTheme()
const drawer = useState('drawer')
const route = useRoute()
const { mobile } = useDisplay()

const breadcrumbs = computed(() => {
  const allBreadcrumbs = route!.matched
    .filter(
      (item) =>
        item.meta && item.meta.title && !(item.meta?.breadcrumb === 'hidden'),
    )
    .map((r) => ({
      title: r.meta.title!,
      disabled:
        r.meta?.breadcrumb === 'disabled' || r.path === route.path || false,
      to: r.path,
    }))

    return mobile.value ? [allBreadcrumbs[allBreadcrumbs.length - 1]] : allBreadcrumbs
})
const isDark = computed({
  get() {
    return theme.global.name.value === 'dark' ? true : false
  },
  set(v) {
    theme.global.name.value = v ? 'dark' : 'light'
  },
})
const { loggedIn, clear, user } = useUserSession()

async function logout(){
  await clear()
  navigateTo('/login')
}

</script>

<template>
  <v-app-bar flat>
    <v-app-bar-nav-icon @click="drawer = !drawer" />
    <v-breadcrumbs  :items="breadcrumbs" />
    <v-spacer />
    <div id="app-bar" />
    <v-switch
      v-model="isDark"
      color=""
      hide-details
      density="compact"
      inset
      false-icon="mdi-white-balance-sunny"
      true-icon="mdi-weather-night"
      class="opacity-80"
    />
    <AppNotification />
    <v-menu location="bottom" width="270px">
      <template #activator="{ props: menu }">
        <v-tooltip location="bottom">
          <template #activator="{ props: tooltip }">
            <v-btn icon v-bind="mergeProps(menu, tooltip)" class="ml-1">
              <v-icon icon="mdi-account-circle" size="36" />
            </v-btn>
          </template>
          <span>User</span>
        </v-tooltip>
      </template>
      <v-list>
        <v-list-item>
          <template #prepend>
            <v-list-item-action start>
              <v-badge dot location="bottom right" offset-x="3" offset-y="3" color="success" bordered>
                <v-avatar color="primary" variant="tonal">
                  <v-icon icon="mdi-account-circle" />
                </v-avatar>
              </v-badge>
            </v-list-item-action>
          </template>

          <v-list-item-title class="font-weight-medium user-text">
            {{ user.fullname || user.email }}
          </v-list-item-title>
          <v-list-item-subtitle>{{ user.job_title }}</v-list-item-subtitle>
        </v-list-item>
        <v-divider class="my-2" />
        <v-list-item title="Logout" prepend-icon="tabler-logout" @click="logout()" />
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<style scoped>

.user-info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px;
  max-width: 200px;
}

.user-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: min-content;
  cursor: pointer;
  position: relative;
}

.user-text:hover {
  animation: scroll-left 3s linear infinite;
}

@keyframes scroll-left {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(calc(-100% + 190px));
  }
}
</style>