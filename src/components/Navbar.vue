<template>
    <div class="my-navbar">
        <div class="menu">
            <div class="search">
                <input type="search" placeholder="Qidirish">
                <i class="fa fa-search"></i>
                
            </div>
            <div class="account">
                <ul>
                    <li><a href="#"><img src="@/assets/images/uzb.png" alt="Language"></a></li>
                    <li><a href="#"><img src="@/assets/images/Vector.png" alt="Night mode"></a></li>
                    <li><img src="@/assets/images/acc.png" class="acc-image" alt="Account" @click="accVisible = true">
                    
                        <div class="sub-acc" v-show="accVisible" @click.stop="hideModal">
                            <div class="prof-img">
                                <div class="image">
                                    <img src="@/assets/images/acc.png" alt="">
                                    <div class="online"></div>
                                </div>
                                <div class="name">
                                    <h5>Izzatillo Yuldashev</h5>
                                    <h5>Admin</h5>
                                </div>
                            </div>
                            <div class="profile">
                                <ul>
                                    <li><a href="#"><i class="fa fa-user"></i>Mening profilim</a></li>
                                    <li><a href="#"><i class="fa fa-cog"></i>Sozlamalar</a></li>
                                    <li><a href="#"><i class="fa fa-headphones"></i>Yordam</a></li>
                                </ul>
                            </div>
                            <div class="exit">
                                <ul>
                                    <li><a href="#"><i class="fa fa-sign-out"></i>Chiqish</a></li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <div class="online"></div>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                accVisible: false,
            }
        },
        methods: {
            hideModal(){
                "update:show",false
            }
        },
        props: {
            show: {
                type: Boolean,
                default: false
            }
        },
        // methods: {
        //     showAcc(){
        //         this.accVisible = true
        //     },
            
        // },
    }
</script>

<style lang="scss" scoped>
@import '~materialize-css/dist/css/materialize.min.css';
.my-navbar{
    width: 60vw;
    margin-top: 50px;
    .menu{
        width: 60vw;
        background-color: #fff;
        height: 50px;
        padding: 0;
        position: relative;
        // top: 50px;
        display: flex;
        flex-direction: row;
        align-items: center;
        border-radius: 10px;
        box-shadow: 0px 0px 6px 3px rgba(0, 0, 0, 0.15);
        .search{
            width: 50%;
            height: 70%;
            display: flex;
            padding-left: 20px;
            input{
                height: 100%;
                color: #97A2B0;
                font-weight: 900;
                padding-left: 30px;
                border: none;
                transition: 0.2s all ease;
                &::placeholder{
                    color: #AEB8C2;
                }
            }
            .fa-search{
                position: relative;
                left: -94%;
                top: 7.5px;
                color: #97A2B0;
                font-size: 20px;
            }
        }
        .account{
            height: 70%;
            width: 50%;
            display: flex;
            flex-direction: row;
            justify-content: right;
            ul{
                padding: 0;
                height: 100%;
                display: flex;
                flex-direction: row;
                li{
                    height: 100%;
                    margin-right: 15px;
                    padding: 0;

                    .sub-acc{
                        position: fixed;
                        width: 200px;
                        right: 15px;
                        top: 47px;
                        z-index: 5;
                        border-radius: 5px;
                        box-shadow: 0px 0px 6px 3px rgba(0, 0, 0, 0.2);
                        background-color: #fff;
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

                    a{
                        width: 30px;
                        height: 100%;
                        display: flex;
                        align-items: center;
                        img{
                            height: 60%;
                        }
                        .acc-image{
                            height: 90%;
                            position: relative;
                            z-index: 0;
                        }                        
                    }
                    
                }
                div[class="online"]{
                    width: 7px;
                    height: 7px;
                    border-radius: 7px;
                    display: block;
                    background-color: #73DE39;
                    border: 1.5px solid #fff;
                    position: relative;
                    left: -20px;
                    top: 23px;
                    z-index: 5;
                }
            }
        }
    }
}
</style>