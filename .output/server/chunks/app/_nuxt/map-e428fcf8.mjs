import { _ as __nuxt_component_1, a as __nuxt_component_0 } from './Map-727bdbf0.mjs';
import { _ as __nuxt_component_2 } from './FloorsButtons-df9296de.mjs';
import { S as Sidebar } from './Sidebar-9d9788f9.mjs';
import { resolveComponent, mergeProps, withCtx, openBlock, createBlock, createVNode, withDirectives, vModelText, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
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
import './aud_info-52558608.mjs';
import './map-d87048c1.mjs';
import './SearchNavbutton-d03e0cfa.mjs';
import './nuxt-link-afaf4e47.mjs';
import 'vue-router';

const _sfc_main = {
  data() {
    return {
      MapisAudSelected: false,
      selectedAudNumber: ""
    };
  },
  components: { Sidebar, FloorsButtons: __nuxt_component_2, Map: __nuxt_component_1 },
  methods: {
    handleAudInfoChanged({ isAudSelected, selectedAudNumber }) {
      this.MapisAudSelected = isAudSelected;
      this.selectedAudNumber = selectedAudNumber;
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Sidebar = resolveComponent("Sidebar");
  const _component_AudInfo = __nuxt_component_0;
  const _component_Main = resolveComponent("Main");
  const _component_Map = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))} data-v-96397c88>`);
  _push(ssrRenderComponent(_component_Sidebar, { class: "sidebar" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        if (!_ctx.isAudSelected) {
          _push2(`<div class="nav-card" data-v-96397c88${_scopeId}><div class="rout" data-v-96397c88${_scopeId}><div class="inputs" data-v-96397c88${_scopeId}><input class="input" type="text" placeholder="\u041E\u0442\u043A\u0443\u0434\u0430"${ssrRenderAttr("value", _ctx.b1)} data-v-96397c88${_scopeId}><input class="input" type="text" placeholder="\u041A\u0443\u0434\u0430"${ssrRenderAttr("value", _ctx.b2)} data-v-96397c88${_scopeId}></div><svg class="swap" width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-96397c88${_scopeId}><path d="M32.2071 13.0401C32.5976 12.6496 32.5976 12.0164 32.2071 11.6259L25.8431 5.26194C25.4526 4.87142 24.8194 4.87142 24.4289 5.26194C24.0384 5.65246 24.0384 6.28563 24.4289 6.67615L30.0858 12.333L24.4289 17.9899C24.0384 18.3804 24.0384 19.0136 24.4289 19.4041C24.8194 19.7946 25.4526 19.7946 25.8431 19.4041L32.2071 13.0401ZM6.5 13.333H31.5V11.333H6.5V13.333Z" fill="white" data-v-96397c88${_scopeId}></path><path d="M5.7929 24.9589C5.40238 25.3494 5.40238 25.9826 5.7929 26.3731L12.1569 32.7371C12.5474 33.1276 13.1806 33.1276 13.5711 32.7371C13.9616 32.3466 13.9616 31.7134 13.5711 31.3229L7.91422 25.666L13.5711 20.0092C13.9616 19.6186 13.9616 18.9855 13.5711 18.5949C13.1806 18.2044 12.5474 18.2044 12.1569 18.5949L5.7929 24.9589ZM31.5 24.666L6.50001 24.666V26.666L31.5 26.666V24.666Z" fill="white" data-v-96397c88${_scopeId}></path></svg></div></div>`);
        } else {
          _push2(`<!---->`);
        }
        if (!_ctx.isAudSelected) {
          _push2(`<div class="buttons" data-v-96397c88${_scopeId}><button class="button button--blue" style="${ssrRenderStyle({ "width": "109px" })}" data-v-96397c88${_scopeId}> \u0422\u0443\u0430\u043B\u0435\u0442 \u041C </button><button class="button button--blue" style="${ssrRenderStyle({ "width": "109px" })}" data-v-96397c88${_scopeId}> \u0422\u0443\u0430\u043B\u0435\u0442 \u0416 </button><button class="button button--orange" style="${ssrRenderStyle({ "width": "82px" })}" data-v-96397c88${_scopeId}> \u0411\u0443\u0444\u0435\u0442 </button><button class="button button--purple" style="${ssrRenderStyle({ "width": "128px" })}" data-v-96397c88${_scopeId}> \u041A\u043E\u0432\u043E\u0440\u043A\u0438\u043D\u0433 </button><button class="button button--lightred" style="${ssrRenderStyle({ "width": "182px" })}" data-v-96397c88${_scopeId}> \u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u0438 </button><button class="button button--blue" style="${ssrRenderStyle({ "width": "182px" })}" data-v-96397c88${_scopeId}> \u0411\u0438\u0431\u043B\u0438\u043E\u0442\u0435\u043A\u0430 </button><button class="button button--green" style="${ssrRenderStyle({ "width": "128px" })}" data-v-96397c88${_scopeId}> \u0412\u044B\u0445\u043E\u0434 </button></div>`);
        } else {
          _push2(`<!---->`);
        }
        if ($data.MapisAudSelected) {
          _push2(ssrRenderComponent(_component_AudInfo, { audNumber: $data.selectedAudNumber }, null, _parent2, _scopeId));
        } else {
          _push2(`<!---->`);
        }
      } else {
        return [
          !_ctx.isAudSelected ? (openBlock(), createBlock("div", {
            key: 0,
            class: "nav-card"
          }, [
            createVNode("div", { class: "rout" }, [
              createVNode("div", { class: "inputs" }, [
                withDirectives(createVNode("input", {
                  class: "input",
                  type: "text",
                  placeholder: "\u041E\u0442\u043A\u0443\u0434\u0430",
                  "onUpdate:modelValue": ($event) => _ctx.b1 = $event
                }, null, 8, ["onUpdate:modelValue"]), [
                  [vModelText, _ctx.b1]
                ]),
                withDirectives(createVNode("input", {
                  class: "input",
                  type: "text",
                  placeholder: "\u041A\u0443\u0434\u0430",
                  "onUpdate:modelValue": ($event) => _ctx.b2 = $event
                }, null, 8, ["onUpdate:modelValue"]), [
                  [vModelText, _ctx.b2]
                ])
              ]),
              (openBlock(), createBlock("svg", {
                onClick: _ctx.swap,
                class: "swap",
                width: "38",
                height: "38",
                viewBox: "0 0 38 38",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
              }, [
                createVNode("path", {
                  d: "M32.2071 13.0401C32.5976 12.6496 32.5976 12.0164 32.2071 11.6259L25.8431 5.26194C25.4526 4.87142 24.8194 4.87142 24.4289 5.26194C24.0384 5.65246 24.0384 6.28563 24.4289 6.67615L30.0858 12.333L24.4289 17.9899C24.0384 18.3804 24.0384 19.0136 24.4289 19.4041C24.8194 19.7946 25.4526 19.7946 25.8431 19.4041L32.2071 13.0401ZM6.5 13.333H31.5V11.333H6.5V13.333Z",
                  fill: "white"
                }),
                createVNode("path", {
                  d: "M5.7929 24.9589C5.40238 25.3494 5.40238 25.9826 5.7929 26.3731L12.1569 32.7371C12.5474 33.1276 13.1806 33.1276 13.5711 32.7371C13.9616 32.3466 13.9616 31.7134 13.5711 31.3229L7.91422 25.666L13.5711 20.0092C13.9616 19.6186 13.9616 18.9855 13.5711 18.5949C13.1806 18.2044 12.5474 18.2044 12.1569 18.5949L5.7929 24.9589ZM31.5 24.666L6.50001 24.666V26.666L31.5 26.666V24.666Z",
                  fill: "white"
                })
              ], 8, ["onClick"]))
            ])
          ])) : createCommentVNode("", true),
          !_ctx.isAudSelected ? (openBlock(), createBlock("div", {
            key: 1,
            class: "buttons"
          }, [
            createVNode("button", {
              ref: "male",
              class: "button button--blue",
              onClick: _ctx.choose,
              style: { "width": "109px" }
            }, " \u0422\u0443\u0430\u043B\u0435\u0442 \u041C ", 8, ["onClick"]),
            createVNode("button", {
              ref: "female",
              class: "button button--blue",
              onClick: _ctx.choose,
              style: { "width": "109px" }
            }, " \u0422\u0443\u0430\u043B\u0435\u0442 \u0416 ", 8, ["onClick"]),
            createVNode("button", {
              ref: "bufet",
              class: "button button--orange",
              onClick: _ctx.choose,
              style: { "width": "82px" }
            }, " \u0411\u0443\u0444\u0435\u0442 ", 8, ["onClick"]),
            createVNode("button", {
              ref: "coworking",
              class: "button button--purple",
              onClick: _ctx.choose,
              style: { "width": "128px" }
            }, " \u041A\u043E\u0432\u043E\u0440\u043A\u0438\u043D\u0433 ", 8, ["onClick"]),
            createVNode("button", {
              ref: "aud",
              class: "button button--lightred",
              onClick: _ctx.choose,
              style: { "width": "182px" }
            }, " \u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u0438 ", 8, ["onClick"]),
            createVNode("button", {
              ref: "bibl",
              class: "button button--blue",
              onClick: _ctx.choose,
              style: { "width": "182px" }
            }, " \u0411\u0438\u0431\u043B\u0438\u043E\u0442\u0435\u043A\u0430 ", 8, ["onClick"]),
            createVNode("button", {
              ref: "exit",
              class: "button button--green",
              onClick: _ctx.choose,
              style: { "width": "128px" }
            }, " \u0412\u044B\u0445\u043E\u0434 ", 8, ["onClick"])
          ])) : createCommentVNode("", true),
          $data.MapisAudSelected ? (openBlock(), createBlock(_component_AudInfo, {
            key: 2,
            audNumber: $data.selectedAudNumber
          }, null, 8, ["audNumber"])) : createCommentVNode("", true)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_Main, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Map, { onAudInfoChanged: $options.handleAudInfoChanged }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_Map, { onAudInfoChanged: $options.handleAudInfoChanged }, null, 8, ["onAudInfoChanged"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/map.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const map = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-96397c88"]]);

export { map as default };
//# sourceMappingURL=map-e428fcf8.mjs.map
