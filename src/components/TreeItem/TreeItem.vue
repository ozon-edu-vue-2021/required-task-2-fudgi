<script>
export default {
  inject: ["getLeaf"],
  props: {
    leaf: {
      type: String,
      default: () => "",
    },
  },
  computed: {
    treeItemClasses() {
      return [
        "item",
        {
          item_selected: this.getLeaf() === this.leaf,
        },
      ];
    },
  },
};
</script>


