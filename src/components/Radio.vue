<template>
  <div class="radio">
  </div>
</template>

<script>
export default {
  name: 'Radio',
  data: function () {
    return {
      value: 0
    }
  },
  props: {
    update: Function,
    number: Number
  }
}
</script>