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
            caption: "选择框",
            labelWidth: 90,
            items: [
              {
                label: "显示类型",
              },
              {
                label: "字段标题",
              },
              {
                label: "字段名",
              },
              {
                label: "提示信息",
              },
              {
                label: "默认值",
              },
              {
                label: "文本类型",
                data: [
                  {
                    label: "文本",
                  },
                  {
                    label: "密码",
                  },
                  {
                    label: "数字",
                  },
                  {
                    label: "手机",
                  },
                  {
                    label: "日期",
                  },
                  {
                    label: "省份证",
                  },
                ],
              },
              {
                label: "验证",
                columns: [
                  {
                    label: "验证方式",
                  },
                  {
                    label: "提示信息",
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
