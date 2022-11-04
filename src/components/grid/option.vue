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
  formData: {},
});

const currentOption = computed(() => {
  let oo = {
    items: [
      {
        type: "group",
        items: [
          {
            caption: "九宫格",
            labelWidth: 90,
            items: [
              {
                label: "宫格类型",
                type: "select",
                prop: "column-num",
                value: 3,
                data: [
                  {
                    label: "三宫格",
                    value: 3,
                  },
                  {
                    label: "四宫格",
                    value: 4,
                  },
                  {
                    label: "五宫格",
                    value: 5,
                  },
                ],
              },
              {
                type: "group-form",
                label: "宫格菜单",
                prop: "value",
                items: [
                  {
                    label: "菜单名称",
                    prop: "title",
                  },
                  {
                    label: "菜单图标",
                    prop: "icon",
                    type: "button-dialog",
                  },
                  {
                    label: "菜单链接",
                    prop: "link_type",
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
                    prop: "link_url",
                  },
                  {
                    label: "字体颜色",
                    prop: "text_color",
                    type: "input-color",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  };
  return oo;
});

const handleChange = (value)=> {
  emits("input", value);
}

onMounted(() => {
  thatData.formData = merge(thatData.formData, props.value || currentOption.value["value"] || {});
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
