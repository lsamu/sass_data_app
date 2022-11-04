<template>
    <van-address-list v-model="thatData.formData" :list="thatData.list" :disabled-list="thatData.disabledList" disabled-text="以下地址超出配送范围"
        default-tag-text="默认" />
</template>
<script lang="ts" setup>
    const thatData = reactive({
        formData:null,
        list:[],
        disabledList:[]
    })
</script>
<style lang="scss">
.van-address-list__bottom {
    position: absolute;
}
</style>