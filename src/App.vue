<template>
  <div id="app">
    <Questions msg="Welcome to Your Vue.js App" v-bind:statements="strings"/>
  </div>
</template>

<script>
import Questions from './components/Questions.vue'

export default {
  name: 'app',
  data: function () {
    return {
      strings: [
        "Jag ger gärna pengar till välgörande ändamål eller fredsarbete.",
        "Jag är oroad för utsläpp och andra miljöeffekter orsakade av bilar.",
        "Jag föredrar att handla varumärken från företag som uppträder etiskt.",
        "Jag väljer ekologiska eller miljövänliga produkter när sådana alternativ finns.",
        "Jag väljer närproducerade produkter när sådana alternativ finns.",
        "Jag väljer rättvisemärkta produkter när sådana alternativ finns.",
        "Jag är beredd att sänka min levnadsstandard om det krävs för att värna om miljön.",
        "Jag tycker att jag är en människa med själsligt och andligt djup.",
        "Jag vill följa modet.",
        "Det är viktigt att kunna fortsätta se ung ut.",
        "Att fullgöra sina plikter mot omgivningen är mer värt än att leva för det egna nöjet.",
        "Jag vill försöka nå så långt det är möjligt i min karriär.",
        "Jag kan tänka mig att ställa upp för ett angeläget ändamål.",
        "Det är viktigt att hålla fast vid traditionella vanor och uppfattningar.", 
        "Barn bör ha rätt att fritt uttrycka sin personlighet och sina önskningar.", 
        "Vi bör sträva efter jämlikhet för alla i samhället.", 
        "Jag vill leva ett liv med utmaningar, nyheter och förändring.", 
        "Jag är en risktagare.", 
        "Jag vill hellre få instruktioner om vad jag ska göra, än att ta egna initiativ.", 
        "Jag tycker att jag är en kreativ människa.", 
        "Jag betalar gärna lite extra för en vara som är miljövänlig."
        ]
    }
  },
  components: {
    Questions
  },
}
</script>

<style>

html {
  /* background-color: #EBF8EB */
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
</style>
