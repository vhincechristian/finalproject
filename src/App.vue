<template>
   <v-app>
    <v-main>
       <Navbar/>
       <router-view></router-view>
    </v-main>
   </v-app>
</template>

<script setup>
  import Navbar from '@/components/NavBar.vue';
</script>

<style lang="css">
   main {
      background-image: url('./assets/bgg.png');
      background-size: cover;
   }
   </style>
