<script>
export default {
  data() {
    return {
      selected: false,
    };
  },
  methods: {
    handleSelection() {
      this.selected = !this.selected;
    },
  },
  computed: {
    treeItemClasses() {
      return [
        "item",
        {
          item_selected: this.selected,
        },
      ];
    },
  },
};
</script>


