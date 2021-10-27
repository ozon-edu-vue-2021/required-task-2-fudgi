<template>
  <div class="file">{{ name }}</div>
</template>

<script>
export default {
  name: "File",
  props: {
    name: {
      type: String,
      default: () => "",
    },
  },
};
</script>

<style scoped>
</style>