<template>
    <van-address-edit :area-list="areaList" show-postal show-delete show-set-default show-search-result
        :search-result="searchResult" :area-columns-placeholder="['请选择', '请选择', '请选择']" />
</template>
<script lang="ts" setup>
const thatData = reactive({
    areaList: [],
    searchResult: []
})
</script>