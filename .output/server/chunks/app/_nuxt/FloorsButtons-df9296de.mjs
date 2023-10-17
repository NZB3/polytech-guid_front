import { resolveComponent, withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderList, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';

const _sfc_main = {
  props: {
    numberOfFloors: Number
  },
  data() {
    return {
      activeFloor: 1
    };
  },
  mounted() {
    this.$refs[`button${this.activeFloor}`][0].classList.toggle("btn_active");
  },
  methods: {},
  watch: {
    activeFloor(newVal, oldVal) {
      this.$refs[`button${oldVal}`][0].classList.toggle("btn_active");
      this.$refs[`button${newVal}`][0].classList.toggle("btn_active");
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Button = resolveComponent("Button");
  _push(`<!--[-->`);
  ssrRenderList($props.numberOfFloors, (n) => {
    _push(ssrRenderComponent(_component_Button, {
      class: "btn",
      ref_for: true,
      ref: "button" + n,
      key: n,
      onClick: ($event) => {
        _ctx.$emit("change", { update: n });
        $data.activeFloor = n;
      }
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<p class="number" data-v-58fc8f41${_scopeId}>${ssrInterpolate(n)}</p>`);
        } else {
          return [
            createVNode("p", { class: "number" }, toDisplayString(n), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
  });
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FloorsButtons.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-58fc8f41"]]);

export { __nuxt_component_2 as _ };
//# sourceMappingURL=FloorsButtons-df9296de.mjs.map
