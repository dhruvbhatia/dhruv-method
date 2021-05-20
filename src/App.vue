<template>
  <TopMenu />
  <div class="p-m-2">
    <router-view />
  </div>
</template>

<script>
import TopMenu from './components/TopMenu.vue'

export default {
  name: 'App',
  components: {
    TopMenu,
  },
}
</script>

<style>
body {
  margin: 0;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  background-color: var(--surface-a);
  font-family: var(--font-family);
  font-weight: 400;
  color: var(--text-color);
}
</style>
