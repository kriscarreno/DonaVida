<script setup lang="ts">
</script>

<template>
  <div class="px-4 pt-6">
    <div class="rounded-lg bg-white p-4 shadow dark:bg-gray-800 sm:p-6 xl:p-8">
      <!-- Card Title -->
      <div class="mb-4 flex items-center justify-between">
        <div>
          <h3 class="mb-2 text-xl font-bold text-gray-900 dark:text-white">
            Donaciones
          </h3>
          <span class="text-base font-normal text-gray-500 dark:text-gray-400">Esta es una lista de las donaciones más recientes</span>
        </div>
        <div class="flex-shrink-0">
          <a href="#" class="text-primary-700 dark:text-primary-500 rounded-lg p-2 text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-700">Ver Todas</a>
        </div>
      </div>
      <!-- Table -->
      <Table />
      <!-- Card Footer -->
      <div class="flex items-center justify-between pt-3 sm:pt-6">
        <div>
          <button class="inline-flex items-center rounded-lg p-2 text-center text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white" type="button" data-dropdown-toggle="transactions-dropdown">
            Last 7 days <svg class="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <!-- Dropdown menu -->
          <div id="transactions-dropdown" class="z-50 my-4 hidden list-none rounded bg-white text-base shadow divide-y divide-gray-100 dark:bg-gray-700 dark:divide-gray-600" data-popper-placement="bottom" style="position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate(362px, 3491px);">
            <div class="px-4 py-3" role="none">
              <p class="truncate text-sm font-medium text-gray-900 dark:text-white" role="none">
                Sep 16, 2021 - Sep 22, 2021
              </p>
            </div>
            <ul class="py-1" role="none">
              <li>
                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Yesterday</a>
              </li>
              <li>
                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Today</a>
              </li>
              <li>
                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Last 7 days</a>
              </li>
              <li>
                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Last 30 days</a>
              </li>
              <li>
                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Last 90 days</a>
              </li>
            </ul>
            <div class="py-1" role="none">
              <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Custom...</a>
            </div>
          </div>
        </div>
        <div class="flex-shrink-0">
          <a href="#" class="text-primary-700 dark:text-primary-500 inline-flex items-center rounded-lg p-2 text-xs font-medium uppercase hover:bg-gray-100 sm:text-sm dark:hover:bg-gray-700">
            Transactions Report
            <svg class="ml-1 h-4 w-4 sm:h-5 sm:w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
