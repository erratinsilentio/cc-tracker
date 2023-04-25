<script setup lang="ts">
import Header from './components/common/header/Header.vue';
</script>

<template>
  <main class="main">
      <Header></Header>
      <router-view></router-view>
  </main>
</template>

<style scoped>
  .main {
    background-color: #1b1b1b;
    height: 100vh;
    width: 100vw;
  }
</style>
