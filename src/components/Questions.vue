<template>
  <div class="questions">

    <div id="intro">
      Välkommen till målgruppsarenans formulär
    </div>

    <div id="statements" v-if="answering">
      <div class="choice" v-for="(statement, index) in statements" :key="index">
        <p>{{ statement }}</p>
          <b-radio v-for="item in options" :key="item"
          v-model="input[index]" :native-value="item" v-on:click="update(value, item)">
            {{item}}
          </b-radio>
      </div>
    </div>

    <div id="result" v-if="!answering">
      <p>Din konsumenttyp är {{type}}</p>
    </div>

    <div class="foot">
      <button class="button is-success" v-if="answering" v-on:click="answer()"> Beräkna min konsumenttyp </button>
      <button class="button is-success" v-if="!answering" v-on:click="answering = true"> Gör om testet </button>
    </div>

  </div>

</template>

<script>

import calculate from '../calculation'


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
      type: "BRA"
    }
  },
  methods: {
    printer (message) {
      console.log(message)
    },
    update (value, number) {
      console.log(value, number)
      this.input.splice(number, 1, value)
    },
    answer () {
      if(this.input[3] === 5) {
        this.type = "DÅLIG"
      }

      console.log(calculate(this.input))
      this.answering = false;
    }

  },
  created () {
    this.statements.forEach(() => {
      this.input.push(0)
    });
  }

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.choice {
  margin-bottom: 2em;
}

#intro {
  margin-bottom: 2em;
  font-size: 2em
}

.foot {
  margin-bottom: 2em;
}

</style>
