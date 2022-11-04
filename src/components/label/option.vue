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
            caption: "文本",
            labelWidth: 90,
            items: [
              {
                label: "文本",
                prop: "value"
              },
              {
                label: "颜色",
                type: "input-color",
                prop: "color"
              },
              {
                label: "大小",
                type: "input-number",
                prop: "size"
              },
              {
                label: "菜单链接",
                prop: "link",
                type: "select",
                value: 1,
                data: [
                  {
                    label: "无",
                    value: 1,
                  },
                  {
                    label: "外部链接",
                    value: 2,
                  },
                  {
                    label: "拨打电话",
                    value: 3,
                  },
                  {
                    label: "登录页面",
                    value: 4,
                  },
                  {
                    label: "客服页面",
                    value: 5,
                  },
                ],
              },
              {
                label: "外部链接",
                prop: "link_url",
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
