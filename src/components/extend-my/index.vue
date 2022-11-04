<template>
    <div id="mine">
        <box-vant-center></box-vant-center>
        <!-- 订单相关-->
        <van-cell-group>
            <van-cell title="我的订单" icon="label" value="查看所有订单" is-link></van-cell>
            <van-grid :border="false">
                <van-grid-item
                    v-for="(order, index) in [{ title: '待支付', icon: '#' }, { title: '待收货', icon: '#' }, { title: '待评价', icon: '#' }, { title: '退款/售后', icon: '#' }]"
                    :key="index" :icon="order.icon" :text="order.title" />
            </van-grid>
        </van-cell-group>
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

        <box-vant-tabbar></box-vant-tabbar>
    </div>
</template>
<script lang="ts" setup>
const props = defineProps(["option", "data", "value"])
const emits = defineEmits([])
const thatData = reactive({
    userInfo: {
        token: "123",
        login_icon: "#",
        noLogin_icon: "#",
        sex: 1,
        user_name: "123",
        phoneNumber: "13681176393"
    }
})

</script>
<style lang="scss" scoped>
#mine {
    width: 100%;
    background-color: #f5f5f5;
    margin-bottom: 3rem;

    .version {
        margin: 0 auto;
        text-align: center;
        font-size: 0.6rem;
        background-color: #ffffff;
        height: 2rem;
        color: grey;
        line-height: 2rem;
    }

    .van-nav-bar {
        background-color: #1989fa;
        font-size: 0.6rem;
    }

    .van-nav-bar__title {
        color: white;
    }

    .personMsg {
        display: flex;
        align-items: center;

        .sex {
            position: absolute;
            top: 3.5rem;
            left: 3.8rem;
            width: 0.1rem;
            height: 0.1rem;

            img {
                width: 1rem;
                height: 1rem;
            }
        }

        img {
            width: 4rem;
            height: 4rem;
            border-radius: 50%;
        }

        .personInfo {
            display: flex;
            flex-direction: column;
            margin-left: 0.8rem;
        }
    }

    .van-cell__left-icon {
        color: #1989fa;
        font-size: 1.2rem;
    }

    /*转场动画*/
    .router-slider-enter-active,
    .router-slider-leave-active {
        transition: all 0.3s;
    }

    .router-slider-enter,
    .router-slider-leave-active {
        transform: translate3d(2rem, 0, 0);
        opacity: 0;
    }
}
</style>