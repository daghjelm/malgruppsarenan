<script>
  import { Pie } from 'vue-chartjs'

  export default {
    extends: Pie,
    props: {
      labels: Array,
      data: Array
    },
    mounted () {
      let vm = this
      this.renderChart({
        labels: vm.labels.map(x => x + ' %'),
        datasets: [
          {
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)'
            ],
            data: vm.data
          }
        ]
      },
      {responsive: true, maintainAspectRatio: false})
    }
  }
</script>