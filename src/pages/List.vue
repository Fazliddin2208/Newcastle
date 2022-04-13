<template>
    <div class="my-site">
        <div class="top">
            <div class="my-card">
                <div class="my-left">
                    <h1>420 <span>(+24)</span></h1>
                    <p>Jami o'quvchilar</p>
                </div>
                <div class="my-right">
                    <i class="fa fa-user"></i>
                </div>
            </div>

            <div class="my-card">
                <div class="my-left">
                    <h1>150 <span>(+19)</span></h1>
                    <p>To'lov qilganlar</p>
                </div>
                <div class="my-right">
                    <i class="fa fa-usd"><span>+</span></i>
                </div>
            </div>

            <div class="my-card">
                <div class="my-left">
                    <h1>101 <span>(+10)</span></h1>
                    <p>Ro'yxatdan o'tgan</p>
                </div>
                <div class="my-right">
                    <i class="fa fa-users"></i>
                </div>
            </div>
        </div>

        <div class="content">
            <h4>O'quvchilar ro'yhati</h4>
            <div class="sorters">
                <select name="subjects">
                    <option value="--" disabled selected>Fanlar bo'yicha</option>
                    <option v-for="option in optionSubject" :key="option.value" :value="option.value">
                        {{option.name}}
                    </option>
                    
                </select>
                
                <select name="groups">
                    <option value="--" disabled selected>Guruhlar bo'yicha</option>
                    <option v-for="option in optionGroup" :key="option.value" :value="option.value">
                        {{option.name}}
                    </option>
                </select>

                <select name="teachers">
                    <option value="--" disabled selected>Ustozlar bo'yicha</option>
                    <option v-for="option in optionTeacher" :key="option.value" :value="option.value">
                        {{option.name}}
                    </option>
                </select>
            </div>
            <hr>
            <div class="table">
                <table>
                    <tr>
                        <th>ID</th>
                        <th>FISH</th>
                        <th>Fan</th>
                        <th>Guruh</th>
                        <th>Ro'yxatga olingan sana</th>
                    </tr>
                    <tr 
                        v-for="data in datas"
                        :key="data.id"
                    >
                        <td>{{data.id}}</td>                        
                        <td>{{data.name}}</td>                        
                        <td>{{data.subject}}</td>                        
                        <td>{{data.group}}</td>                        
                        <td class="last">{{data.date}} <span :class="data.shape"></span></td>
                    </tr>
                </table>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        data() {
            return {
                datas:[
                    {id:1,name:'Dora Stevens',subject:'Matematika',group:'1218Easy Alley',date:'09/02/2020 17:00', shape:'red'},
                    {id:2,name:'Dora Stevens',subject:'Matematika',group:'1218Easy Alley',date:'09/02/2020 17:00', shape:'green'},
                    {id:3,name:'Dora Stevens',subject:'Matematika',group:'1218Easy Alley',date:'09/02/2020 17:00', shape:'red'},
                    {id:4,name:'Dora Stevens',subject:'Matematika',group:'1218Easy Alley',date:'09/02/2020 17:00', shape:'green'},
                    {id:5,name:'Dora Stevens',subject:'Matematika',group:'1218Easy Alley',date:'09/02/2020 17:00', shape:'green'},
                    {id:6,name:'Dora Stevens',subject:'Matematika',group:'1218Easy Alley',date:'09/02/2020 17:00', shape:'red'},
                    {id:7,name:'Dora Stevens',subject:'Matematika',group:'1218Easy Alley',date:'09/02/2020 17:00', shape:'red'},
                    {id:8,name:'Dora Stevens',subject:'Matematika',group:'1218Easy Alley',date:'09/02/2020 17:00', shape:'green'},
                    {id:9,name:'Dora Stevens',subject:'Matematika',group:'1218Easy Alley',date:'09/02/2020 17:00', shape:'green'},
                    {id:10,name:'Dora Stevens',subject:'Matematika',group:'1218Easy Alley',date:'09/02/2020 17:00', shape:'red'},
                    {id:11,name:'Dora Stevens',subject:'Matematika',group:'1218Easy Alley',date:'09/02/2020 17:00', shape:'red'},
                    {id:12,name:'Dora Stevens',subject:'Matematika',group:'1218Easy Alley',date:'09/02/2020 17:00', shape:'red'},
                    {id:13,name:'Dora Stevens',subject:'Matematika',group:'1218Easy Alley',date:'09/02/2020 17:00', shape:'red'},
                    {id:14,name:'Dora Stevens',subject:'Matematika',group:'1218Easy Alley',date:'09/02/2020 17:00', shape:'red'},
                    {id:15,name:'Dora Stevens',subject:'Matematika',group:'1218Easy Alley',date:'09/02/2020 17:00', shape:'red'},
                    {id:16,name:'Abdulla Qurbonov',subject:'Ona tili',group:'1218 HArd Alley',date:'09/02/2020 17:00', shape:'green'},
                ],
                optionSubject: [
                    {value:"Python",name:"Python"},
                    {value:"math",name:"Matematika"},
                    {value:"eng",name:"English"},
                    {value:"mother",name:"Ona tili"},
                ],
                optionGroup: [
                    {value:"first",name:"1-guruh"},
                    {value:"second",name:"2-guruh"},
                    {value:"third",name:"3-guruh"},
                    {value:"fourst",name:"4-guruh"},
                ],
                optionTeacher: [
                    {value:"alisher",name:"Alisher"},
                    {value:"abdulla",name:"Abdulla"},
                    {value:"dora",name:"Dora"},
                    {value:"guli",name:"Guli"},
                ],
            }
        },
        props: {
            modalValue:{
                type: Array,
                default: () => []
            },
            options: {
                type: Array,
                default: () => []
            }
        },
        methods: {
            changeOption(e){
                this.$emit('update:modelValue',e.target.value)
            }
        },
    }
