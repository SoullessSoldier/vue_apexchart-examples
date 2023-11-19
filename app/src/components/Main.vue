<script setup lang="ts"></script>

<template>
  <header class="header">
    <router-link to="/">Home</router-link>
    <router-link to="/bar">Bar chart</router-link>
  </header>
  <main class="main">
    <router-view></router-view>
  </main>
</template>

<style>
@import "@/assets/styles/main/main.css";
</style>
