<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { provide } from 'vue';
import { DefaultApolloClient } from '@vue/apollo-composable'
import { spacexClient } from './graphQL/client'
import TopMenu from '@/components/TopMenu.vue'

provide(DefaultApolloClient, spacexClient)

</script>

<template>
  <el-container>
    <el-header>
      <TopMenu/>
    </el-header>
    <el-main>
      <router-view/>
    </el-main>
  </el-container>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
