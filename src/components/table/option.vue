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
            caption: "表格",
            labelWidth: 90,
            items: [
              {
                label: "样式风格",
                type: "select",
                prop: "style",
                data: [
                  {
                    label: "默认",
                  },
                ],
              },
              {
                label: "表格列",
                type: "group-form",
                prop: "columns",
                data: [
                  {
                    label: "标题",
                    value: "title"
                  },
                  {
                    label: "类型",
                    value: "type"
                  },
                  {
                    label: "字段名",
                    value: "name"
                  }
                ]
              },
              {
                label: "数据源",
                type: "button-dialog",
                prop: "data"
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
