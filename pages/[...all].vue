<script setup lang="ts"></script>

<template>
  <div class="d-flex flex-column items-center justify-center overflow-hidden relative text-center h-100">
    <div class="mx-auto">
      <v-empty-state>
        <template v-slot:media>
          <v-icon icon="custom:vitify-nuxt" size="3em" color="primary" class="mb-4" />
        </template>
    
        <template v-slot:headline>
          <div class="text-h4 text-black"><span class="text-primary">404</span> Page Not Found</div>
        </template>

        <template v-slot:title>
          <div class="text-small">The page you were looking for does not exist</div>
        </template>

        <template v-slot:actions>
          <v-btn
            class="text-none"
            color="primary"
            elevation="1"
            rounded="md"
            text="Home"
            width="96"
            to="/"
          />
        </template>
        
      </v-empty-state>
    </div>
  </div>
</template>

<style scoped>
</style>