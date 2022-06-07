<template>
  <div id="app">    
    <my-header></my-header>
    <router-view></router-view>
    <my-footer v-show="$route.meta.show"></my-footer>
  </div>
</template>

<script>
import MyHeader from './components/MyHeader/MyHeader.vue'
import MyFooter from './components/MyFooter/MyFooter.vue'

export default {
  name: 'App',
  components: {
    MyHeader,
    MyFooter
  },
  mounted() {
    this.$store.dispatch("fetchCategoryListData");
    
  },
}
</script>

<style>

</style>
