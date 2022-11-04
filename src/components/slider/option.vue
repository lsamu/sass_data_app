<template>
  <box-form :option="currentOption" v-model="thatData.formData"></box-form>
</template>
<script lang="ts" setup>
import merge from "deepmerge";
import Enumerable from "linq";
const props = defineProps(["option", "data", "value"])
const emits = defineEmits({})
const root = getCurrentInstance();
const that = root.proxy;

const thatData = reactive({
  formData: props.value || {},
});

const currentOption = computed(() => {
  return {
    items: [
      {
        type: "group",
        items: [
          {
            caption: "滑动块",
            labelWidth: 90,
            items: [
              {
                type: "input-number",
                label: "初始数值",
                prop: "value",
                value: 20,
              },
              {
                type: "input-number",
                label: "最小值",
                prop: "min",
                value: 0
              },
              {
                type: "input-number",
                label: "最大值",
                prop: "max",
                value: 100
              },
              {
                type: "input-number",
                label: "步长",
                prop: "step",
                value: 1
              }
            ],
          },
        ],
      },
    ],
  }
});
const handleChange = (value)=> {
  emits("input", value);
}

onMounted(() => {
  thatData.formData = Object.assign(thatData.formData, props.value || currentOption.value["value"] || {});
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
</script>
