<script setup>
  defineProps(['comments'])
</script>

<template>
  <div >
    <div v-for="comment in comments" :key="comment.id">
      <h3>{{ comment.name }}</h3>
      <p class="bg-gray-600">{{ comment.body }}</p>
    </div>
  </div>
</template>