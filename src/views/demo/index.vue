<template>
    <div>
        index
        {{project.get()}}
    </div>
</template>
<script lang="ts" setup>
const root = getCurrentInstance()
const that = root.proxy
const project = that["$project"] as any;

</script>
