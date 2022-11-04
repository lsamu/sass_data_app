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
            caption: "按钮",
            labelWidth: 90,
            items: [
              {
                label: "类型",
                prop: "type",
                type: "select",
                value: "primary",
                data: [
                  {
                    label: "默认",
                    value: "default",
                  },
                  {
                    label: "主要",
                    value: "primary",
                  },
                  {
                    label: "信息",
                    value: "info",
                  },
                  {
                    label: "警告",
                    value: "warning",
                  },
                  {
                    label: "危险",
                    value: "danger",
                  },
                ],
              },
              {
                label: "文字",
                prop: "value",
                value: "按钮"
              },
              {
                label: "对齐",
                type: "radio",
                prop: "align",
                style: "button",
                value: "left",
                data: [
                  {
                    label: "左对齐",
                    value: "left",
                  },
                  {
                    label: "居中对齐",
                    value: "center",
                  },
                  {
                    label: "右对齐",
                    value: "right",
                  },
                ],
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
