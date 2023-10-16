<script setup lang="ts">
</script>

<template>
  <Navbar />
  <div class="flex overflow-hidden bg-gray-50 pt-16 dark:bg-gray-900">
    <Sidebar />

    <div id="main-content" class="relative h-full w-full overflow-y-auto bg-gray-50 lg:ml-64 dark:bg-gray-900">
      <main>
        <div class="px-4 pt-6">
          <div class="rounded-lg bg-white p-4 shadow dark:bg-gray-800 sm:p-6 xl:p-8">
            <!-- Card Title -->
            <div class="mb-4 flex items-center justify-between">
              <div>
                <h3 class="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                  Transactions
                </h3>
                <span class="text-base font-normal text-gray-500 dark:text-gray-400">This is a list of
                  latest transactions</span>
              </div>
              <div class="flex-shrink-0">
                <a href="#" class="text-primary-700 dark:text-primary-500 rounded-lg p-2 text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-700">View
                  all</a>
              </div>
            </div>
            <!-- Table -->
            <div class="mt-8 flex flex-col">
              <div class="overflow-x-auto rounded-lg">
                <div class="inline-block min-w-full align-middle">
                  <div class="overflow-hidden shadow sm:rounded-lg">
                    <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-600">
                      <thead class="bg-gray-50 dark:bg-gray-700">
                        <tr>
                          <th scope="col" class="p-4 text-left text-xs font-medium tracking-wider uppercase text-gray-500 dark:text-white">
                            Transaction
                          </th>
                          <th scope="col" class="p-4 text-left text-xs font-medium tracking-wider uppercase text-gray-500 dark:text-white">
                            Date &amp; Time
                          </th>
                          <th scope="col" class="p-4 text-left text-xs font-medium tracking-wider uppercase text-gray-500 dark:text-white">
                            Amount
                          </th>
                          <th scope="col" class="p-4 text-left text-xs font-medium tracking-wider uppercase text-gray-500 dark:text-white">
                            Status
                          </th>
                        </tr>
                      </thead>
                      <tbody class="bg-white dark:bg-gray-800">
                        <tr>
                          <td class="whitespace-nowrap p-4 text-sm font-normal text-gray-900 dark:text-white">
                            Payment from <span class="font-semibold">Bonnie Green</span>
                          </td>
                          <td class="whitespace-nowrap p-4 text-sm font-normal text-gray-500 dark:text-gray-400">
                            Apr 23 ,2021
                          </td>
                          <td class="whitespace-nowrap p-4 text-sm font-semibold text-gray-900 dark:text-white">
                            $2300
                          </td>
                          <td class="whitespace-nowrap p-4">
                            <span class="mr-2 rounded-md bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-200">Completed</span>
                          </td>
                        </tr>
                        <tr class="bg-gray-50 dark:bg-gray-700">
                          <td class="whitespace-nowrap p-4 text-sm font-normal text-gray-900 dark:text-white">
                            Payment refund to <span class="font-semibold">#00910</span>
                          </td>
                          <td class="whitespace-nowrap p-4 text-sm font-normal text-gray-500 dark:text-gray-400">
                            Apr 23 ,2021
                          </td>
                          <td class="whitespace-nowrap p-4 text-sm font-semibold text-gray-900 dark:text-white">
                            -$670
                          </td>
                          <td class="whitespace-nowrap p-4">
                            <span class="mr-2 rounded-md bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-200">Completed</span>
                          </td>
                        </tr>
                        <tr>
                          <td class="whitespace-nowrap p-4 text-sm font-normal text-gray-900 dark:text-white">
                            Payment failed from <span class="font-semibold">#087651</span>
                          </td>
                          <td class="whitespace-nowrap p-4 text-sm font-normal text-gray-500 dark:text-gray-400">
                            Apr 18 ,2021
                          </td>
                          <td class="whitespace-nowrap p-4 text-sm font-semibold text-gray-900 dark:text-white">
                            $234
                          </td>
                          <td class="whitespace-nowrap p-4">
                            <span class="mr-2 rounded-md bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800 dark:bg-red-200">Cancelled</span>
                          </td>
                        </tr>
                        <tr class="bg-gray-50 dark:bg-gray-700">
                          <td class="whitespace-nowrap p-4 text-sm font-normal text-gray-900 dark:text-white">
                            Payment from <span class="font-semibold">Lana Byrd</span>
                          </td>
                          <td class="whitespace-nowrap p-4 text-sm font-normal text-gray-500 dark:text-gray-400">
                            Apr 15 ,2021
                          </td>
                          <td class="whitespace-nowrap p-4 text-sm font-semibold text-gray-900 dark:text-white">
                            $5000
                          </td>
                          <td class="whitespace-nowrap p-4">
                            <span class="mr-2 rounded-md bg-purple-100 px-2.5 py-0.5 text-xs font-medium text-purple-800 dark:bg-purple-200">In
                              progress</span>
                          </td>
                        </tr>
                        <tr>
                          <td class="whitespace-nowrap p-4 text-sm font-normal text-gray-900 dark:text-white">
                            Payment from <span class="font-semibold">Jese Leos</span>
                          </td>
                          <td class="whitespace-nowrap p-4 text-sm font-normal text-gray-500 dark:text-gray-400">
                            Apr 15 ,2021
                          </td>
                          <td class="whitespace-nowrap p-4 text-sm font-semibold text-gray-900 dark:text-white">
                            $2300
                          </td>
                          <td class="whitespace-nowrap p-4">
                            <span class="mr-2 rounded-md bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-200">Completed</span>
                          </td>
                        </tr>
                        <tr class="bg-gray-50 dark:bg-gray-700">
                          <td class="whitespace-nowrap p-4 text-sm font-normal text-gray-900 dark:text-white">
                            Payment from <span class="font-semibold">THEMESBERG LLC</span>
                          </td>
                          <td class="whitespace-nowrap p-4 text-sm font-normal text-gray-500 dark:text-gray-400">
                            Apr 11 ,2021
                          </td>
                          <td class="whitespace-nowrap p-4 text-sm font-semibold text-gray-900 dark:text-white">
                            $560
                          </td>
                          <td class="whitespace-nowrap p-4">
                            <span class="mr-2 rounded-md bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-200">Completed</span>
                          </td>
                        </tr>

                        <tr>
                          <td class="whitespace-nowrap p-4 text-sm font-normal text-gray-900 dark:text-white">
                            Payment from <span class="font-semibold">Lana Lysle</span>
                          </td>
                          <td class="whitespace-nowrap p-4 text-sm font-normal text-gray-500 dark:text-gray-400">
                            Apr 6 ,2021
                          </td>
                          <td class="whitespace-nowrap p-4 text-sm font-semibold text-gray-900 dark:text-white">
                            $1437
                          </td>
                          <td class="whitespace-nowrap p-4">
                            <span class="mr-2 rounded-md bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-200">Completed</span>
                          </td>
                        </tr>
                        <tr class="bg-gray-50 dark:bg-gray-700">
                          <td class="whitespace-nowrap p-4 text-sm font-normal text-gray-900 dark:text-white">
                            Payment to <span class="font-semibold">Joseph Mcfall</span>
                          </td>
                          <td class="whitespace-nowrap p-4 text-sm font-normal text-gray-500 dark:text-gray-400">
                            Apr 1 ,2021
                          </td>
                          <td class="whitespace-nowrap p-4 text-sm font-semibold text-gray-900 dark:text-white">
                            $980
                          </td>
                          <td class="whitespace-nowrap p-4">
                            <span class="mr-2 rounded-md bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-200">Completed</span>
                          </td>
                        </tr>
                        <tr>
                          <td class="whitespace-nowrap p-4 text-sm font-normal text-gray-900 dark:text-white">
                            Payment from <span class="font-semibold">Alphabet LLC</span>
                          </td>
                          <td class="whitespace-nowrap p-4 text-sm font-normal text-gray-500 dark:text-gray-400">
                            Mar 23 ,2021
                          </td>
                          <td class="whitespace-nowrap p-4 text-sm font-semibold text-gray-900 dark:text-white">
                            $11,436
                          </td>
                          <td class="whitespace-nowrap p-4">
                            <span class="mr-2 rounded-md bg-purple-100 px-2.5 py-0.5 text-xs font-medium text-purple-800 dark:bg-purple-200">In
                              progress</span>
                          </td>
                        </tr>
                        <tr class="bg-gray-50 dark:bg-gray-700">
                          <td class="whitespace-nowrap p-4 text-sm font-normal text-gray-900 dark:text-white">
                            Payment from <span class="font-semibold">Bonnie Green</span>
                          </td>
                          <td class="whitespace-nowrap p-4 text-sm font-normal text-gray-500 dark:text-gray-400">
                            Mar 23 ,2021
                          </td>
                          <td class="whitespace-nowrap p-4 text-sm font-semibold text-gray-900 dark:text-white">
                            $560
                          </td>
                          <td class="whitespace-nowrap p-4">
                            <span class="mr-2 rounded-md bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-200">Completed</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
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
      </main>
      <Footer />
    </div>
  </div>
</template>
