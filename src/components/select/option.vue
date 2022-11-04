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
            caption: "下拉选择",
            labelWidth: 90,
            items: [
              {
                type: "group-form",
                label: "下拉项",
                prop: "value",
                items: [
                  {
                    label: "文本",
                    prop: "label"
                  },
                  {
                    type: "input-number",
                    label: "值",
                    prop: "value"
                  },
                  {
                    type: "radio",
                    label: "是否选中",
                    prop: "selected"
                  }
                ]
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
