<template>
    <div>
        <div class="navbar">
            <navbar />
        </div>
        <div class="side-bar">
            <side-bar />
        </div>
        <div class="content">
            <transition name="slide-fade">
                <router-view></router-view>
            </transition>
        </div>
        <side />
    </div>
</template>

<script>
    import SideBar from '@/components/SideBar.vue';
    import Navbar from '@/components/Navbar.vue';
    export default {
        components:{
            Navbar,
            SideBar,
        }
    }
</script>

<style lang="scss" scoped>
.side-bar{
    width: 20vw;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 5;
}
.navbar{
    position: sticky;
    width: 85vw;
    left: 9.5vw;
    top: 10px;
    z-index: 0;
}
.content{
    // position:sticky;
    margin-left: 9.5vw;
    width: 85vw;
    min-height: 100vh;
    margin-top: 50px;
    padding: 5px 5px;
    margin-bottom: 70px;
    z-index: 0;
    // background-color: #fff;
    overflow-y: auto;
    overflow-x: hidden;
    border-radius: 10px;
}
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

</style>