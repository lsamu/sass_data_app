<template>
    <!-- 订单相关-->
    <van-cell-group>
        <van-cell title="我的订单" icon="label" value="查看所有订单" is-link></van-cell>
        <van-grid :border="false">
            <van-grid-item
                v-for="(order, index) in [{ title: '待支付', icon: '#' }, { title: '待收货', icon: '#' }, { title: '待评价', icon: '#' }, { title: '退款/售后', icon: '#' }]"
                :key="index" :icon="order.icon" :text="order.title" />
        </van-grid>
    </van-cell-group>
</template>
<script lang="ts" setup>
import merge from "deepmerge";
import Enumerable from "linq";
const props = defineProps(["option", "data", "value"])
const emits = defineEmits({})
const root = getCurrentInstance();
const that = root.proxy;
</script>
