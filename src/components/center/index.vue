<template>
    <div>
        <van-nav-bar title="个人中心" :fixed="true" :border="false" style="height:2.5rem" />
        <van-cell-group style="margin-top:2.4rem">
            <van-cell style="background-color: #1989fa;color:#FFF;" label-class="labelClass" is-link center>
                <template slot="title">
                    <!-- 已登录状态 -->
                    <div class="personMsg" v-if="userInfo.token">
                        <img class="iconImage" :src="userInfo.login_icon" alt />
                        <div class="sex" v-if="userInfo.sex">
                            <img :src="'#'" alt />
                        </div>
                        <div class="personInfo" v-if="userInfo.token">
                            <span>{{ userInfo.user_name }}</span>
                            <span>{{ "电话" }}：{{ userInfo.phoneNumber }}</span>
                        </div>
                    </div>
                    <!-- 未登录状态 -->
                    <div class="personMsg" v-if="!userInfo.token">
                        <img class="iconImage" :src="userInfo.noLogin_icon" alt />
                        <div class="personInfo" v-if="!userInfo.token">
                            <div>登录</div>
                        </div>
                    </div>
                </template>
            </van-cell>
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
