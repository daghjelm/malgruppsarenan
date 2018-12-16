<template>
  <div class="questions">
      {{msg}}
    <div>
      <select v-model="input[0]">
        <option v-for="value in values" :key="value">
          {{ value }}
        </option>
      </select>


      <p>Jag ger gärna pengar till välgörande ändamål eller fredsarbete</p> 
      <Radio :func="update" :number="1"/>

      <p>Jag är oroad för utsläpp och andra miljöeffekter orsakade av bilar.</p>
      <Radio :func="update" :number="1"/>

      <p> </p>
      <Radio :func="update" :number="1"/>
      
      <p> </p>
      <Radio :func="update" :number="1"/>

      <p> </p>
      <Radio :func="update" :number="1"/>

      <p> </p>
      <Radio :func="update" :number="1"/>

      <input type="text">

    </div>

    <md-button class="md-raised md-primary" v-on:click="printer('hello')">Visa Resultat</md-button>

  </div>

</template>

<script>

import Radio from './Radio.vue'

export default {
  name: 'Questions',
  data: function () {
    return {
      input: []
    }
  },
  props: {
    msg: String,
  },
  methods: {
    printer: function (message) {
      console.log(message)
    },
    update: function (value, number) {
      input[number] = value;
    }
  },
  components: {
    Radio
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
