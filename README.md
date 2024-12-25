<p align="center">
  <img alt="Vitify - Opinionated Vuetify Admin Starter Template" src="public/vitify-nuxt.svg" width=100px/>
</p>
<h1 align="center">Vitify Nuxt Extended</h1>

<p align="center">
  <a href="https://github.com/vuejs/vue">
    <img src="https://img.shields.io/badge/nuxt-3-brightgreen.svg" alt="vue">
  </a>
  <a href="https://github.com/vuetifyjs/vuetify">
    <img src="https://img.shields.io/badge/vuetify-3-blue.svg" alt="vuetify">
  </a>
  <a href="https://github.com/kingyue737/vitify-admin/blob/main/LICENSE">
    <img src="https://img.shields.io/github/license/mashape/apistatus.svg" alt="license">
  </a>
</p>

<p align='center'>
<b>Vuetify 3</b> + <b>Nuxt 3</b> + <b>Sequelize</b> + <b>RBAC</b><br/>


</p>
<i>
All the content is still on the work, it may be unstable and design can be changed in the future updates.</i>
<p align='center'>
<b>Any contributions is welcomed!</b>
</p>

## Features

- 💚 [Nuxt 3](https://nuxt.com/) - SPA, ESR, File-based routing, components auto importing, modules, etc

- 💥 SSR out of the box - powered by [Vuetify Nuxt module](https://github.com/vuetifyjs/nuxt-module)

- ⚡️ [Vite](https://github.com/vitejs/vite), [pnpm](https://pnpm.io/), [ESBuild](https://github.com/evanw/esbuild) - born with fastness

- 🍍 [State Management via Pinia](https://pinia.vuejs.org/)

- 📥 APIs auto importing - for Composition API, VueUse and custom composables

- 🦾 RBAC in both app (Client & Server)


<br>

### Admin Starter Template

- 🪟 Default layout with drawer, header and footer

- 🧭 Auto-generated navigation drawer and breadcrumbs based on routes

- 🔔 Notification store

- 🔍 [Sequelize ORM](https://sequelize.org/) for Mature and most supported DB

- 📉 Data visualization with [nuxt-echarts](https://github.com/kingyue737/nuxt-echarts)

- 🎨 Theme color customization and dark mode

- 📱 Multiple and Responsive layout

- 🛡️ Authentication backed-in using [nuxt-auth-utils](https://github.com/Atinux/nuxt-auth-utils)

- 🕵️ RBAC on Client and Server inspired by CASTL


## Pre-packed

### Nuxt Modules

- [Vuetify Nuxt Module](https://github.com/vuetifyjs/nuxt-module) - Zero-config Nuxt Module for Vuetify
- [VueUse](https://github.com/vueuse/vueuse) - Collection of useful composition APIs
- [Pinia](https://github.com/vuejs/pinia) - Intuitive, type-safe, light and flexible Store for Vue
- [Nuxt Icon](https://github.com/nuxt/icon) - Icon module for Nuxt with 200,000+ ready to use icons from Iconify
- [Nuxt ECharts](https://github.com/kingyue737/nuxt-echarts) - Nuxt module for Apache ECharts™
- [Nuxt Auth Utils](https://github.com/Atinux/nuxt-auth-utils) - Minimalist Authentication module for Nuxt
- [Nuxt Cron](https://github.com/hywax/nuxt-cron) - Minimalist Nuxt Cronjob function runner

### Coding Style

- [Prettier](https://prettier.io/), single quotes, no semi
- [ESLint flat config](https://eslint.org/docs/latest/use/configure/configuration-files-new) with adapted [@nuxt/eslint](https://github.com/nuxt/eslint), future-proof

### Dev tools

- [TypeScript](https://www.typescriptlang.org/)
- [pnpm](https://pnpm.js.org/) - Fast, disk space efficient package manager
- [Netlify](https://www.netlify.com/) - zero-config deployment
- [VS Code Extensions](./.vscode/extensions.json)
  - [Vue - Official](https://marketplace.visualstudio.com/items?itemName=Vue.volar) - TypeScript support inside Vue SFCs
  - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) - Find and fix problems in your code
  - [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) - Code formatter
  - [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)

## Developer Note

I know some of this implementation will need to reconfigure some plugin behaviour or even break entirelly, I also don't have enough time to test all of the features (like edge deploy). But I hope this project will give some people basic starter template to their next project without trying hard thinkering their code to works.

## License

[MIT License](./LICENSE)