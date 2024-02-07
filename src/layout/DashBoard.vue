<template>
<div class="container">
    <div class="navbar">
        
        <SideNav/>
    </div>
    <div class="main">
        <Navbar/>
        <router-view/>
    </div>

</div>
 

</template>

<script setup>
import Navbar from '../components/Navbar.vue';
import SideNav from '../components/SideNav.vue';
</script>

<style>

</style>