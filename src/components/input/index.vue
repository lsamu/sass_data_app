<template>
    <van-field v-model="thatData.formData" v-bind="currentOption" v-on="currentOn" />
</template>
<script lang="ts" setup>
import merge from "deepmerge";
import Enumerable from "linq";
const props = defineProps(["option", "data", "value"])
const emits = defineEmits({})
const root = getCurrentInstance();
const that = root.proxy;

const thatData = reactive({
    formData: null
})

const currentOption = computed(() => {
    return props.option;
})

const currentOn = computed(() => {
    for (const item in currentOption.value) {
        //console.log(item);
    }
    return props.option;
})

onMounted(() => {
    thatData.formData = props?.value
})

watch(() => props.value, (n, o) => {
    thatData.formData = n;
})

</script>
<style lang="scss" scoped>
</style>
