<template>
  <v-app>
    <v-toolbar height="80px">
      <v-toolbar-side-icon v-on:click="sidebarActive = !sidebarActive"></v-toolbar-side-icon>
      <v-toolbar-title class="navTitle">School Tool</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn 
        flat
        :to="{
          name: 'Home'
        }">Home</v-btn>
        <v-btn flat>About Us</v-btn>
        <v-btn flat>Contact Us</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-navigation-drawer
      temporary
      v-model="sidebarActive"
      absolute>
      <v-toolbar flat>
        <v-list>
          <v-list-tile>
            <v-list-tile-title class="title">
              Subjects
            </v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-toolbar>
      <v-list class="pt-0" dense>
        <!-- add router links -->
        <v-list-tile 
        v-for="item in items" 
        :key="item.title"
        :to="{
          name: item.link
        }"> 
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

<style scoped>
</style>

<script>
export default {
  name: 'App',
  data () {
    return {
      sidebarActive: false,
      items: [
        {title: 'Calculus', icon: 'timeline', link: 'Calculus'},
        {title: 'Chemistry', icon: 'bubble_chart', link: 'Chemistry'},
        {title: 'Physics', icon: 'change_history', link: 'Physics'},
        {title: 'Algebra', icon: 'blur_on', link: 'Soon'},
        {title: 'Statistics', icon: 'monetization_on', link: 'Soon'},
      ]
    }
  }
}
</script>
