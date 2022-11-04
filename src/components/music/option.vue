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
            caption: "音乐",
            labelWidth: 90,
            items: [
              {
                label: "音乐地址",
                prop: "value",
              },
              {
                label: "是否循环",
                type: "checkbox",
                value: 0,
                data: [
                  {
                    label: "是",
                    value: 1
                  }
                ]
              },
              {
                label: "默认播放",
                type: "checkbox",
                value: 0,
                data: [
                  {
                    label: "是",
                    value: 1
                  }
                ]
              },
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
