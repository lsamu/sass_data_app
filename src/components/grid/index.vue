<template>
    <van-grid :column-num="5" :gutter="5">
        <van-grid-item :icon="getAssets('../../../assets/index/grid_' + item + '.png')" :text="'文字' + item"
            v-for="item, index in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]" :key="index" />
    </van-grid>
</template>
<script lang="ts" setup>
import merge from "deepmerge";
import Enumerable from "linq";
const props = defineProps(["option", "data", "value"])
const emits = defineEmits({})
const root = getCurrentInstance();
const that = root.proxy;

const thatData = reactive({

})

// 获取assets静态资源
const getAssets = (url: string) => {
    const imgUrl = new URL(url, import.meta.url).href
    return imgUrl;
}

</script>
<style lang="scss" scoped>
</style>
