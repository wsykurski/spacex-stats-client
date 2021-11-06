<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { provide } from "vue";
import { DefaultApolloClient } from '@vue/apollo-composable'
import { spacexClient } from "./graphql/client";
import RocketsList from "./components/RocketsList.vue"

provide(DefaultApolloClient, spacexClient)

</script>

<template>
  <RocketsList/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
