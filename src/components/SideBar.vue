<template>
  <div class="side">
    <div class="logo">
      <div class="logo-img">
        <img src="../assets/images/logo.png" alt="logo" />
        <h3>NewCastle</h3>
      </div>
      
    </div>

    <div class="menu">
      <!-- <ul>
                <router-link
                    v-for="link in links"
                    :key="link.url"
                    tag='li'
                    active-class="active"
                    :to="link.url"
                    :exact="link.exact"
                    class="li"
                >
                    <li>
                        <div>
                            <a href="#" ><i :class="link.icon"></i><span>{{link.title}}</span></a>
                        </div>
                        <div class="shape"></div>
                    
                    </li>
                </router-link>
                
            </ul> -->
      <!-- <ul>
                <li>
                    <div>
                        <a href="#" class="active" @click="$router.push('/')" to="/"><i class="fa fa-home"></i><span>Asosiy</span></a>
                    </div> 
                    <div class="shape active"></div>
                </li>
                <li>
                    <div>
                        <a href="#" @click="$router.push('/students')" enter-class="active" to="/students"><i class="fa fa-graduation-cap"></i><span>O'quvchilar</span> <div class="right-icon">
                            <i class="fa fa-angle-right"></i></div></a>
                    </div> 
                    <div class="shape"></div>
                    <ul class="sub-student">
                        <li>
                            <a href="#" @click="$router.push('/list')" to="/list">Ro'yxat</a>
                            <a href="#" @click="$router.push('/list')" to="/list">Guruhlar</a>
                            <a href="#" @click="$router.push('/list')" to="/list">Guruhlar yaratish</a>
                            <a href="#" @click="$router.push('/list')" to="/list">Qora ro'yxat</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <div>
                        <a href="#" @click="$router.push('/teachers')" to="/teachers"><i class="fa fa-group"></i><span>Ustozlar</span> <div class="right-icon">
                            <i class="fa fa-angle-right"></i></div></a>
                    </div>
                    <div class="shape"></div>
                </li>
                <li>
                    <div>
                        <a href="#"><i class="fa fa-user"></i><span>Xodimlar</span> <div class="right-icon">
                            <i class="fa fa-angle-right"></i></div></a>
                    </div>
                    <div class="shape"></div>
                </li>
                <li>
                    <div>
                        <a href="#"><i class="fa fa-usd"></i><span>Kassa</span> <div class="right-icon">
                            <i class="fa fa-angle-right"></i></div></a>
                    </div>
                    <div class="shape"></div>
                </li>
            </ul> -->

      <ul>
        <li class="menu-link" v-for="(item, index) in menuTree" :key="index">
          <router-link
            class="link-link"
            :class="{ 'bolasi-bor': item.exact }"
            :to="item.url"
          >
            <i :class="item.icon" class="my-icon"></i>
            <span>{{ item.label }}</span>
            <i
              v-if="data"
              class="fa fa-angle-right"
              :class="{ expanded: expanded }"
            ></i>
          </router-link>
          <ul
            v-if="statusSublinks"
            class="my-sub-link"
          >
            <li
              class="sub-link"
              v-for="(subLink, index) in item.children"
              :key="index"
              :depth="depth + 1"
            >
              <router-link :to="subLink.url">{{ subLink.label }}</router-link>
            </li>
          </ul>
        </li>
      </ul>
    </div>

    <div class="help">
      <a href="#" class="deactive"
        ><i class="fa fa-headphones"></i><span>Yordam</span></a
      >
    </div>
  </div>
</template>

<script>
import MenuItem from "./MenuItem.vue";

