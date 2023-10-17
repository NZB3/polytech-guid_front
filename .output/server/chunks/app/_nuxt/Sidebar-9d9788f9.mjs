import { _ as __nuxt_component_0$1 } from './SearchNavbutton-d03e0cfa.mjs';
import { _ as __nuxt_component_0$2 } from './nuxt-link-afaf4e47.mjs';
import { withCtx, createTextVNode, toDisplayString, useSSRContext, resolveComponent, mergeProps } from 'vue';
import { ssrRenderList, ssrInterpolate, ssrRenderComponent, ssrRenderAttrs, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';

const _sfc_main$1 = {
  data() {
    return {
      campuses: [
        {
          name: "\u0443\u043B. \u0411\u043E\u043B\u044C\u0448\u0430\u044F \u0421\u0435\u043C\u0435\u043D\u043E\u0432\u0441\u043A\u0430\u044F \u0434. 38",
          corpuses: ["\u041A\u043E\u0440\u043F\u0443\u0441 \u0410", "\u041A\u043E\u0440\u043F\u0443\u0441 \u0411", "\u041A\u043E\u0440\u043F\u0443\u0441 \u0412", "\u041A\u043E\u0440\u043F\u0443\u0441 \u041D", "\u041A\u043E\u0440\u043F\u0443\u0441 \u041D\u0414"],
          short_name: "\u0411\u0421",
          short_corpuses: ["\u0410", "\u0411", "\u0412", "\u041D", "\u041D\u0414"]
        },
        {
          name: "\u0443\u043B. \u0410\u0432\u0442\u043E\u0437\u0430\u0432\u043E\u0434\u0441\u043A\u0430\u044F \u0434. 16",
          corpuses: ["\u041A\u043E\u0440\u043F\u0443\u0441 1", "\u041A\u043E\u0440\u043F\u0443\u0441 2", "\u041A\u043E\u0440\u043F\u0443\u0441 3", "\u041A\u043E\u0440\u043F\u0443\u0441 4", "\u041A\u043E\u0440\u043F\u0443\u0441 5"],
          short_name: "\u0410\u0412",
          short_corpuses: ["1", "2", "3", "4", "5"]
        },
        {
          name: "\u0443\u043B. \u041F\u0440\u044F\u043D\u0438\u0448\u043D\u0438\u043A\u043E\u0432\u0430, 2\u0410",
          corpuses: ["\u041A\u043E\u0440\u043F\u0443\u0441 1", "\u041A\u043E\u0440\u043F\u0443\u0441 2"],
          short_name: "\u041F\u0420",
          short_corpuses: ["1", "2"]
        },
        {
          name: "\u0443\u043B. \u041C\u0438\u0445\u0430\u043B\u043A\u043E\u0432\u0441\u043A\u0430\u044F \u0434. 7",
          corpuses: [],
          short_name: "M",
          short_corpuses: []
        },
        {
          name: "\u0443\u043B. \u041F\u0430\u0432\u043B\u0430 \u041A\u043E\u0440\u0447\u0430\u0433\u0438\u043D\u0430 \u0434. 22",
          corpuses: [],
          short_name: "\u041F\u041A",
          short_corpuses: []
        }
      ]
    };
  },
  methods: {
    choose(event) {
      if (this.activeButton != null && this.activeButton !== event.currentTarget && this.activeButton.classList.contains("active")) {
        this.activeButton.classList.toggle("active");
      }
      this.activeButton = event.currentTarget;
      event.currentTarget.classList.toggle("active");
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0$2;
  _push(`<!--[-->`);
  ssrRenderList($data.campuses, (campus) => {
    _push(`<div class="accordion" data-v-c4c87a46><div class="accordion__item" data-v-c4c87a46><button class="accordion__button" data-v-c4c87a46>${ssrInterpolate(campus.name)} &quot;${ssrInterpolate(campus.short_name)}&quot;</button><ul class="accordion__list" data-v-c4c87a46><!--[-->`);
    ssrRenderList(campus.corpuses, (item) => {
      _push(`<li class="accordion__list-item" data-v-c4c87a46>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: { path: "map", query: { campus: campus.short_name, corpus: item.split(" ")[1] } },
        class: "accordion__list-text"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(item)}`);
          } else {
            return [
              createTextVNode(toDisplayString(item), 1)
            ];
          }
        }),
        _: 2
      }, _parent));
      _push(`</li>`);
    });
    _push(`<!--]--></ul></div></div>`);
  });
  _push(`<!--]-->`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Accordion.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-c4c87a46"]]);
const _sfc_main = {
  components: {
    Accordion: __nuxt_component_0,
    SearchNavButton: __nuxt_component_0$1
  },
  data() {
    return {};
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_SearchNavButton = resolveComponent("SearchNavButton");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "sidebar" }, _attrs))} data-v-013869ed>`);
  _push(ssrRenderComponent(_component_SearchNavButton, null, null, _parent));
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/share/Sidebar.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Sidebar = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-013869ed"]]);

export { Sidebar as S, __nuxt_component_0 as _ };
//# sourceMappingURL=Sidebar-9d9788f9.mjs.map
