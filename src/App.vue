<template>
  <v-app>
    <v-toolbar>
      <v-toolbar-side-icon v-on:click="sidebarActive = !sidebarActive"></v-toolbar-side-icon>
      <v-toolbar-title>School Tools</v-toolbar-title>
      <!-- <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat>Link One</v-btn>
        <v-btn flat>Link Two</v-btn>
        <v-btn flat>Link Three</v-btn>
      </v-toolbar-items> -->
    </v-toolbar>
    <v-navigation-drawer 
      temporary
      v-model="sidebarActive"
      absolute>
      <v-list class="pt-0" dense>
        <!-- add router links -->
        <v-list-tile v-for="item in items" :key="item.title" @click=""> 
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      sidebarActive: false,
      items: [
        {title: 'Home', icon: 'dashboard'},
        {title: 'Calculus', icon: 'timeline'},
        {title: 'Chemistry', icon: 'change_history'},
        {title: 'Physics', icon: 'flight_takeoff'},
      ]
    }
  }
}
</script>
