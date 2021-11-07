<script setup>
import { useQuery } from '@vue/apollo-composable';
import {getRockets} from '../graphQL/queries';

const { result, loading } = useQuery(getRockets)
</script>


<template>
  <h2>Rockets List</h2>
  <h3 v-if="loading">Loading...</h3>
  <div v-else>
    <el-row v-for="rocket in result.rockets"
            :key="rocket.name"
            :gutter="20"
    >
      <el-col :span="4">
        <router-link :to="{ name: 'rocket-details', params: {id: rocket.id}}">
          <p> {{ rocket.name }} <small>Stages: {{ rocket.stages }}</small> </p>
        </router-link>
      </el-col>
      <el-col :span="16">
        <p> {{ rocket.description }} </p>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped>
ul {
  list-style: none;
}
</style>