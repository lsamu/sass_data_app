<template>
    <div>
        <el-row>
            <draggable :list="thatData.formData" :group="{ name: 'layout' }">
                <el-col :span="24" v-for="item, index in thatData.formData" :key="index">
                    <component :is="getComponent(item.type)" :option="item"></component>
                </el-col>
            </draggable>
        </el-row>
    </div>
</template>
<script lang="ts" setup>
import merge from "deepmerge";
import Enumerable from "linq";
import draggable from 'vuedraggable'
const props = defineProps(["option", "data", "value"])
const emits = defineEmits({})
const root = getCurrentInstance();
const that = root.proxy;
const thatData = reactive({
    formData: props.value
});

const currentOption = computed(() => {
    const defaultOption = {};
    let oo = merge(defaultOption, props.option || {});
    return oo;
});

function getComponent(type) {
    return "box-uni-" + type
}

const handleChange = (value)=> {
    emits("input", value);
}

onMounted(() => {
    thatData.formData = props.value || currentOption.value["value"] || [];
});

watch(
    () => props.value,
    (n, o) => {
        thatData.formData = n;
    },
    {
        deep: true,
    }
);

        // watch(
        //     () => thatData.formData,
        //     (n, o) => {
        //        handleChange(n)
        //     },
        //     {
        //         deep: true,
        //     }
        // );
</script>
