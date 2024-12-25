<script setup lang="ts">
import type { DataTableHeaders } from '~/plugins/vuetify'

definePageMeta({
  layout: 'dashboard',
  icon: 'mdi-table',
  title: 'Data Table',
  drawerIndex: 3,
  middleware: 'guards',
  subject: 'table',
  actions: ['read', 'update']
})

const search = ref('')
const dialogDelete = useTemplateRef('dialogDelete')
function showDialogDelete(name: string) {
  dialogDelete.value
    ?.open('Are you sure you want to delete this dessert?')
    .then(async (confirmed: boolean) => {
      if (confirmed) {
        try {
          const index = desserts.value!.findIndex((v) => v.name === name)
          desserts.value!.splice(index, 1)
          Notify.success('Deleted')
        } catch (e) {
          Notify.error(e)
        }
      }
    })
}

const headers = ref([])
const desserts = ref([])

$fetch('/api/table', {
  method: 'GET',
}).then((response) => {
  headers.value = response.data.headers
  desserts.value = response.data.data
}).catch((error) => {
  console.log(error)
  Notify.error(error)
})
</script>

<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <v-card>
          <client-only>
            <teleport to="#app-bar">
              <v-text-field
                v-model="search"
                prepend-inner-icon="mdi-magnify"
                label="Search"
                single-line
                hide-details
                density="compact"
                class="mr-2"
                rounded="xl"
                flat
                variant="solo"
                style="width: 250px"
              />
            </teleport>
          </client-only>
          <v-data-table
            :headers="headers"
            :items="desserts"
            item-value="name"
            :search="search"
          >
            <template #item.actions="{ item }">
              <v-defaults-provider
                :defaults="{
                  VBtn: {
                    size: 20,
                    rounded: 'sm',
                    variant: 'text',
                    class: 'ml-1',
                    color: '',
                  },
                  VIcon: {
                    size: 20,
                  },
                }"
              >
                <v-btn
                  v-tooltip="{ text: 'Delete', location: 'top' }"
                  icon="mdi-delete-outline"
                  @click.stop="showDialogDelete(item.name)"
                />
              </v-defaults-provider>
            </template>
          </v-data-table>
          <DialogConfirm ref="dialogDelete" />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
