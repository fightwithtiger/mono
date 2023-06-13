<script setup lang="ts">
import { ref } from 'vue';
import { r } from '../../../packages/core/index'

const result = ref(r + 4)

</script>

<template>
  <div>
    {{ result }}
  </div>
</template>

<style scoped>
</style>
