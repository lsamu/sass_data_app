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
            caption: "底部导航",
            labelWidth: 90,
            items: [
              {
                type: "group-form",
                label: "菜单项",
                prop: "value",
                items: [
                  {
                    label: "菜单名称",
                    prop: "title",
                  },
                  {
                    label: "是否选中",
                    prop: "checked",
                    type: "checkbox",
                  },
                  {
                    label: "默认图标",
                    prop: "defaultIcon",
                    type: "button-dialog",
                  },
                  {
                    label: "选中图标",
                    prop: "checkedIcon",
                    type: "button-dialog",
                  },
                  {
                    label: "菜单链接",
                    prop: "link",
                    type: "select",
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
                    prop: "defaultIcon",
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
