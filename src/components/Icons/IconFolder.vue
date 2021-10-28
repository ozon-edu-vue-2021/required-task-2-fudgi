<template>
  <IconBase>
    <path
      v-if="opened"
      d="M0 10v12h24v-12h-24zm0-2v-6h7c1.695 1.942 2.371 3 4 3h13v3h-2v-1h-11c-2.34 0-3.537-1.388-4.916-3h-4.084v4h-2z"
    />
    <path v-else d="M11 5c-1.629 0-2.305-1.058-4-3h-7v20h24v-17h-13z" />
  </IconBase>
</template>

<script>
import IconBase from "./IconBase.vue";

export default {
  name: "IconFolder",
  components: {
    IconBase,
  },
  props: {
    opened: {
      type: Boolean,
      default: () => false,
    },
  },
};
</script>

<style scoped>
</style>