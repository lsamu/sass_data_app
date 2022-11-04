<template>
    <van-image width="100" height="100" src="https://img01.yzcdn.cn/vant/cat.jpeg" />
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
