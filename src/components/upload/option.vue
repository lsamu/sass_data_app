<template>
  <box-form :option="currentOption" v-model="thatData.formData"></box-form>
</template>
<script lang="ts" setup>
import merge from "deepmerge";
const props = defineProps(["option", "data", "value"])
const emits = defineEmits([])
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
            caption: "上传文件",
            labelWidth: 90,
            items: [
              {
                type: "checkbox",
                label: "是否多个"
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
const handleChange = (value) => {
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
