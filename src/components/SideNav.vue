<template>
  <v-navigation-drawer color="grey-darken-3"
    v-model="drawer"
    :rail="rail"
    permanent
    @click="rail = false"
  >
    <v-list-item
      prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg"
      title="Phonepaserd Dev"
      nav
    >
      <template v-slot:append>
        <v-btn
          variant="text"
          icon="mdi-chevron-left"
          @click.stop="rail = !rail"
        ></v-btn>
      </template>
    </v-list-item>

    <v-divider></v-divider>

    <v-list density="compact" nav>
      <v-list-item
        prepend-icon="mdi-home-city"
        title="Home"
        value="home"
        @click="$router.push('/')"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-account"
        title="Member"
        value="account"
        @click="$router.push('/list')"
      ></v-list-item>
   
     
      <v-list-item
        prepend-icon="mdi-account-group-outline"
        title="Users"
        value="users"
        @click="$router.push('/')"
      >
    </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
import {RouterLink}from "vue-router"
  export default {
    data () {
      return {
        drawer: true,
        rail: false,
      }
    },
  }
</script>
