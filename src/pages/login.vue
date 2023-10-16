<template>
  <div class="flex flex-col items-center justify-center p-10">
    <form class="w-100 flex flex-col gap-4 bg-gray-50 p-10">
      <h1 class="text-center text-xl text-black">
        Login In
      </h1>
      <label class="text-black" for="username">Username</label>
      <input class="h-10 border-b p-2 text-black focus:border-0" type="text">
      <label class="text-black" for="username">Password</label>
      <input class="h-10 border-b p-2 text-black focus:border-0" type="password">
      <button class="h-10 bg-dark hover:bg-gray-800">
        Submit
      </button>
    </form>
  </div>
</template>
