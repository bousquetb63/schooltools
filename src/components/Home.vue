<template>
  <v-container>
    <v-layout row wrap>
      <v-flex class="box" xs5 v-for="item in items" :key="item.title" @click="">
        <v-card class="cardStyle">
          <v-card-title>{{item.name}}</v-card-title>
          <v-card-text>{{item.description}}</v-card-text>
          <v-btn outline color="indigo">Visit</v-btn>
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
      items:
      [
        {name: 'Calculus', description: 'Find derivatives or integrals'},
        {name: 'Chemistry', description: 'Calculate the pH, molarmass or balance equations'},
        {name: 'Physics', description: 'idek'}
      ]
    }
  }
}
</script>

<style scoped>
.box {
  padding-top: 20px;
  padding-left: 20px;
  padding-bottom: 20px;
}
.cardStyle {
  padding-bottom: 15px;
}
</style>
