<template>
  <div class="questions">

    <div v-if="answering">
      <div id="intro">
        Välkommen till målgruppsarenans formulär
      </div>

      <div id="subintro">
        Fyll i formuläret nedan för att få reda på vilket av mågruppsarenans segment du tillhör! 
      </div>

      <div id="explain">
        1 = Instämmer inte alls, 2 = Instämmer knappast, 3 = Varken eller, 4 = Instämmer något, 5 = Instämmer helt och hållet
      </div>
    </div>

    <div id="statements" v-if="answering">
      <div class="choice" v-for="(statement, index) in statements" :key="index">
        <p>{{ statement }}</p>
          <b-radio v-for="item in options" :key="item"
          v-model="input[index]" :native-value="item" v-on:click="update(value, item)">
            {{ item }}
          </b-radio>
      </div>
    </div>

    <div id="result" v-if="!answering">
      <p>Ditt segment är <span id="type">{{ labels[0] }}</span> </p>
      <my-chart :labels="labels" :data="formData"/>
    </div>

    <div class="foot">
      <button class="button is-success" v-if="answering" v-on:click="answer()"> Beräkna segment</button>
      <button class="button is-success" v-if="!answering" v-on:click="answering = true"> Gör om testet </button>
    </div>

  </div>

</template>

<script>

import calculate from '../calculation'
import MyChart from './MyChart.vue'

export default {
  name: 'Questions',
  props: {
    msg: String,
    statements: Array
  },
  data () {
    return {
      input: [],
      radio: true,
      options: [1, 2, 3, 4, 5],
      answering: true,
      type: '',
      labels: [],
      formData: []
    }
  },
  methods: {
    update (value, number) {
      console.log(value, number)
      this.input.splice(number, 1, value)
    },
    answer () {
      let calculations = calculate(this.input)
      this.formData = calculations[1]
      this.labels = calculations[0]
      this.answering = false;
    }

  },
  created () {
    this.statements.forEach(() => {
      this.input.push(0)
    });
  },
  components: {
    MyChart
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.choice {
  margin-bottom: 2em;
}
p {
  font-weight: 500
}

#intro {
  margin-bottom: 1em;
  font-size: 2em;
  color: #2D882D;
}

#subintro {
  font-weight: 600;
}

#explain {
  margin-bottom: 2em;
  color: #116611;
}

.foot {
  margin-bottom: 2em;
}

#result {
  font-size: 1.5em;
  margin-top: 10em;
  margin-bottom: 2em;
}

#type {
  font-weight: bold;
}

</style>
