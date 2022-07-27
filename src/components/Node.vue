<script lang="ts" setup>

defineProps({
  data: {
    type: Object,
    required: true,
  },
  index: {
    type: Number
  }
})

</script>

<template>
  <div class="node">
    <h1>{{ index }}</h1>
    <div class="title">{{ data.name }}</div>
    <div class="content">{{ data.title }}</div>
  </div>
</template>

<style lang="scss">
.node {
  padding: 20px;
  box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
}
</style>
