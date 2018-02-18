<template>
  <v-container>
    <p class="display-2 titleText">Chemistry <v-icon large>bubble_chart</v-icon></p>
    <v-divider></v-divider>
    <v-layout row class="formContainer">
      <v-flex xs4>
        <v-subheader class="subText">Molar Mass for molecules</v-subheader>
      </v-flex>
      <v-flex xs7>
        <v-text-field
          name="molecule"
          label="type in molecule"
          v-model="molecule1"
          single-line
        ></v-text-field>
      </v-flex>
      <v-flex xs1>
        <v-btn @click="molarmass()" color="success">Submit</v-btn>
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
        <v-subheader class="subText">Molarity</v-subheader>
      </v-flex>
      <v-flex xs3>
        <v-text-field
          name="molecule"
          label="moles of solution"
          v-model="moles1"
          single-line
        ></v-text-field>
      </v-flex>
      <v-flex xs3 offset-xs1>
        <v-text-field
          name="molecule"
          label="liters"
          v-model="liters1"
          single-line
        ></v-text-field>
      </v-flex>
      <v-flex xs1>
        <v-btn @click="molarity()" color="success">Submit</v-btn>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex xs2 offset-xs4>
        <p class="display-1"><v-icon large>keyboard_arrow_right</v-icon> {{answer2}}</p>
      </v-flex>
    </v-layout>
    <v-divider></v-divider>
    <v-layout row class="formContainer">
      <v-flex xs4>
        <v-subheader class="subText">Molality</v-subheader>
      </v-flex>
      <v-flex xs3>
        <v-text-field
          name="molecule"
          label="moles of solution"
          v-model="moles2"
          single-line
        ></v-text-field>
      </v-flex>
      <v-flex xs3 offset-xs1>
        <v-text-field
          name="molecule"
          label="kg"
          v-model="kg1"
          single-line
        ></v-text-field>
      </v-flex>
      <v-flex xs1>
        <v-btn @click="molality()" color="success">Submit</v-btn>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex xs2 offset-xs4>
        <p class="display-1"><v-icon large>keyboard_arrow_right</v-icon> {{answer3}}</p>
      </v-flex>
    </v-layout>
    <v-divider></v-divider>
  </v-container>
</template>
 
<script>
import MolarMass from 'molarmass.js';
export default {
  name: 'Chemistry',
  data () {
    return {
      molecule1: "",
      answer1: "",
      moles1: "",
      liters1: "",
      answer2: "",
      moles2: "",
      kg1: "",
      answer3: ""
    }
  },
  methods: {
      molarmass() {
        var mm = new MolarMass();
        try{
          let molar = mm.getMolarMass(this.molecule1);
          this.answer1 = molar.toString() + " g/mol";
          if(this.answer1 == 0) this.answer1 = "This is not a valid equation, please try again.";
           console.log(this.answer1);
        } catch(err) {
          this.answer1 = "This is not a valid equation, please try again."
        }
      },
      molarity() {
        try {
          let molarity = parseInt(this.moles1)/parseInt(this.liters1);
          this.answer2 = molarity + " M";
        } catch(err) {
          this.answer2 = "Check that your moles and liters are inputed correctly!"
        }
      },
      molality() {
        try {
          let molality = parseInt(this.moles2)/parseInt(this.kg1);
          this.answer3 = molality + " m";
        } catch (err) {
          this.answer3 = "Check that your moles and kg are inputed correctly!"
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