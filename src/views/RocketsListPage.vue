<script setup>
import { useQuery } from '@vue/apollo-composable';
import {getRockets} from '../graphQL/queries';

const { result, loading } = useQuery(getRockets)
</script>


<template>
  <h2>Rockets List</h2>
  <div v-if="loading"
       class="loader"
  >
    <el-progress type="line"
                 :indeterminate="true"
                 :percentage="100"
                 status="success"
                 :duration="5"
    >
      <h1> 🚀 </h1>
    </el-progress>
  </div>
  <div v-else
       class="content"
  >
    <el-row v-for="rocket in result.rockets"
            :key="rocket.name"
            :gutter="24"
    >
      <el-col :span="4">
        <router-link :to="{ name: 'rocket-details', params: {id: rocket.id}}">
          <p> {{ rocket.name }} </p>
        </router-link>
      </el-col>
      <el-col :span="4">
        <p> Stages: {{ rocket.stages }} </p>
      </el-col>
      <el-col :span="16">
        <p> {{ rocket.description }} </p>
      </el-col>
    </el-row>
  </div>
</template>

<style lang="scss" scoped>
.loader {
  max-width: 60%;
  min-width: 50%;
  margin: auto;
}
.content {
  max-width: 90%;
  margin: auto;
}
</style>
