<template>
    <div class="create-group">
        <div class="container">
            <h5>Guruh yaratish</h5>
            <form action="">
                <label for="subjects">Fan</label>
                <select name="subjects" id="subjects">
                    <option value="--" disabled selected>Fanni tanlang...</option>
                    <option v-for="option in optionSubject" :key="option.value" :value="option.value">
                        {{option.name}}
                    </option>
                </select>

                <label for="teachers">O'qituvchi</label>
                <select name="teachers" id="teachers">
                    <option value="--" disabled selected>O'qituvchini tanlang...</option>
                    <option v-for="option in optionTeacher" :key="option.value" :value="option.value">
                        {{option.name}}
                    </option>
                </select>

                <label for="group">Guruh</label>
                <input type="text" id="group" placeholder="Guruhga nom bering...">

                <div class="send-reset">
                    <input type="submit" value="Yaratish">
                    <input type="reset" value="Bekor qilish">
                </div>
            </form>
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
            }
        },
    }
</script>

<style lang="scss" scoped>
.create-group{
    box-shadow: 0px 0px 6px 3px rgba(0, 0, 0, 0.1);
    background-color: rgba($color: #fff, $alpha: 0.9);
    border-radius: 7px;
    font-family: Roboto;
    .container{
        width: 90%;
        padding-top: 20px;
        padding-bottom: 40px;
        h5{
            text-align: left;
            margin-bottom: 20px;
            color: #7A8A9A;
        }
        form{
            label{
                color:#7A8A9A;
                display: block;
                text-align: left;
                margin-bottom: 5px;
                font-size: 17px;
            }
            select{
                display: block;
                border: 1px solid #CCCCCC;
                height: 30px;
                margin-bottom: 25px;
                border-radius: 5px;
                color: #7A8A9A;
            }
            input{
                border: 1px solid #CCCCCC;
                color: #7A8A9A;
                border-radius: 5px;
                height: 30px;
                padding-left: 10px;
                &:focus{
                    border: 1.5px solid #CCCCCC !important;
                    border-bottom: 1.5px solid #CCCCCC;
                }
                &::placeholder{
                    color: #7A8A9A;
                }
                
            }
            .send-reset{
                display: flex;
                justify-content: left;
                font-family: Roboto;
                margin-top: 50px;
                input[type='submit']{
                    display: flex !important;
                    justify-content: center;
                    align-content: center;
                    width: 110px;
                    margin-right: 35px;
                    background-color: #696CFF;
                    color: white;
                    cursor: pointer;
                }
                input[type='reset']{
                    display: flex;
                    justify-content: center;
                    align-content: center;
                    width: 110px;
                    color: #7A8A9A;
                    background-color: #EBEEF0;
                    cursor: pointer;
                }
            }
        }
    }
}
</style>