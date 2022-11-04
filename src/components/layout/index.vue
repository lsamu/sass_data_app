<template>
    <van-row>
        <van-col span="8">span: 8</van-col>
        <van-col span="8">span: 8</van-col>
        <van-col span="8">span: 8</van-col>
    </van-row>
</template>
<script lang="ts" setup>
const props = defineProps(["option", "data", "value"])
const emits = defineEmits([])
const thatData = reactive({

})
</script>
