<script setup>
import {ref, watch} from 'vue';
import { useRouter, useRoute } from 'vue-router';
const router = useRouter()
const route = useRoute()

const currentSelect = ref('')
const selectHandler = (key) => { router.push({name: key}) }

watch( route,
  () => {
    switch (route.name) {
    case 'rockets':
    case 'rocket-details':
      currentSelect.value = 'rockets'
      break;
    default:
      currentSelect.value = route.name
    }
  }
)
</script>

<template>
  <el-menu mode="horizontal"
           :default-active="currentSelect"
           @select="selectHandler"
           background-color="#545c64"
           text-color="#fff"
           active-text-color="#ffd04b"
  >
    <el-menu-item index="home">
      🌎 Home
    </el-menu-item>
    <el-menu-item index="rockets">
      🚀 Rockets
    </el-menu-item>
  </el-menu>
</template>