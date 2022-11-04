<template>
    <div>
        <van-cell-group style="margin-top:0.4rem">
            <van-cell title="我的优惠券" icon="gold-coin" is-link />
            <van-cell title="我的收货地址" icon="todo-list" is-link />
        </van-cell-group>

        <van-cell-group style="margin-top:0.4rem">
            <van-cell is-link icon="vip-card">
                <template slot="title">
                    <span class="custom-title">{{ "我的VIP" }}</span>
                    <van-tag type="danger" :round="true">NEW</van-tag>
                </template>
            </van-cell>
        </van-cell-group>
        <van-cell-group style="margin-top:0.4rem">
            <!-- 联系客服 -->
            <van-cell title="联系客服" icon="phone" is-link />
            <!-- 意见反馈 -->
            <van-cell title="意见反馈" icon="comment-circle" is-link />
            <!-- 语言切换 -->
            <van-cell title="语言切换" icon="clock" is-link />
        </van-cell-group>
    </div>
</template>
<script lang="ts" setup>
import merge from "deepmerge";
import Enumerable from "linq";
const props = defineProps(["option", "data", "value"])
const emits = defineEmits({})
const root = getCurrentInstance();
const that = root.proxy;
</script>
