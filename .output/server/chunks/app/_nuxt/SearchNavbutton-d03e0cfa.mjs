import { b as buildAssetsURL } from '../../handlers/renderer.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-afaf4e47.mjs';
import { useSSRContext, mergeProps, withCtx, renderSlot, resolveComponent, createVNode } from 'vue';
import { ssrRenderComponent, ssrRenderSlot, ssrRenderAttrs, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';

const _sfc_main$1 = {
  __name: "Button",
  __ssrInlineRender: true,
  props: {
    link: {
      type: String,
      required: false
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(ssrRenderComponent(_component_NuxtLink, mergeProps({ to: __props.link }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/Button.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Button = _sfc_main$1;
const _imports_0 = "" + buildAssetsURL("home_icon.6f3e3d01.svg");
const _imports_1 = "" + buildAssetsURL("search_icon.651c857f.svg");
const _imports_2 = "" + buildAssetsURL("about_icon.4bfd841c.svg");
const _sfc_main = {
  components: {
    Button
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Button = resolveComponent("Button");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "nav" }, _attrs))} data-v-b9b77181>`);
  _push(ssrRenderComponent(_component_Button, {
    class: "nav__button nav__button_main",
    link: "/"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="home icon" data-v-b9b77181${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_0,
            alt: "home icon"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="nav_search search" data-v-b9b77181><img${ssrRenderAttr("src", _imports_1)} alt="search icon" data-v-b9b77181><input type="text" class="search__field" placeholder="\u041D\u0430\u043F\u0438\u0448\u0438\u0442\u0435 \u043D\u043E\u043C\u0435\u0440 \u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u0438" data-v-b9b77181></div>`);
  _push(ssrRenderComponent(_component_Button, {
    class: "nav__button nav__button_about",
    link: "/about"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_2)} alt="question symbol" data-v-b9b77181${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_2,
            alt: "question symbol"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SearchNavbutton.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-b9b77181"]]);

export { Button as B, __nuxt_component_0 as _ };
//# sourceMappingURL=SearchNavbutton-d03e0cfa.mjs.map
