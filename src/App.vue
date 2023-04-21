<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div>

   <header class="navbar">
    <div>
      <nav>
        <RouterLink to="/">Posts</RouterLink> - 
        <RouterLink to="/authors">Authors</RouterLink>
      </nav>
    </div>

  </header> 
  <RouterView />
  </div>

</template>

<style>
  .navbar {
    background-color: lightgreen;
    padding: 1.2rem;
  }
</style>