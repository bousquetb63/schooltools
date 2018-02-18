<template>
  <v-container>
    <p class="textStyle display-2">Updates</p>
    <v-jumbotron color="grey lighten-2">
      <v-container fill-height>
        <v-layout align-center>
          <v-flex xs6 offset-xs1>
            <p class="display-1">2.17.18<v-icon large>keyboard_arrow_down</v-icon></p><p>Added Chemistry Molar Mass calculator and made minor improvements to the site!</p>
          </v-flex>
          <v-flex xs6>
            <v-btn outline color="indigo">Show more</v-btn>
          </v-flex>
        </v-layout>
      </v-container>
    </v-jumbotron>
    <p class="textStyle display-2">Getting Started</p>
    <p class="grey--text">An integrated platform that makes homework a breeze all in one simple to use website application: school tools!</p>
    <v-layout row wrap>
      <v-flex text-xs-center class="box" 
      xs3 v-for="item in items" 
      :key="item.title" 
      >
        <v-card class="cardStyle">
          <h2>{{item.name}}</h2>
          <v-btn 
          outline 
          color="indigo"
          :to="{
          name: item.link
          }">
              <v-icon>
                forward
              </v-icon>
              Start
          </v-btn>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      show: false,
      items:
      [
        {name: 'Calculus', link: 'Calculus'},
        {name: 'Chemistry', link: 'Chemistry'},
        {name: 'Physics 1', link: 'Home'},
        {name: 'Statistics', link: 'Home'},
        {name: 'Linear Algebra', link: 'Home'},
        {name: 'Category Theory', link: 'Home'},
        {name: 'Computer Science', link: 'Home'},
        {name: 'Multivariable Calculus', link: 'Home'},
        {name: 'Physics C', link: 'Home'},
        {name: 'Geometry', link: 'Home'},
        {name: 'Trigonometry', link: 'Home'},
        {name: 'Algeba', link: 'Home'},
        {name: 'Precalculus', link: 'Home'},
        {name: 'Complex Analysis', link: 'Home'},
        {name: 'Vector Calculus', link: 'Home'},
      ],
      updates:
      [
        {title: '2/16/18', body: 'TEST123'},
        {title: '2/17/18', body: 'TEST123'},
        {title: '2/18/18', body: 'TEST123'},
      ]
    }
  }

}
</script>

<style scoped>
.textStyle {
  padding-top: 45px;
}
.box {
  padding-top: 20px;
  padding-left: 20px;
  padding-bottom: 20px;
}
.cardStyle {
  padding-top: 15px;
  padding-bottom: 15px;
}
</style>
