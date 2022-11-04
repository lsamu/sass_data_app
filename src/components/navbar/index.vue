<template>
    <van-nav-bar title="标题" left-text="返回" right-text="按钮" left-arrow />
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
