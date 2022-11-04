<template>
    <div class="table">
        <div class="tr">
            <div class="th">商品名称</div>
            <div class="th">商品编号</div>
            <div class="th">商品数量</div>
        </div>

        <van-checkbox-group>
            <div v-for="item, index in data" :key="index">
                <van-checkbox shape="square">
                    <div class="tr">
                        <div class="td">{{ item.title }}</div>
                        <div class="td">{{ item.title }}</div>
                        <div class="td">{{ item.title }}</div>
                    </div>
                </van-checkbox>
            </div>
        </van-checkbox-group>
    </div>
</template>
<script lang="ts" setup>
import merge from "deepmerge";
import Enumerable from "linq";
const props = defineProps(["option", "data", "value"])
const emits = defineEmits({})
const root = getCurrentInstance();
const that = root.proxy;
const thatData = reactive({
    data: [
        {
            id: 1,
            title: "title"
        }
    ]
})
</script>
<style lang="scss" scoped>
.table {
    border: 0px solid darkgray;

    .tr {
        display: flex;
        width: 100%;
        justify-content: center;
        height: 3rem;
        align-items: center;
    }

    .td {
        width: 40%;
        justify-content: center;
        text-align: center;
    }

    .bg-w {
        background: snow;
    }

    .bg-g {
        background: #e6f3f9;
    }

    .th {
        width: 40%;
        justify-content: center;
        background: #3366ff;
        color: #fff;
        display: flex;
        height: 3rem;
        align-items: center;
    }
}
</style>
