<template>
    <map style="width: 100%; height: 300px;">
    </map>
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
