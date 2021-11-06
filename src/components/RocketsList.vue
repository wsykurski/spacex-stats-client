<script setup>
import useRockets from "../composables/useRockets";

const { rockets, loading } = useRockets()
</script>

<template>
  <h3 v-if="loading">Loading...</h3>
  <ul v-else>
    <li v-for="rocket in rockets"
        :key="rocket.name"
    >
      <p> {{ rocket.name }} <small>Stages: {{ rocket.stages }}</small> </p>
      <p> {{ rocket.description }} </p>
    </li>
  </ul>
</template>

<style scoped>
ul {
  list-style: none;
}
</style>