<template>
    <div class="main-site">
        <div class="chart">
            <h6>Total number of <span>Students</span></h6>
            <canvas id="myChart" width="700"></canvas>
        </div>
        <div class="calendar">
            <v-date-picker class="cal" v-model="date" :rows="1" :step="1" />
        </div>
        <div class="rating">
            <div class="table1">
                <table>
                    <tr>
                        <th colspan="3">Top Ustozlar by <span>Numbers</span></th>
                        <th><i class="material-icons">more_vert</i></th>
                    </tr>
                    <tr 
                        v-for="data in datas"
                        :key="data.id"
                    >
                        <td><img :src="data.src" alt="rasm" class="image"></td>                        
                        <td>{{data.name}} <span>{{data.subject}}</span></td>                        
                        <td>{{data.rating}}</td>
                    </tr>
                </table>
            </div>

            <div class="table2">
                <table>
                    <tr>
                        <th colspan="3">Talab yuqori <span>Fanlar</span></th>
                        <th><i class="material-icons">more_vert</i></th>
                    </tr>
                    <tr 
                        v-for="data in datas"
                        :key="data.id"
                    >
                        <td><img :src="data.src" alt="rasm" class="image"></td>                        
                        <td>{{data.name}} <span>{{data.subject}}</span></td>                        
                        <td>{{data.rating}}</td>
                    </tr>
                </table>
            </div>
        </div>
        <div class="transaction">
            <h1>Assalom</h1>
        </div>
    </div>
</template>

<script>
import Chart from 'chart.js/auto';
// import VCalendar from 'v-calendar'

    export default {
        data() {
            return {
              datas:[
                    {id:1,src: require('../assets/images/t1.png'),name:'Dora Stevens',subject:'Matematika',rating:99},
                    {id:1,src: require('../assets/images/t2.png'),name:'Dora Stevens',subject:'Matematika',rating:99},
                    {id:1,src: require('../assets/images/t1.png'),name:'Dora Stevens',subject:'Matematika',rating:99},
                ],
            }
        },
        mounted() {
            const ctx = document.getElementById('myChart');
            const labels = ['Yanvar','Fevral','Mart','Aprel','May','Iyun','Iyul','Avgust','Sentyabr','Oktyabr','Noyabr','Dekabr'];
            const data = {
                labels: labels,
                datasets: [{
                    label: 'Talabalar soni',
                    data: [210,310,310,200,200,120,120,220,220,390,390,390],
                    fill: true,
                    borderColor: '#696CFF',
                    tension: 0,
                    backgroundColor: '#CECFFF90',
                }]
            };
            const myChart = new Chart(ctx, {
                type: 'line',
                data: data,
                options: {
        // maintainAspectRatio: false,
        plugins: {
            legend: false 
        },
        scales: {
            y: {
                // display: false 
            },
            x: {
                // display: false 
            }
        }   
    }
            })
myChart;
        },
        
    }
</script>

<style lang="scss" scoped>
@import 'v-calendar/dist/style.css';
@font-face {
  font-family: Neue;
  src: url(@/fonts/Neue-Haas-Unica-Pro/NeueHaasUnicaPro-Regular.ttf);
}
.main-site{
    display: flex;
    min-height: 100vh;
    flex-direction: row;
    justify-content: space-between;
    align-content: space-between;
    flex-wrap: wrap;
    .chart{
        width: 68%;
        height: 270px;
        padding: 10px 20px 5px 2px;
        background-color: #fff;
        border-radius: 5px;
        canvas{
            height: 85% !important;
        }
        h6{
            text-align: left;
            text-indent: 25px;
            color: #566A7F;
            span{
                color: blue;
            }
        }
    }
    .calendar{
        height: 270px;
        width: 31%;
        background-color: #fff;
        border-radius: 5px;
        // border: 1px solid red;
        display: flex;
        align-items: center;
        .cal{
            // border: 1px solid black;
            height: 100%;
            
            width: 100%;
        }
    }
    .rating{
        height: 300px;
        width: 68%;
        background-color: #E5E5E5;
        border-radius: 5px;
        overflow-y: auto;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        .table1, .table2{
            width: 49.8%;
            background-color: white;
        }
        table{
            tr{
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                th{
                    border: none;
                    border-bottom: 1px solid white;
                    span{
                        color: #7C7FFF;
                    }
                }
                td{
                    display: flex;
                    flex-direction: column;
                    font-family: Neue;
                    font-weight: 600;
                    color: #566A7F;
                    img{
                        border-radius: 100%;
                        width: 100%;
                    }
                    &:first-child{
                        width: 13%;
                    }
                    &:nth-child(2){
                        width: 77%;
                    }
                    &:last-child{
                        width: 10%;
                    }
                }
            }
        }
    }
    .transaction{
        height: 300px;
        width: 31%;
        background-color: #fff;
        border-radius: 5px;
    }
}

</style>