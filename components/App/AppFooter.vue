<script lang="ts">
import { can } from '~/shared/access-control'

export default {
  setup() {
    return { can }; // Explicitly expose `can` to the template
  },
};
</script>

<template>
  <v-footer app>
    <v-list-item class="drawer-footer px-0 d-flex flex-column justify-center">
        <div class="text-caption pt-6 pt-md-0 text-center text-no-wrap">
          &copy; Copyright 2023
          <a
            href="https://github.com/kingyue737"
            class="font-weight-bold text-primary"
            target="_blank"
            >Yue JIN</a
          >
          <span> & </span>
          <a
            href="https://www.nustarnuclear.com/"
            class="font-weight-bold text-primary"
            target="_blank"
            >NuStar</a
          >
          <span> | </span>
          &copy; Extended Ver.
          <a
            href="https://github.com/Mrdhnto"
            class="font-weight-bold text-primary"
            target="_blank"
            >Mrdhnto</a
          >
        </div>
      </v-list-item>
    <v-spacer />
    <v-defaults-provider
      :defaults="{ VBtn: { variant: 'text', size: 'x-small' } }"
    >
      <AppSettings v-if="can('manage', 'all')" />
    </v-defaults-provider>
  </v-footer>
</template>
<style>
.v-footer {
  padding: 0px 10px !important;
  > .v-btn--icon {
    .v-icon {
      height: 1.25em;
      width: 1.25em;
    }
  }
}
</style>
