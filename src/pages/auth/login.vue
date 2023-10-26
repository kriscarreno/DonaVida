<script setup lang="ts">
import { InfoCircleOutlined, KeyOutlined, UserOutlined } from '@ant-design/icons-vue'
</script>

<template>
  <div class="flex flex-col items-center justify-center p-10">
    <form class="w-100 flex flex-col gap-4 bg-gray-50 p-10">
      <h1 class="text-center text-xl text-black">
        Login In
      </h1>
      <label class="text-black" for="username">Username</label>
      <a-input placeholder="Basic usage">
        <template #prefix>
          <UserOutlined />
        </template>
        <template #suffix>
          <a-tooltip title="Extra information">
            <InfoCircleOutlined style="color: rgba(0, 0, 0, 0.45)" />
          </a-tooltip>
        </template>
      </a-input>
      <label class="text-black" for="username">Password</label>
      <a-input-password placeholder="input password">
        <template #prefix>
          <KeyOutlined />
        </template>
      </a-input-password>
      <a-button type="primary" class="mt-2 bg-blue-9">
        Submit
      </a-button>
      <router-link class="color-blue" to="/auth/register">
        You don`t have an account? Sing up
      </router-link>
    </form>
  </div>
</template>
