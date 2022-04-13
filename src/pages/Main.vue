<template>
    <div class="main-site">
        <div class="chart">
            <canvas id="myChart" width="700" height="200"></canvas>
            <v-calendar is-expanded title-position="right" />

            <v-date-picker v-model="date" :rows="2" :step="1" />
        </div>
    </div>
</template>

<script>
import Chart from 'chart.js/auto';
// import VCalendar from 'v-calendar'

    export default {
        mounted() {
            const ctx = document.getElementById('myChart');
            const labels = ['Yanvar','Fevral','Mart','Aprel','May','Iyun','Iyul','Avgust','Sentyabr','Oktyabr','Noyabr','Dekabr'];
            const data = {
                labels: labels,
                datasets: [{
                    // label: 'My first dataset',
                    data: [210,310,310,200,200,120,120,220,220,390,390,390],
                    fill: true,
                    borderColor: '#696CFF',
                    tension: 0,
                    backgroundColor: 'rgba(200,150,100,0.4)'
                }]
            };
            const myChart = new Chart(ctx, {
                type: 'line',
                data: data,
            })
myChart;
        },
    }
</script>

<style lang="scss" scoped>

</style>