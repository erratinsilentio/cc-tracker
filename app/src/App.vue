<script setup lang="ts">
import Header from './components/common/header/Header.vue';
</script>

<template>
  <main class="main">
      <section class="page">
        <Header></Header>
        <router-view></router-view>
      </section>
      <img src="/blur.svg" alt="blur"/>
  </main>
</template>

<style scoped>
  .main {
    background-color: #1b1b1b;
  }

  .page{
    min-height: 100vh;
    width: 100vw;
    position: relative;
    z-index: 2;
  }

  img {
    position: absolute;
    top: -50%;
    left: 50%;
    z-index: 0;
  }

  @media (min-width: 390px) and (max-width: 767px) {
    img {
    top: 20%;
    left: 50%;
  }
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    img {
    top: 10%;
    left: 40%;
  }
    }
</style>
