<template>
  <div>
    <box-form :option="currentOption" v-model="thatData.formData"></box-form>
  </div>
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
  let oo = {
    items: [
      {
        type: "group",
        items: [
          {
            caption: "搜索",
            labelWidth: 90,
            items: [
              {
                label: "关键词",
                prop: "value",
                value: "衣服"
              },
              {
                label: "提示信息",
                prop: "placeholder",
                value: "提示信息"
              },
              {
                label: "跳转链接",
                type: "select",
                prop: "link_url"
              }
            ],
          },
        ],
      },
    ],
  }
  return oo;
})

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
