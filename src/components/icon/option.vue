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
            caption: "图标",
            labelWidth: 90,
            items: [
              {
                type: "input-number",
                label: "大小",
                prop: "size",
                value: 23
              },
              {
                label: "类型",
                type: "button-dialog",
                prop: "name"
              },
              {
                label: "颜色",
                type: "input-color",
                prop: "color"
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
