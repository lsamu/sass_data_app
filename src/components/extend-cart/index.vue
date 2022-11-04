<template>
    <div>
        <van-nav-bar title="购物车" />
        <van-checkbox-group v-model="thatData.checkedGroup" ref="checkboxGroup">
            <van-card :price="item.price" :desc="item.desc" v-for="(item, index) in thatData.shopcard" :key="index">
                <template v-slot:title>
                    <!-- 自定义标题部分，主要是为了添加删除商品按钮 -->
                    <span>{{ item.title }}</span>
                    <span style="float:right;" @click="removeShop(item)">
                        <van-icon name="delete" />
                    </span>
                </template>
                <template v-slot:thumb>
                    <!-- 自定义左侧部分，为了添加左侧checkbox -->
                    <van-checkbox :name="item.title" checked-color="#b90505" icon-size="12px"></van-checkbox>
                    <van-image :src="item.thumb"></van-image>
                </template>
                <template v-slot:bottom>
                    <!-- 自定义底部，为了实现商品数量功能 -->
                    <div class="num">
                        <van-button size="small" @click="minusnum(item)" :disabled="item.num <= 1">-</van-button>
                        <!-- 数量小于1时禁用按钮 -->
                        {{ item.num }}
                        <van-button size="small" @click="addnum(item)">+</van-button>
                    </div>
                </template>
            </van-card>
        </van-checkbox-group>

        <div class="count">
            <van-row style="text-align:center">
                <van-col span="6">
                    <!-- 全选CheckBox部分 -->
                    <van-checkbox @click="checkAll" v-model="isAllChecked" checked-color="#b90505" icon-size="12px">全选
                    </van-checkbox>
                </van-col>
                <van-col span="12" style="font-size:14px">
                    <!-- 总价格部分 -->
                    总计：
                    <span style="font-size:16px;font-weight:700">{{ '￥' + allcount }}</span>
                </van-col>
                <van-col span="6">
                    <!-- 结算按钮 -->
                    <van-button round color="#b90505">结算</van-button>
                </van-col>
            </van-row>
        </div>
        <box-vant-tabbar></box-vant-tabbar>
    </div>
</template>
<script lang="ts" setup>
const props = defineProps(["option", "data", "value"])
const emits = defineEmits([])
const root = getCurrentInstance();
const that = root?.proxy;

const thatData = reactive({
    checkedGroup: [],
    shopcard: [
        {
            num: 1,
            price: 1999,
            title: '商品名商品名商品名商品商品名1',
            desc: '商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述',
            thumb: '图片地址'
        },
        {
            num: 2,
            price: 1999,
            title: '商品名商品名商品名商品商品名2',
            desc: '商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述',
            thumb: '图片地址'
        }
    ] as any
})

const refCheckboxGroup = () => {
    return that?.$refs["checkboxGroup"] as any;
}

// 判断全选状态
const isAllChecked = computed(() => {
    if (thatData.checkedGroup.length === thatData.shopcard.length && thatData.shopcard.length !== 0) { //选中数与商品总数相等并且购物车内存在商品
        return true //表示全选状态
    } else {
        return false //表示未全选
    }
})

const allcount = computed(() => {
    let sumup = 0
    for (let i = 0; i < thatData.shopcard.length; i++) {
        if (thatData.checkedGroup.find(item => { //判断是否选中商品，未选中不计算在内
            return item === thatData.shopcard[i].title
        })) {
            sumup += thatData.shopcard[i].num * thatData.shopcard[i].price
        } else {
            continue
        }
    }
    return sumup

})

const checkAll = () => {
    if (thatData.checkedGroup.length !== 0) { //有商品卡片选中
        if (thatData.checkedGroup.length === thatData.shopcard.length) { //总商品数与选中商品卡片数相等，说明此时已全选
            refCheckboxGroup().toggleAll(false); //令所有选中的反选，即全不选
        } else { //商品卡片数部分选中
            refCheckboxGroup().toggleAll(true); //令所有商品全部选中
        }
    } else { //没有商品卡片选中，直接全选
        refCheckboxGroup().toggleAll(true);
    }
}

const addnum = (item: any) => {
    thatData.shopcard.find((element: any) => {
        return element.title === item.title
    }).num = parseInt(item.num) + 1
}

const minusnum = (item: any) => {
    thatData.shopcard.find((element: any) => {
        return element.title === item.title
    }).num = parseInt(item.num) - 1
}

//methods中，点击删除商品图标按钮时
const removeShop = (item: any) => {
    for (let i = 0; i < thatData.shopcard.length; i++) {
        if (item.title === thatData.shopcard[i].title) {
            let index = thatData.checkedGroup.indexOf(item.title)
            thatData.shopcard.splice(i, 1) //移除商品
            if (index === -1) {
                return
            }
            thatData.checkedGroup.splice(index, 1) //移除checkedGroup中刚刚删除的商品，不然不会即时刷新
        }
    }
}

</script>
