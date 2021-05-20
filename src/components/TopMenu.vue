<template>
  <Menubar :model="items">
    <template #start>
      Dhruv Method
    </template>
    <template #end>
      Beer is good for you 🍻
    </template>
  </Menubar>
</template>

<script>
export default {
  name: 'TopMenu',
  data() {
    return {
      items: [
        {
          label: 'Hottest Coins',
          icon: 'pi pi-fw pi-sun',
          to: '/',
        },
        {
          label: 'Whale Stalker',
          icon: 'pi pi-fw pi-users',
          to: '/stalk',
        },
        { label: 'My Portfolio', icon: 'pi pi-chart-bar', to: '/portfolio' },
      ],
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
