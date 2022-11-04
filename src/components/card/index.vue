<template>
    <div>
        <van-card :num="item" price="2.00" desc="描述信息" title="商品标题" thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
            v-for="item, index in [1, 2, 3, 4, 5, 6]" :key="index" />
    </div>
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
</script>
<style lang="scss" scoped>
</style>
