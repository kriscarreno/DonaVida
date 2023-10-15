<script setup lang="ts">
const inputValue = ref()
</script>

<template>
  <div class="">
    Hola mundo

    <TheCounter :initial="1" />
    <TheInput v-model="inputValue" />
  </div>
  inputValue:{{ inputValue }}
</template>