export default {
  name: "recursive-menu",
  data() {
    return {
      statusSublinks: false,
      showChildren: false,
      expanded: false,
      containerHeight: 0,
      menuTree: [
        {
          label: "Asosiy",
          icon: "fa fa-home",
          exact: false,
          url: "/",
        },
        {
          label: "O'quvchilar",
          icon: "fa fa-graduation-cap",
          url: "",
          exact: true,
          children: [
            { label: "Ro'yxat", url: "/list" },
            { label: "Guruhlar", url: "/group" },
            { label: "Guruh yaratish", url: "/create-group" },
            { label: "Qora ro'yxat", url: "/blocked" },
          ],
        },
        {
          label: "Ustozlar",
          icon: "fa fa-group",
          url: "/teachers",
          exact: false,
        },
      ],
    };
  },
  components: {
    // MenuItem,
  },
  mounted() {
    let linkLink = document.querySelectorAll(".bolasi-bor");
    linkLink.forEach((elem) => {
      elem.addEventListener("click", () => {
        this.statusSublinks = !this.statusSublinks;
      });
    });
    let links = document.querySelectorAll(".menu-link");
    links.forEach((element) => {
      element.addEventListener("click", () => {
        links.forEach((elem) => {
          elem.classList.remove("active");
        });
        element.classList.add("active");
      });
    });
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.sub-student {
  position: relative;
  left: -30px;
  top: 20px;
  border: 1px solid red;
}
.side:hover .sub-student {
  border: 1px solid black;
  left: -16.5vw;
}
// .active {
//     & > a{
//         background-color: #696cff;
//     }
// }

$main-color: #696cff;
@font-face {
  font-family: Neue;
  src: url(@/fonts/Neue-Haas-Unica-Pro/NeueHaasUnicaPro-Regular.ttf);
}
// .active {
//   background-color: #696cff;
//   transition: 1s all ease;
//   border-radius: 5px;
// }
// .side:hover .active {
// width: 100%;
//   background-color: #696cff;
// }

.menu-link {
  &.active {
    & > a {
      background: #696cff;
      border: 1px solid #696cff;
      width: 100% !important;
    }
  }
  ul {
    li {
      a {
        &.router-link-active {
          background: #696cff;
        }
      }
    }
  }
}

.side {
  background-color: #233446;
  width: 5vw;
  height: 100vh;
  // border: 1px solid black;
  padding-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  transition: 1s all ease;
  position: fixed;
  &:hover {
    width: 20vw;
  }
  &:hover .logo .logo-img h3 {
    opacity: 1;
  }
  &:hover .logo .show-icon {
    opacity: 1 !important;
    // background-color: red;
  }
  &:hover .logo .logo-img {
    height: 100%;
  }
  &:hover .menu span {
    opacity: 1;
    // display: inline-block;
  }
  &:hover .menu{
    width: 20vw;
  }
  &:hover .menu ul li{
    // display: flex;
    width: calc(20vw - 20px);
    // flex-direction: row;
  }
  &:hover .menu ul li a{
    text-align: left;
    margin-left: 20px;
    .my-icon{
      font-size: 20px;
      width: 50px;
    }
  }
  &:hover .menu span {
    // width: 20vw;
    font-size: 15px;
    transition: 1s all ease;
    opacity: 1;
    display: inline-block;
  }
  &:hover .help span {
    opacity: 1;
  }
  &:hover .help .fa-headphones {
    font-size: 20px;
  }
  .logo {
    width: 100%;
    height: 100px;
    margin-top: 30px;
    display: flex;
    flex-direction: row;
    transition: 0.4s all ease;
    .logo-img {
      width: 100%;
      opacity: 1;
      height: 80%;
      display: flex;
      flex-direction: row;
      align-items: center;
      transition: 0.4s all ease;
      img {
        height: 60%;
        // margin: 0 10px;
      }
      h3 {
        color: black;
        font-size: 25px;
        color: white;
        opacity: 0;
        transition: 0.3s all ease;
      }
    }
    .show-hide {
      margin: 0;
      padding: 0;
      display: flex;
      align-items: center;
      // opacity: 0.1;
      .show-icon {
        color: $main-color;
        border: 1px solid $main-color;
        border-radius: 20px;
        height: 20px;
        width: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #e5e5e5;
        box-shadow: 2px 2px 0px #e5e5e5, -2px -2px 0 #e5e5e5, -2px 2px 0 #e5e5e5,
          2px -2px 0 #e5e5e5;
        position: relative;
        left: 10px;
        opacity: 0;
        transition: 0.4s all ease;
        &:hover {
          cursor: pointer;
        }
      }
    }
  }

  .menu {
    position: fixed;
    top: 35%;
    width: 5vw;
    left: 0;
    transition: 1s all ease;
    ul {
      list-style-type: none;
      transition: 1s all ease;
      li {
        transition: 1s all ease;
        // display: flex;
        // flex-direction: row;
        a {
          display: block;
          text-align: center;
          width: 100%;
          transition: 1s all ease;
          color: white;
          margin-top: 5px;
          span{
            opacity: 1;
            display: none;
            font-size: 20px !important;
          }
          .my-icon{
            font-size: 30px;
          }
        }
        
      }
      // .li{
      //     margin-bottom: 5px;
      //     height: 30px;
      //     display: flex;
      //     flex-direction: row;
      //     justify-content: space-between;
      // }
      //         .shape{
      //             width: 0.5vw;
      //             height: 100%;
      //             background-color: #233446;
      //             border-top-left-radius: 5px;
      //             border-bottom-left-radius: 5px;
      //             transition: 0.4s all ease;
      //             &:nth-child(1){
      //                 background-color: #696CFF;
      //             }
      //             &:hover{
      //                 background-color: #696CFF !important;
      //             }
      //         }
      //         &:hover .shape, .active{
      //             background-color: #696CFF;
      //         }
      //         &:hover a{
      //             background-color: #696CFF;
      //             width: 100%;
      //         }
      //         .shape:hover a{
      //             background-color: #696CFF;
      //         }
      // a{
      //     display: flex;
      //     flex-direction: row;
      //     width: 3vw;
      //     height: 100%;
      //     text-align: left;
      //     text-indent: 10px;
      //     color: red;
      //     border-radius: 5px;
      //     line-height: 30px;
      //     transition: 1s all ease;
      //     &:hover{
      //         background-color: #696CFF;
      //     }
      // }
    }
    //             span{
    //                 width: 60%;
    //                 font-family: Neue;
    //                 opacity: 0;
    //                 // display: none;
    //                 transition: 0.4s all ease;
    //                 transition-delay: 0.2s;
    //             }
    //             i:first-child{
    //                 width: 15%;
    //                 line-height: 30px;
    //                 text-align: center;
    //                 opacity: 1 !important;
    //                 font-size: 20px;
    //             }
    //             i:last-child{
    //                 line-height: 30px;
    //                 font-size: 20px;
    //             }
    //             .right-icon{
    //                 width: 25%;
    //                 text-align: center;
    //             }
    //         }
    //     }
    // }
  }

  .help {
    height: 70px;
    width: 100%;
    a {
      display: block;
      width: 100%;
      text-align: left;
      font-family: Neue;
      font-size: 18px;
      color: #e5e5e5;
      text-indent: 5px;
      height: 100%;
      span {
        opacity: 0;
        transition: 0.4s all ease;
      }
      i {
        margin-right: 15px;
        font-size: 30px;
        transition: 0.4s all ease;
      }
    }
  }
}
</style>