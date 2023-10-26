<script setup lang="ts">
import { InfoCircleOutlined, KeyOutlined, MailOutlined, UserOutlined } from '@ant-design/icons-vue'
</script>

<template>
  <div class="flex flex-col items-center justify-center p-10">
    <form class="w-100 flex flex-col gap-4 bg-gray-50 p-10">
      <h1 class="text-center text-xl text-black">
        Sign up
      </h1>
      <label class="text-black" for="username">Username</label>
      <a-input placeholder="Enter a username">
        <template #prefix>
          <UserOutlined />
        </template>
        <template #suffix>
          <a-tooltip title="Este nombre va a ser visto por los demas usuarios">
            <InfoCircleOutlined style="color: rgba(0, 0, 0, 0.45)" />
          </a-tooltip>
        </template>
      </a-input>
      <label class="text-black" for="username">Email</label>
      <a-input placeholder="Enter a email">
        <template #prefix>
          <MailOutlined />
        </template>
      </a-input>
      <label class="text-black" for="username">Password</label>
      <a-input-password placeholder="Enter a password">
        <template #prefix>
          <KeyOutlined />
        </template>
      </a-input-password>
      <a-button type="primary" class="mt-2 bg-blue-9">
        Submit
      </a-button>
      <router-link class="color-blue" to="/auth/login">
        Already have an account? Sing in
      </router-link>
    </form>
  </div>
</template>
