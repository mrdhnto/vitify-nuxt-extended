<script setup lang="ts">
const router = useRouter();
const { fetch } = useUserSession();
const theme = useTheme()

const email = ref('')
const password = ref('')
const error = ref('')
const showPassword = ref(false)

const tokenCookie = useCookie('nuxt-token', {
  httpOnly: false, // Set to true for server-only cookies
  secure: process.env.NODE_ENV === 'production', // Secure cookies in production
  sameSite: 'strict',
});

const handleLogin = async () => {

  error.value = false
  try {
    await $fetch('/api/auth/login',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json' // Specify the content type
      },
      body: JSON.stringify({email: email.value,password: password.value})
    })
    .then( async response => {
      if(response.code === 200 && response.data.jwt) {
        tokenCookie.value = response.data.jwt;
        await fetch()
        router.push({name: 'homepage'})
      }
      
    })
  } catch (err) {
    error.value = err.message || 'Login failed';
  }
};

const isDark = computed({
  get() {
    return theme.global.name.value === 'dark' ? true : false
  },
  set(v) {
    theme.global.name.value = v ? 'dark' : 'light'
  },
})

definePageMeta({
  layout: 'blank',
  title: 'Login Page',
  drawerIndex: 0,
  middleware: 'guards',
  unauthenticatedOnly: true
})
</script>

<template>
  <div class="d-flex flex-column items-center justify-center overflow-hidden relative text-center h-100">
    <div class="div-login mx-auto">
      <v-form  @submit.prevent="handleLogin">
        <v-card id="login-card" class="pa-4">
            <v-icon icon="custom:vitify-nuxt" size="3em" color="primary" class="mb-4" />
            <v-card
              :color="isDark ? 'grey-lighten-1' : 'grey-darken-3'"
              variant="outlined"
              class="mx-auto"
            >
              <v-card-item>
                <div>
                  <div class="text-caption text-left">
                    Superuser: superuser@vitivy.ext | superuser123<br />
                    Admin: admin@vitivy.ext | admin123<br />
                  </div>
                </div>
              </v-card-item>
            </v-card>
          <v-text-field
            v-model="email"
            color="primary"
            placeholder="email"
            label="Email"
            class="mx-auto mt-4"
            variant="underlined"
            type="email"
            required
          />
          <v-text-field
            v-model="password"
            :type="showPassword ? 'text' : 'password'"
            color="primary"
            placeholder="password"
            label="Password"
            class="mx-auto"
            variant="underlined"
            :append-inner-icon="showPassword ? 'tabler-eye' : 'tabler-eye-off'"
            required
            @click:append-inner="showPassword = !showPassword"
          />
          <div v-if="error !== false && error !== ''" class="text-error mb-2">{{ error }}</div>
          <v-btn class="mr-2 mt-2" rounded="md" size="large" color="primary" type="submit" block>
            LOGIN
          </v-btn>
        </v-card>
      </v-form>
    </div>
  </div>
</template>

<style scoped>
.div-login {
  width: -webkit-fill-available;

  #login-card {
    height: 100vh;
    align-content: center;
  }
}

@media screen and (min-width: 400px) {
  .div-login {
    max-width: 400px;
    
    #login-card {
      height: unset;
      align-content: unset;
    }
  }
}
</style>
