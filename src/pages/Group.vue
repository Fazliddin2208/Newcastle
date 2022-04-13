<template>
    <div class="group">
        <div class="top">
            <div class="sorters">
                <select name="subjects">
                    <option value="--" disabled selected>Fanlar bo'yicha</option>
                    <option v-for="option in optionSubject" :key="option.value" :value="option.value">
                        {{option.name}}
                    </option>
                    
                </select>
                
                <select name="teachers">
                    <option value="--" disabled selected>Ustozlar bo'yicha</option>
                    <option v-for="option in optionTeacher" :key="option.value" :value="option.value">
                        {{option.name}}
                    </option>
                </select>

                <a class="waves-effect waves-light btn my-btn"><i class="material-icons center">add</i>Dars qo'shish</a>

            </div>
        </div>

        <div class="content">
            <table v-for="(data,index) in datas" :key='index'>
                <tr class="first-line" >
                    <th colspan="2">{{data.day}}</th>
                    <th>{{data.weekDay}}</th>
                </tr>
                <tr v-for="(timeT,index) in data.timeTable" :key="index">
                    <td>{{timeT.time}}</td>
                    <td><span class="span" :style="{background:timeT.shape}" ></span>{{timeT.subject}}</td>
                    <td>{{timeT.room}}</td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                optionSubject: [
                    {value:"Python",name:"Python"},
                    {value:"math",name:"Matematika"},
                    {value:"eng",name:"English"},
                    {value:"mother",name:"Ona tili"},
                ],
                optionTeacher: [
                    {value:"alisher",name:"Alisher"},
                    {value:"abdulla",name:"Abdulla"},
                    {value:"dora",name:"Dora"},
                    {value:"guli",name:"Guli"},
                ],
                datas: [
                    {
                        day:'16-Fevral,2022',weekDay:'Dushanba',
                        timeTable:[
                            {
                            time:'9:00-11:00',
                            subject:'Matematika',
                            room:'305',
                            shape:'#FFAB00'
                            },
                            {
                            time:'9:00-11:00',
                            subject:'Ingliz tili(IELTS)',
                            room:'314',
                            shape:'#03C3EC'
                            },
                            {
                            time:'9:00-11:00',
                            subject:'Ona tili',
                            room:'304',
                            shape:'#FF3E1D'
                            },
                            {
                            time:'9:00-11:00',
                            subject:'Rus tili',
                            room:'214',
                            shape:'#696CFF'
                            },
                        ]
                    },
                    
                    {
                        day:'16-Fevral,2022',weekDay:'Dushanba',
                        timeTable:[
                            {
                            time:'9:00-11:00',
                            subject:'Matematika',
                            room:'305',
                            shape:'#FFAB00'
                            },
                            {
                            time:'9:00-11:00',
                            subject:'Ingliz tili(IELTS)',
                            room:'314',
                            shape:'#03C3EC'
                            },
                            {
                            time:'9:00-11:00',
                            subject:'Ona tili',
                            room:'304',
                            shape:'#FF3E1D'
                            },
                            {
                            time:'9:00-11:00',
                            subject:'Rus tili',
                            room:'214',
                            shape:'#696CFF'
                            },
                        ]
                    },
                    {
                        day:'16-Fevral,2022',weekDay:'Dushanba',
                        timeTable:[
                            {
                            time:'9:00-11:00',
                            subject:'Matematika',
                            room:'305',
                            shape:'#FFAB00'
                            },
                            {
                            time:'9:00-11:00',
                            subject:'Ingliz tili(IELTS)',
                            room:'314',
                            shape:'#03C3EC'
                            },
                            {
                            time:'9:00-11:00',
                            subject:'Ona tili',
                            room:'304',
                            shape:'#FF3E1D'
                            },
                            {
                            time:'9:00-11:00',
                            subject:'Rus tili',
                            room:'214',
                            shape:'#696CFF'
                            },
                        ]
                    },
                    {
                        day:'16-Fevral,2022',weekDay:'Dushanba',
                        timeTable:[
                            {
                            time:'9:00-11:00',
                            subject:'Matematika',
                            room:'305',
                            shape:'#FFAB00'
                            },
                            {
                            time:'9:00-11:00',
                            subject:'Ingliz tili(IELTS)',
                            room:'314',
                            shape:'#03C3EC'
                            },
                            {
                            time:'9:00-11:00',
                            subject:'Ona tili',
                            room:'304',
                            shape:'#FF3E1D'
                            },
                            {
                            time:'9:00-11:00',
                            subject:'Rus tili',
                            room:'214',
                            shape:'#696CFF'
                            },
                        ]
                    },
                    {
                        day:'16-Fevral,2022',weekDay:'Dushanba',
                        timeTable:[
                            {
                            time:'9:00-11:00',
                            subject:'Matematika',
                            room:'305',
                            shape:'#FFAB00'
                            },
                            {
                            time:'9:00-11:00',
                            subject:'Ingliz tili(IELTS)',
                            room:'314',
                            shape:'#03C3EC'
                            },
                            {
                            time:'9:00-11:00',
                            subject:'Ona tili',
                            room:'304',
                            shape:'#FF3E1D'
                            },
                            {
                            time:'9:00-11:00',
                            subject:'Rus tili',
                            room:'214',
                            shape:'#696CFF'
                            },
                        ]
                    },
                        
                    
                ]
            }
        },
    }
</script>

<style lang="scss" scoped>
.span{
    width: 10px;
    height: 10px;
    border-radius: 15px;
    display: inline-block;
    margin-right: 10px;
}
.group{
    width: 100%;
    display: flex;
    // padding-top: 10px;
    flex-direction: column;
    align-content: flex-start;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0px 0px 6px 3px rgba(0, 0, 0, 0.15);
    .top{
        width: 90%;
        margin: 20px auto;
        .sorters{
            display: grid;
            grid-template-columns: 30% 30% 30%;
            justify-content: space-between;
            select{
                display: block;   
                color: #7A8A9A;
                border-radius: 5px;
                border: 1px solid #CCCCCC;
            }
            .my-btn{
                background-color: #696CFF;
                text-align: center;
                text-transform: none;
                font-family: Roboto;
                display: flex;
                align-content: center;
                justify-content: center;
                height: 100%;
            }
        }
    }
    .content{
        margin-top: 10px;
        table{
            tr{
                height: 10px;
                
                td{
                    padding: 8px 10px;
                    &:last-child{
                        text-align: right;
                    }
                }
            }
            .first-line{
                background-color: #EAEAED;
                height: 20px !important;
                th{
                    color: #7A8A9A;
                    padding: 8px 10px;
                    font-size: 14px;
                    &:last-child{
                        text-align: right;
                    }
                }

            }
        }
    }
}
</style>