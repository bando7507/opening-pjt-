<template>
<div id="app">
  <router-view />
</div>
</template>

<script>
//import AnimeRow from './components/AnimeRow.vue'
export default {
  name: 'App',
  components: {
   // AnimeRow
  }
}
</script>

<style lang="scss" scoped>
@import url('./style/reset.css');
@import url(https://fonts.googleapis.com/css2?family=Roboto%3Awght%40300%3B400%3B700&display=swap);


#app{
  font-family: 'Roboto';
  padding: 40px;
}
</style>
