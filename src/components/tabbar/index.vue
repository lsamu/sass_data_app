<template>
    <!-- <van-tabbar route>
        <van-tabbar-item icon="home-o" replace to="/vant">首页</van-tabbar-item>
        <van-tabbar-item icon="search" replace to="/vant/class">分类</van-tabbar-item>
        <van-tabbar-item icon="friends-o" replace to="/vant/cart">购物车</van-tabbar-item>
        <van-tabbar-item icon="setting-o" replace to="/vant/my">我的</van-tabbar-item>
    </van-tabbar> -->
    <van-tabbar route fixed>
        <van-tabbar-item icon="home-o" replace>首页</van-tabbar-item>
        <van-tabbar-item icon="search" replace>分类</van-tabbar-item>
        <van-tabbar-item icon="friends-o" replace>购物车</van-tabbar-item>
        <van-tabbar-item icon="setting-o" replace>我的</van-tabbar-item>
    </van-tabbar>
</template>
<script lang="ts" setup>
import merge from "deepmerge";
import Enumerable from "linq";
const props = defineProps(["option", "data", "value"])
const emits = defineEmits({})
const root = getCurrentInstance();
const that = root.proxy;

const router = that.$router;
const route = that.$route;

const thatData = reactive({

})

const onChangeTabbar = (index: number) => {
    switch (index) {
        case 0:
            router.push({
                path: "/vant"
            })
            break;
        case 1:
            router.push({
                path: "/vant/class"
            })
            break;
        case 2:
            router.push({
                path: "/vant/cart"
            })
            break;
        case 3:
            router.push({
                path: "/vant/my"
            })
            break;
    }
}

</script>
<style lang="scss" scoped>
.van-tabbar--fixed{
    position: absolute;
}
</style>