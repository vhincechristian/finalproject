<template>
  <v-card
          class="ma-5 mx-auto mx-auto text-black" max-width="600">
          <v-card color="#7CB342">
      <v-card-title> Calculator</v-card-title>

          <v-text-field label="First Input" v-model.number="nu1"></v-text-field>
          <v-text-field label="Second Input" v-model.number="nu2"></v-text-field>

              <div class="ma-5 text-black">
              <v-btn class="ma-1" color="#FFFF8F" @click="addi">Addition</v-btn>
              <v-btn class="ma-1" color="#FFFF8F" @click="diff">Subtraction</v-btn>
              <v-btn class="ma-1" color="#FFFF8F" @click="quoti">Division</v-btn>
              <v-btn class="ma-1" color="#FFFF8F" @click="multi">Multiplication</v-btn>
              <v-btn class="ma-1" color="#FFFF8F" @click="aver">Average</v-btn><br>
              </div>
                  <h3 class="ma-5">Total: {{result}}</h3> 
  </v-card>
</v-card>
</template>

<script>

export default {
  el: '#app',
      methods: {
          addi() {
              this.result= parseInt(this.nu1) + parseInt(this.nu2);
              
          },
          diff() {
              this.result= parseInt(this.nu1) - parseInt(this.nu2);
          },
          quoti() {
              this.result= parseInt(this.nu1) / parseInt(this.nu2);
          },
          multi() {
              this.result= parseInt(this.nu1) * parseInt(this.nu2);
          },
          aver() {
              this.result= (parseInt(this.nu1) + parseInt(this.nu2)) / 2;
          }
},
  data() {
      return {
          nu1: 0,
          nu2: 0,
          result:0
      }
  }
}
</script>