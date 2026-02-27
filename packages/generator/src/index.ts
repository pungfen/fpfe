import { defineComponent, h } from "vue";

export const Generator = defineComponent(() => () => h("div", "Hello Generator"), {
  name: "Generator",
  props: {},
});