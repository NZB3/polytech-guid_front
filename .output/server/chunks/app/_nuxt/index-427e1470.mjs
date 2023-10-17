import { S as Sidebar, _ as __nuxt_component_0 } from './Sidebar-9d9788f9.mjs';
import { M as Main } from './Main-9767d4ef.mjs';
import { resolveComponent, mergeProps, withCtx, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
import './SearchNavbutton-d03e0cfa.mjs';
import '../../handlers/renderer.mjs';
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
import './nuxt-link-afaf4e47.mjs';
import 'vue-router';

const _sfc_main = {
  components: {
    Sidebar,
    Main,
    Accordion: __nuxt_component_0
  },
  data() {
    return {
      navCardState: false,
      modalState: false,
      numberOfFloors: 5
    };
  },
  methods: {
    swap() {
      [this.b1, this.b2] = [this.b2, this.b1];
    },
    choose(event) {
      if (this.activeButton != null && this.activeButton !== event.currentTarget && this.activeButton.classList.contains("active")) {
        this.activeButton.classList.toggle("active");
      }
      this.activeButton = event.currentTarget;
      event.currentTarget.classList.toggle("active");
    },
    arrow(event) {
      event.currentTarget.classList.toggle("click");
      this.$emit("toggleCard");
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Sidebar = resolveComponent("Sidebar");
  const _component_Accordion = __nuxt_component_0;
  const _component_Main = resolveComponent("Main");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))} data-v-98a14857>`);
  _push(ssrRenderComponent(_component_Sidebar, { class: "sidebar" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Accordion, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_Accordion)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_Main, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="content" data-v-98a14857${_scopeId}><p class="content__title" data-v-98a14857${_scopeId}>\u041F\u0440\u0438\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u043C \u0442\u0435\u0431\u044F!</p><p class="content__text" data-v-98a14857${_scopeId}>\u042D\u0442\u043E \u0441\u0430\u0439\u0442-\u043F\u043E\u043C\u043E\u0449\u043D\u0438\u043A \u0432 \u043D\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u0438 <br data-v-98a14857${_scopeId}> \u043F\u043E \u041C\u043E\u0441\u043A\u043E\u0432\u0441\u043A\u043E\u043C\u0443 \u041F\u043E\u043B\u0438\u0442\u0435\u0445\u0443 </p><p class="content__text" data-v-98a14857${_scopeId}>\u0422\u0443\u0442 \u0442\u044B \u043D\u0430\u0439\u0434\u0435\u0448\u044C \u0434\u043E\u0440\u043E\u0433\u0443 \u043A \u043B\u044E\u0431\u043E\u043C\u0443 \u043C\u0435\u0441\u0442\u0443 <br data-v-98a14857${_scopeId}> \u0432 \u0443\u043D\u0438\u0432\u0435\u0440\u0441\u0438\u0442\u0435\u0442\u0435</p><p class="content__text" data-v-98a14857${_scopeId}>\u0427\u0442\u043E\u0431\u044B \u043E\u0442\u043A\u0440\u044B\u0442\u044C \u043A\u0430\u0440\u0442\u0443 \u043A\u0430\u043C\u043F\u0443\u0441\u0430 \u2014 \u0432\u044B\u0431\u0435\u0440\u0438 <br data-v-98a14857${_scopeId}> \u0435\u0433\u043E \u0430\u0434\u0440\u0435\u0441 \u0441\u043B\u0435\u0432\u0430 \u0438\u043B\u0438 \u0432\u0432\u0435\u0434\u0438 <br data-v-98a14857${_scopeId}> \u043D\u043E\u043C\u0435\u0440 \u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u0438 \u0432 \u0441\u0442\u0440\u043E\u043A\u0435 \u043F\u043E\u0438\u0441\u043A\u0430</p><p class="content__text" data-v-98a14857${_scopeId}>\u041C\u044B, \u043A\u043E\u043C\u0430\u043D\u0434\u0430 \u0441\u0442\u0443\u0434\u0435\u043D\u0442\u043E\u0432, \u043F\u043E\u0441\u0442\u0430\u0440\u0430\u0435\u043C\u0441\u044F \u043F\u043E\u043C\u043E\u0447\u044C \u0442\u0435\u0431\u0435 <br data-v-98a14857${_scopeId}> \u043D\u0435 \u043F\u043E\u0442\u0435\u0440\u044F\u0442\u044C\u0441\u044F!</p></div>`);
      } else {
        return [
          createVNode("div", { class: "content" }, [
            createVNode("p", { class: "content__title" }, "\u041F\u0440\u0438\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u043C \u0442\u0435\u0431\u044F!"),
            createVNode("p", { class: "content__text" }, [
              createTextVNode("\u042D\u0442\u043E \u0441\u0430\u0439\u0442-\u043F\u043E\u043C\u043E\u0449\u043D\u0438\u043A \u0432 \u043D\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u0438 "),
              createVNode("br"),
              createTextVNode(" \u043F\u043E \u041C\u043E\u0441\u043A\u043E\u0432\u0441\u043A\u043E\u043C\u0443 \u041F\u043E\u043B\u0438\u0442\u0435\u0445\u0443 ")
            ]),
            createVNode("p", { class: "content__text" }, [
              createTextVNode("\u0422\u0443\u0442 \u0442\u044B \u043D\u0430\u0439\u0434\u0435\u0448\u044C \u0434\u043E\u0440\u043E\u0433\u0443 \u043A \u043B\u044E\u0431\u043E\u043C\u0443 \u043C\u0435\u0441\u0442\u0443 "),
              createVNode("br"),
              createTextVNode(" \u0432 \u0443\u043D\u0438\u0432\u0435\u0440\u0441\u0438\u0442\u0435\u0442\u0435")
            ]),
            createVNode("p", { class: "content__text" }, [
              createTextVNode("\u0427\u0442\u043E\u0431\u044B \u043E\u0442\u043A\u0440\u044B\u0442\u044C \u043A\u0430\u0440\u0442\u0443 \u043A\u0430\u043C\u043F\u0443\u0441\u0430 \u2014 \u0432\u044B\u0431\u0435\u0440\u0438 "),
              createVNode("br"),
              createTextVNode(" \u0435\u0433\u043E \u0430\u0434\u0440\u0435\u0441 \u0441\u043B\u0435\u0432\u0430 \u0438\u043B\u0438 \u0432\u0432\u0435\u0434\u0438 "),
              createVNode("br"),
              createTextVNode(" \u043D\u043E\u043C\u0435\u0440 \u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u0438 \u0432 \u0441\u0442\u0440\u043E\u043A\u0435 \u043F\u043E\u0438\u0441\u043A\u0430")
            ]),
            createVNode("p", { class: "content__text" }, [
              createTextVNode("\u041C\u044B, \u043A\u043E\u043C\u0430\u043D\u0434\u0430 \u0441\u0442\u0443\u0434\u0435\u043D\u0442\u043E\u0432, \u043F\u043E\u0441\u0442\u0430\u0440\u0430\u0435\u043C\u0441\u044F \u043F\u043E\u043C\u043E\u0447\u044C \u0442\u0435\u0431\u0435 "),
              createVNode("br"),
              createTextVNode(" \u043D\u0435 \u043F\u043E\u0442\u0435\u0440\u044F\u0442\u044C\u0441\u044F!")
            ])
          ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-98a14857"]]);

export { index as default };
//# sourceMappingURL=index-427e1470.mjs.map
