<script setup>
import { useRouter, useRoute } from 'vue-router'

import { useQuery } from '@vue/apollo-composable';
import { getRocket } from '../graphQL/queries';

const router = useRouter()
const route = useRoute()
const { id } = route.params

const { result, loading } = useQuery(getRocket, { id })
</script>

<template>
  <el-button type="primary" @click="router.go(-1)">GoBack</el-button>
  <h1>Rocket Details</h1>

  <h3 v-if="loading">Loading...</h3>
  <div v-else>
    <p> Rocket Name: {{ result.rocket.name }}</p>
    <p> Rocket Height: {{ result.rocket.height.meters }}</p>
    <p> Rocket Description {{ result.rocket.description }}</p>
  </div>

</template>