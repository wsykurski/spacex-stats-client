<script setup>
// import useRockets from '../composables/useRockets';

import { useQuery } from '@vue/apollo-composable';
import {getRockets} from '../graphQL/queries';

const { result, loading } = useQuery(getRockets)
</script>


<template>
  <h2>Rockets List</h2>
  <h3 v-if="loading">Loading...</h3>
  <ul v-else>
    <li v-for="rocket in result.rockets"
        :key="rocket.name"
    >
      <router-link :to="{ name: 'rocket-details', params: {id: rocket.id}}"
      >
        <p> {{ rocket.name }} <small>Stages: {{ rocket.stages }}</small> </p>
      </router-link>
      <p> {{ rocket.description }} </p>
    </li>
  </ul>
</template>

<style scoped>
ul {
  list-style: none;
}
</style>