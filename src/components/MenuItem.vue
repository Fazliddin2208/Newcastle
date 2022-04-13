<template>
    <div class="menu-item" :class="{expanded: expanded}">
        <div class="label" @click="toggleMenu()" :style="{paddingLeft: depth + 20 +20 + 'px'}">
            <div class="left">
                <a href="#">
                    <div>
                        <i v-if="icon" :class="icon"></i>
                        <span>{{label}}</span>
                    </div>
                    <div>
                        <i v-if="data" class="fa fa-angle-right" :class="{expanded: expanded}"></i>
                    </div>
                </a>
            </div>
            <div class="right">
                <div class="shape"></div>
            </div>
        </div>
        <div v-show="showChildren" @click="activeClass" class="items-container" ref="container" :style="{height: containerHeight}">
            <ul>
                <router-link 
                    v-for="(item,index) in data"
                    :key="index"
                    :to="item.url"
                    :label="item.label"
                    :icon="item.icon"
                    :depth="depth + 1"
                    :data="item.children"
                    :active-class="active"
                    :exact="item.exact"
                    
                >
                <li>
                    <menu-item 
                        :label="item.label"
                        :icon="item.icon"
                    />
                </li>
                    
                </router-link>
            </ul>
            <!-- <ul>
                <router-link 
                    v-for="(item,index) in data"
                    :key="index"
                    :label="item.label"
                    :icon="item.icon"
                    :depth="depth + 1"
                    :data="item.children"
                    :tag="li"
                    :to="item.yol"
                >
                    <a href="#">{{item.label}}</a>
                </router-link>
            </ul> -->
        </div>
    </div>
</template>

<script>
    export default {
        name: 'menu-item',
        data: () => ({
            showChildren: false,
            expanded: false,
            containerHeight: 0
        }),
        props: {
            label: {
                type: String,
                required: true
            },
            icon: {
                type: String
            },
            url: {
                type: String
            },
            children: {
                type: String
            },
            depth: {
                type: Number,
                required: true
            },
            data: {
                type: Array
            },
            tree: {
                type: Array
            }
        },
        methods:{
            toggleMenu(){
                this.expanded = !this.expanded;
                if(!this.showChildren) {
                    this.showChildren = true;
                    this.$nextTick(() => {
                        this.containerHeight = this.$refs["container"].scrollHeight + "px";
                        setTimeout(() => {
                            this.containerHeight = "fit-content";
                            this.$refs["container"].style.overflow = "visible";
                        },300)
                    })
                } else {
                    this.containerHeight = this.$refs["container"].scrollHeight + "px";
                    this.$refs["container"].style.overflow = "hidden";
                    this.containerHeight = 0 + "px";
                    setTimeout(() => {
                        this.showChildren = false
                    },300)
                }
            },
            activeClass() {
                this.$refs["itemLink"].style.backgroundColor = "blue";
            }
        }
    }
</script>

<style lang="scss" scoped>
.active{
    background-color: #696CFF;
}
.menu-item{
    margin-bottom: 5px;
    position: relative;
    width: 19.5vw;
    // border: 1px solid orange;
    transition: 1s all ease;
    &:hover .right{
        background-color: #696CFF;
        border: 1px solid #696CFF;
    }
    // &:hover .label .left{
        // background-color: #696CFF;
    // }
    // height: 30px;
    
    .label{
        // border: 1px solid red;
        width: 100%;
        height: 30px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        box-sizing: border-box;
        user-select: none;
        .left{
            width: 92%;
            text-align: left;
            border-radius: 5px;
            color: white;
            display: flex;
            flex-direction: row;
            align-items: center;
            padding-left: 0;
            transition: 1s all ease;
            a{
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-content: center;
                align-items: center;
                width: 100%;
                height: 100%;
                text-align: left;
                color: white;
                border-radius: 5px;
                transition: 1s all ease;
                i{
                    font-size: 20px;
                    &:first-child{
                        margin-top: 3px;
                        margin-left: 10px;
                        margin-right: 10px;
                    }
                    &:last-child{
                        margin-right: 10px;
                        transition: 0.3s all ease;
                        &.expanded{
                            transform: rotate(90deg);
                        }
                    }
                }
            }
        }
        .right{
            width: 0.6vw;
            border-radius: 5px 0 0 5px;
            transition: 1s all ease;
        }
    }
    .items-container{
        width: 100%;
        overflow: hidden;
        transition: 0.3s height ease;
    }
}
</style>