</script>

<style lang="scss" scoped>
.last{
    display: flex;
    justify-content: space-between;
    .red{
        width: 10px;
        height: 10px;
        background-color: red;
        border-radius: 15px;
        display: inline-block;
    }
    .green{
        width: 10px;
        height: 10px;
        background-color: green;
        border-radius: 15px;
        display: inline-block;
    }
}

hr{
    color: #A3A3A3;
    margin: 35px 0;
    width: 60vw;
    margin-left: -30px;
    opacity: 0.2;
}
.my-site{
    height: auto;
    .top{
        height: 120px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        .my-card{
            box-shadow: 0px 0px 6px 3px rgba(0, 0, 0, 0.1);
            width: 31%;
            height: 100px !important;
            border-radius: 10px;
            height: auto;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            background-color: white;
            .my-left{
                // border: 1px solid red;
                width: 60%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-content: center;
                h1{
                    font-size: 30px;
                    margin: 0;
                    color: #566A7F;
                    span{
                        font-size: 14px;
                        color: #80E04D;
                    }
                }
                p{
                    color: #A3A3A3;
                    font-weight: 500;
                    margin-top: -10px;
                }
            }
            .my-right{
                width: 40%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                .fa-user,.fa-usd,.fa-users{
                    font-size: 20px;
                    border-radius: 5px;
                    background-color: #E7E7FF;
                    color: #696CFF;
                    width: 35px;
                    height: 32px;
                    // padding: 5px;
                    // padding-right: 5px;
                    // padding-bottom: 5px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                .fa-user{
                    background-color: #E7E7FF;
                    color: #696CFF;
                }
                .fa-usd{
                    background-color: #FFE0DB;
                    color: #FF3E1D;
                    span{
                        font-size: 10px;
                        font-weight: bolder;
                    }
                }
                .fa-users{
                    background-color: #E8FADF;
                    color: #80E04D;
                }
            }
        }
    }

    .content{
        box-shadow: 0px 0px 6px 3px rgba(0, 0, 0, 0.1);
        background-color: #fff;
        padding: 5px 30px 15px;
        border-radius: 10px;
        h4{
            text-align: left;
            // text-indent: 30px;
            font-size: 25px;
            color: #6B7C8F;
        }
        .sorters{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            select{
                display: block;
                width: 26%;
                height: 40px;
                border: 1px solid #CCCCCC;
                color: #7A8A9A;
                border-radius: 5px;
            }
        }
        .table{
            margin-top: -10px;
            th{
                color: #A3A3A3;
            }
        }
    }
}
</style>