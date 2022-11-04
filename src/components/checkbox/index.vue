<template>
    <van-checkbox v-model="thatData.formData">复选框</van-checkbox>
</template>
<script lang="ts" setup>
import merge from "deepmerge";
import Enumerable from "linq";
const props = defineProps(["option", "data", "value"])
const emits = defineEmits({})
const root = getCurrentInstance();
const that = root.proxy;
const thatData = reactive({
    formData:[]
})
</script>
<style lang="scss" scoped>
</style>
