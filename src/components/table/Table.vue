<script setup lang="ts">
import { ref } from 'vue'

const donaciones = ref([{ donante: 'Pedro', fecha: new Date(), tipoSangre: 'O', estado: 'Completado' }])
</script>

<template>
  <div class="mt-8 flex flex-col">
    <div class="overflow-x-auto rounded-lg">
      <div class="inline-block min-w-full align-middle">
        <div class="overflow-hidden shadow sm:rounded-lg">
          <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-600">
            <thead class="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th scope="col" class="p-4 text-left text-xs font-medium tracking-wider uppercase text-gray-500 dark:text-white">
                  Donación
                </th>
                <th scope="col" class="p-4 text-left text-xs font-medium tracking-wider uppercase text-gray-500 dark:text-white">
                  Fecha &amp; Hora
                </th>
                <th scope="col" class="p-4 text-left text-xs font-medium tracking-wider uppercase text-gray-500 dark:text-white">
                  Tipo de Sangre
                </th>
                <th scope="col" class="p-4 text-left text-xs font-medium tracking-wider uppercase text-gray-500 dark:text-white">
                  Estado
                </th>
              </tr>
            </thead>
            <tbody class="bg-white dark:bg-gray-800">
              <tr v-for="donacion in donaciones" :key="donacion.donante">
                <td class="whitespace-nowrap p-4 text-sm font-normal text-gray-900 dark:text-white">
                  Donation from <span class="font-semibold">{{ donacion.donante }}</span>
                </td>
                <td class="whitespace-nowrap p-4 text-sm font-normal text-gray-500 dark:text-gray-400">
                  {{ donacion.fecha }}
                </td>
                <td class="whitespace-nowrap p-4 text-sm font-semibold text-gray-900 dark:text-white">
                  {{ donacion.tipoSangre }}
                </td>
                <td class="whitespace-nowrap p-4">
                  <span class="mr-2 rounded-md bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-200">{{ donacion.estado }}</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
