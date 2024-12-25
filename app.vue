<script setup>
const theme = useTheme()
provide(
  THEME_KEY,
  computed(() => (theme.current.value.dark ? 'dark' : undefined)),
)
const route = useRoute()
const title = computed(() => {
  return route.meta?.title || route.matched[0].meta?.title || ''
})
useHead({
  title,
  titleTemplate: (t) => (t ? `${t} | Vitify Admin` : 'Vitify Admin'),
  htmlAttrs: { lang: 'en' },
  link: [{ rel: 'icon', href: '/favicon.ico' }],
})
useSeoMeta({
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  description: 'Vuetify 3 + Nuxt 3, Opinionated Admin Starter Template',
  ogImage: '/social-image.png',
  twitterImage: '/social-image.png',
  twitterCard: 'summary_large_image',
})
const color = computed({
  get() {
    return theme.themes.value.light.colors.primary
  },
})
</script>


<template>
  <div>
    <NuxtLoadingIndicator :color="color" />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>