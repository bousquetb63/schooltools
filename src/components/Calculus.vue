<template>
  <v-container>
    <p class="display-2 titleText">Calculus <v-icon large>timeline</v-icon></p>
    <v-divider></v-divider>
    <v-layout row class="formContainer">
      <v-flex xs4>
        <v-subheader class="subText">Derivative</v-subheader>
      </v-flex>
      <v-flex xs7>
        <v-text-field
          name="derivatives"
          label="type in equation"
          v-model="equation1"
          single-line
        ></v-text-field>
      </v-flex>
      <v-flex xs1>
        <v-btn @click="derivative" color="success">Submit</v-btn>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex xs2 offset-xs4>
        <p class="display-1"><v-icon large>keyboard_arrow_right</v-icon> {{answer1}}</p>
      </v-flex>
    </v-layout>
    <v-divider></v-divider>
    <v-layout row class="formContainer">
      <v-flex xs4>
        <v-subheader class="subText">Integral</v-subheader>
      </v-flex>
      <v-flex xs7>
        <v-text-field
          name="derivatives"
          label="type in equation"
          v-model="equation2"
          single-line
        ></v-text-field>
      </v-flex>
      <v-flex xs1>
        <v-btn @click="integral" color="success">Submit</v-btn>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex xs2 offset-xs4>
        <p class="display-1"><v-icon large>keyboard_arrow_right</v-icon> {{answer2}}</p>
      </v-flex>
    </v-layout>
    <v-divider></v-divider>
  </v-container>
</template>
 
<script>
import math from 'mathjs';
math.import(require('mathjs-simple-integral'));
export default {
  name: 'Calculus',
  data () {
    return {
      equation1: "",
      answer1: "",
      equation2: "",
      answer2: ""
    }
  },
  methods: {
    derivative() {
        try {
          let tempmath = math.derivative(this.equation1, 'x').toString();
          this.answer1 = tempmath;
        } catch (err) {
          console.log(err);
          this.answer1 = "This is not a valid equation, please try again.";
        }
    },
    integral() {
        try {
          let tempmath = math.integral(this.equation2, 'x').toString();
          this.answer2 = tempmath;
        } catch (err) {
          console.log(err);
          this.answer2 = "This is not a valid equation, please try again.";
        }
    }
  }
 
}
</script>
 
<style scoped>
.subText {
  padding-top: 10px;
}
.titleText {
  padding-top: 10px;
  padding-bottom: 10px;
}
.formContainer {
  padding-top: 20px;
  padding-bottom: 10px;
}
</style>