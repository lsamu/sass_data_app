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
            caption: "时间线",
            labelWidth: 90,
            items: [
              {
                label: "风格",
                type: "select",
                prop: "style"
              },
              {
                label: "内容项",
                type: "group-form",
                value: "value",
                items: [
                  {
                    label: "标题",
                    prop: "title"
                  },
                  {
                    label: "内容",
                    type: "textarea",
                    prop: "content"
                  },
                  {
                    label: "时间",
                    type: "date-picker",
                    prop: "time"
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
