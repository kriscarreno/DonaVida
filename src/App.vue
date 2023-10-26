<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
const currentRoute = computed(() => route.path)
</script>

<template>
  <div v-if="currentRoute !== '/auth/login' && currentRoute !== '/auth/register'">
    <Navbar />
    <div class="flex overflow-hidden bg-gray-50 pt-16 dark:bg-gray-900">
      <Sidebar class="sm:hidden" />
      <div id="main-content" class="relative h-full w-full overflow-y-auto bg-gray-50 lg:ml-64 dark:bg-gray-900">
        <main>
          <RouterView />
          <Footer />
        </main>
      </div>
    </div>
  </div>
  <div v-else class="flex items-center justify-center">
    <RouterView />
  </div>
</template>

<style>
</style>
