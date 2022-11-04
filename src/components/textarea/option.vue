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
            caption: "多行文本",
            labelWidth: 90,
            items: [
              {
                type: "textarea",
                label: "默认值",
                prop: "value",
              },
              {
                label: "提示信息",
                prop: "placeholder",
              },
              {
                label: "验证项",
                type: "group-form",
                prop: "verify",
                items: [
                  {
                    label: "验证方式",
                    type: "select",
                    prop: "mode",
                    data: [
                      {
                        label: "无",
                        value: 0
                      },
                      {
                        label: "非空",
                        value: 1
                      },
                      {
                        label: "日期",
                        value: 2
                      },
                      {
                        label: "数字",
                        value: 3
                      },
                      {
                        label: "整数",
                        value: 4
                      },
                      {
                        label: "正则",
                        value: 5
                      },
                    ]
                  },
                  {
                    label: "提示信息",
                    prop: "placeholder"
                  }
                ]
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
