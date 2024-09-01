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
nav a{
  text-decoration: none;
  color: #212121;
}
nav a:hover{
  color: #db3998;
}
</style>
<template>
  <nav>
    <RouterLink to="/">App1</RouterLink>
    <RouterLink to="/app2">App2</RouterLink>
    <RouterLink to="/app3">App3</RouterLink>
    <RouterLink to="/app4">App4</RouterLink>
    <RouterLink to="/app5">App5</RouterLink>
    <RouterLink to="/app6">App6</RouterLink>
    <RouterLink to="/app7">App7</RouterLink>
    <RouterLink to="/app8">App8</RouterLink>
  </nav>
  <RouterView />
</template>
