<template>
    <div class="sub-modal" v-if="show" @click.stop="hideModal">
        <div @click.stop class="sub-acc">
            <slot></slot>
        </div>

    </div>
</template>

<script>
    export default {
        name: "account-modal",
        props: {
            show: {
                type: Boolean,
                default: false
            }
        },
        methods: {
            hideModal(){
                this.$emit("update:show",false)
            }
        },
    }
</script>

<style lang="scss" scoped>
.sub-acc{
    position: fixed;
    width: 200px;
    right: 15px;
    top: 47px;
    z-index: 5;
    border-radius: 5px;
    box-shadow: 0px 0px 6px 3px rgba(0, 0, 0, 0.2);
    background-color: #fff;
    border: 1px solid black;
    .prof-img{
        display: flex;
        flex-direction: row;
        padding-top: 5px;
        .image{
            width: 30%;
            display: flex;
            align-items: center;
            justify-content: center;
            .online{
                position: relative;
                top: 15px;
                left: -10px;
            }
        }
        .name{
            width: 70%;
            h5{
                font-size: 13px;
                font-weight: 700;
                color: #7B8A9A;
                padding-left: 5px;
                text-align: left;
                font-family: Neue;
                &:first-child{
                    margin-bottom: -10px;
                }
            }
        }
    }
    .profile{
        border-top: 1px solid #7B8A9A;
        margin-top: 10px;
        padding-top: 15px;
        ul{
            display: flex;
            flex-direction: column;
            li{
                width: 100%;
                margin-bottom: 5px;      
                a{
                    display: block;
                    width: 100%;
                    height: 100%;
                    text-align: left;
                    font-size: 13px;
                    font-weight: 700;
                    font-family: Neue;
                    color: #7B8A9A;
                    padding: 5px 10px;
                    i{
                        margin-right: 7px;
                        font-size: 20px;
                    }
                }
            }
        }
    }
    .exit{
        border-top: 1px solid #7B8A9A;
        margin-top: 10px;
        ul{
            display: flex;
            flex-direction: column;
            padding: 10px 0;
            li{
                width: 100%;
                margin-bottom: 5px;      
                a{
                    display: block;
                    width: 100%;
                    height: 100%;
                    text-align: left;
                    font-size: 13px;
                    font-weight: 700;
                    font-family: Neue;
                    color: #7B8A9A;
                    padding: 5px 10px;
                    i{
                        margin-right: 7px;
                        font-size: 20px;
                    }
                }
            }
        }
    }
}
</style>