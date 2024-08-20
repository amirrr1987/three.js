<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>
<style>
nav {
  position: sticky;
  left: 0;
  right: 0;
  top: 0;
  display: flex;
  gap:1rem;
  padding-inline: 3rem;
  padding-block: 1rem;
}
</style>
<template>
  <nav>
    <RouterLink to="/">App1</RouterLink>
    <RouterLink to="/app2">App2</RouterLink>
    <RouterLink to="/app3">App3</RouterLink>
  </nav>
  <RouterView />
</template>
