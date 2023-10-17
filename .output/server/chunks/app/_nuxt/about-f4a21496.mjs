import { b as buildAssetsURL } from '../../handlers/renderer.mjs';
import { S as Sidebar } from './Sidebar-9d9788f9.mjs';
import { M as Main } from './Main-9767d4ef.mjs';
import { resolveComponent, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
import 'vue-bundle-renderer/runtime';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'node:zlib';
import 'node:stream';
import 'node:buffer';
import 'node:util';
import 'node:url';
import 'node:net';
import 'node:fs';
import 'node:path';
import 'fs';
import 'path';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import './SearchNavbutton-d03e0cfa.mjs';
import './nuxt-link-afaf4e47.mjs';
import 'vue-router';

const _imports_0 = "" + buildAssetsURL("polytech1.bcef614d.png");
const _imports_1 = "" + buildAssetsURL("polytech2.5ae8f1a8.png");
const _sfc_main = {
  components: {
    Sidebar,
    Main
  },
  data() {
    return {};
  },
  methods: {
    goToPrev() {
      this.$router.go(-1);
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Sidebar = resolveComponent("Sidebar");
  const _component_Main = resolveComponent("Main");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Sidebar, null, null, _parent));
  _push(ssrRenderComponent(_component_Main, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="about" data-v-72fb0ea2${_scopeId}><h1 class="about__heading" data-v-72fb0ea2${_scopeId}>\u0414\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F</h1><div class="about__small-section" data-v-72fb0ea2${_scopeId}><div class="about__text-block" data-v-72fb0ea2${_scopeId}><h2 class="about__title" data-v-72fb0ea2${_scopeId}>\u041A\u0430\u0440\u0442\u0430 \u043A\u043E\u0440\u043F\u0443\u0441\u043E\u0432 \u041C\u043E\u0441\u043A\u043E\u0432\u0441\u043A\u043E\u0433\u043E \u043F\u043E\u043B\u0438\u0442\u0435\u0445\u0430</h2><p class="about__text" data-v-72fb0ea2${_scopeId}>\u0414\u043E\u0431\u0440\u043E \u043F\u043E\u0436\u0430\u043B\u043E\u0432\u0430\u0442\u044C \u043D\u0430 \u0441\u0430\u0439\u0442-\u043F\u0443\u0442\u0435\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C \u043F\u043E \u043A\u043E\u0440\u043F\u0443\u0441\u0430\u043C \u041C\u043E\u0441\u043A\u043E\u0432\u0441\u043A\u043E\u0433\u043E \u043F\u043E\u043B\u0438\u0442\u0435\u0445\u0430!</p><p class="about__text" data-v-72fb0ea2${_scopeId}>\u0422\u0435\u043F\u0435\u0440\u044C \u0432\u044B \u0442\u043E\u0447\u043D\u043E \u043D\u0435 \u0437\u0430\u0431\u043B\u0443\u0434\u0438\u0442\u0435\u0441\u044C \u0432 \u043A\u043E\u0440\u043F\u0443\u0441\u0435\u{1F973}</p></div><img${ssrRenderAttr("src", _imports_0)} alt="" class="about__image" data-v-72fb0ea2${_scopeId}></div><div class="about__big-section" data-v-72fb0ea2${_scopeId}><div class="about__text-block" data-v-72fb0ea2${_scopeId}><h3 class="about__subheading" data-v-72fb0ea2${_scopeId}>\u041E \u0441\u0430\u0439\u0442\u0435</h3><p class="about__text about__big-text" data-v-72fb0ea2${_scopeId}> \u0417\u0434\u0435\u0441\u044C \u0432\u044B \u043D\u0430\u0439\u0434\u0435\u0442\u0435 \u043F\u043E\u043B\u0435\u0437\u043D\u0443\u044E \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044E \u043E \u043A\u043E\u0440\u043F\u0443\u0441\u0430\u0445 \u0443\u043D\u0438\u0432\u0435\u0440\u0441\u0438\u0442\u0435\u0442\u0430 \u0438 \u0440\u0430\u0441\u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0438 \u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u0439. \u041C\u044B \u043D\u0430\u0434\u0435\u0435\u043C\u0441\u044F, \u0447\u0442\u043E \u044D\u0442\u043E\u0442 \u0441\u0430\u0439\u0442 \u043F\u043E\u043C\u043E\u0436\u0435\u0442 \u0432\u0430\u043C \u0431\u044B\u0441\u0442\u0440\u043E \u0438 \u043B\u0435\u0433\u043A\u043E \u043E\u0440\u0438\u0435\u043D\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F \u043D\u0430 \u0442\u0435\u0440\u0440\u0438\u0442\u043E\u0440\u0438\u0438 \u0438 \u0441\u0434\u0435\u043B\u0430\u0435\u0442 \u0432\u0430\u0448\u0443 \u0436\u0438\u0437\u043D\u044C \u0432 \u043D\u0435\u043C \u0431\u043E\u043B\u0435\u0435 \u043A\u043E\u043C\u0444\u043E\u0440\u0442\u043D\u043E\u0439.</p><p class="about__text about__big-text" data-v-72fb0ea2${_scopeId}>\u041D\u0435 \u0437\u0430\u0431\u0443\u0434\u044C\u0442\u0435 \u043F\u043E\u0441\u043E\u0432\u0435\u0442\u043E\u0432\u0430\u0442\u044C \u043D\u0430\u0448 \u0441\u0430\u0439\u0442 \u043E\u0434\u043D\u043E\u0433\u0440\u0443\u043F\u043F\u043D\u0438\u043A\u0430\u043C, \u0442\u0430\u043A \u0432\u044B \u043D\u0435 \u0442\u043E\u043B\u044C\u043A\u043E \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0442\u0435 \u043D\u0430\u0448\u0443 \u0440\u0430\u0431\u043E\u0442\u0443, \u043D\u043E \u0438 \u043E\u0431\u043B\u0435\u0433\u0447\u0438\u0442\u0435 \u0436\u0438\u0437\u043D\u044C \u0441\u0432\u043E\u0438\u043C \u0434\u0440\u0443\u0437\u044C\u044F\u043C!</p><p class="about__text about__big-text" data-v-72fb0ea2${_scopeId}> \u0416\u0435\u043B\u0430\u0435\u043C \u0432\u0430\u043C \u043F\u0440\u0438\u044F\u0442\u043D\u043E\u0433\u043E \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u044F\u{1F48C}</p></div><img${ssrRenderAttr("src", _imports_1)} alt="" class="about__image" data-v-72fb0ea2${_scopeId}></div></div>`);
      } else {
        return [
          createVNode("div", { class: "about" }, [
            createVNode("h1", { class: "about__heading" }, "\u0414\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F"),
            createVNode("div", { class: "about__small-section" }, [
              createVNode("div", { class: "about__text-block" }, [
                createVNode("h2", { class: "about__title" }, "\u041A\u0430\u0440\u0442\u0430 \u043A\u043E\u0440\u043F\u0443\u0441\u043E\u0432 \u041C\u043E\u0441\u043A\u043E\u0432\u0441\u043A\u043E\u0433\u043E \u043F\u043E\u043B\u0438\u0442\u0435\u0445\u0430"),
                createVNode("p", { class: "about__text" }, "\u0414\u043E\u0431\u0440\u043E \u043F\u043E\u0436\u0430\u043B\u043E\u0432\u0430\u0442\u044C \u043D\u0430 \u0441\u0430\u0439\u0442-\u043F\u0443\u0442\u0435\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C \u043F\u043E \u043A\u043E\u0440\u043F\u0443\u0441\u0430\u043C \u041C\u043E\u0441\u043A\u043E\u0432\u0441\u043A\u043E\u0433\u043E \u043F\u043E\u043B\u0438\u0442\u0435\u0445\u0430!"),
                createVNode("p", { class: "about__text" }, "\u0422\u0435\u043F\u0435\u0440\u044C \u0432\u044B \u0442\u043E\u0447\u043D\u043E \u043D\u0435 \u0437\u0430\u0431\u043B\u0443\u0434\u0438\u0442\u0435\u0441\u044C \u0432 \u043A\u043E\u0440\u043F\u0443\u0441\u0435\u{1F973}")
              ]),
              createVNode("img", {
                src: _imports_0,
                alt: "",
                class: "about__image"
              })
            ]),
            createVNode("div", { class: "about__big-section" }, [
              createVNode("div", { class: "about__text-block" }, [
                createVNode("h3", { class: "about__subheading" }, "\u041E \u0441\u0430\u0439\u0442\u0435"),
                createVNode("p", { class: "about__text about__big-text" }, " \u0417\u0434\u0435\u0441\u044C \u0432\u044B \u043D\u0430\u0439\u0434\u0435\u0442\u0435 \u043F\u043E\u043B\u0435\u0437\u043D\u0443\u044E \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044E \u043E \u043A\u043E\u0440\u043F\u0443\u0441\u0430\u0445 \u0443\u043D\u0438\u0432\u0435\u0440\u0441\u0438\u0442\u0435\u0442\u0430 \u0438 \u0440\u0430\u0441\u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0438 \u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u0439. \u041C\u044B \u043D\u0430\u0434\u0435\u0435\u043C\u0441\u044F, \u0447\u0442\u043E \u044D\u0442\u043E\u0442 \u0441\u0430\u0439\u0442 \u043F\u043E\u043C\u043E\u0436\u0435\u0442 \u0432\u0430\u043C \u0431\u044B\u0441\u0442\u0440\u043E \u0438 \u043B\u0435\u0433\u043A\u043E \u043E\u0440\u0438\u0435\u043D\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F \u043D\u0430 \u0442\u0435\u0440\u0440\u0438\u0442\u043E\u0440\u0438\u0438 \u0438 \u0441\u0434\u0435\u043B\u0430\u0435\u0442 \u0432\u0430\u0448\u0443 \u0436\u0438\u0437\u043D\u044C \u0432 \u043D\u0435\u043C \u0431\u043E\u043B\u0435\u0435 \u043A\u043E\u043C\u0444\u043E\u0440\u0442\u043D\u043E\u0439."),
                createVNode("p", { class: "about__text about__big-text" }, "\u041D\u0435 \u0437\u0430\u0431\u0443\u0434\u044C\u0442\u0435 \u043F\u043E\u0441\u043E\u0432\u0435\u0442\u043E\u0432\u0430\u0442\u044C \u043D\u0430\u0448 \u0441\u0430\u0439\u0442 \u043E\u0434\u043D\u043E\u0433\u0440\u0443\u043F\u043F\u043D\u0438\u043A\u0430\u043C, \u0442\u0430\u043A \u0432\u044B \u043D\u0435 \u0442\u043E\u043B\u044C\u043A\u043E \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0442\u0435 \u043D\u0430\u0448\u0443 \u0440\u0430\u0431\u043E\u0442\u0443, \u043D\u043E \u0438 \u043E\u0431\u043B\u0435\u0433\u0447\u0438\u0442\u0435 \u0436\u0438\u0437\u043D\u044C \u0441\u0432\u043E\u0438\u043C \u0434\u0440\u0443\u0437\u044C\u044F\u043C!"),
                createVNode("p", { class: "about__text about__big-text" }, " \u0416\u0435\u043B\u0430\u0435\u043C \u0432\u0430\u043C \u043F\u0440\u0438\u044F\u0442\u043D\u043E\u0433\u043E \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u044F\u{1F48C}")
              ]),
              createVNode("img", {
                src: _imports_1,
                alt: "",
                class: "about__image"
              })
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const about = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-72fb0ea2"]]);

export { about as default };
//# sourceMappingURL=about-f4a21496.mjs.map
