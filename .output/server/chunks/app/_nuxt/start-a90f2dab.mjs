import { a as __nuxt_component_0, _ as __nuxt_component_1 } from './Map-727bdbf0.mjs';
import { S as Sidebar } from './Sidebar-9d9788f9.mjs';
import { resolveComponent, mergeProps, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
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
import './FloorsButtons-df9296de.mjs';
import './map-d87048c1.mjs';
import './SearchNavbutton-d03e0cfa.mjs';
import './nuxt-link-afaf4e47.mjs';
import 'vue-router';

const _sfc_main = {
  components: { Sidebar },
  data() {
    return {
      scale: 1,
      zoomingSpeed: 0.05,
      numberOfFloors: 5
    };
  },
  methods: {
    scroll(event) {
      if (event.deltaY > 0) {
        if (this.$refs.map.style.transform !== "scale(0.5)") {
          this.$refs.map.style.transform = `scale(${this.scale -= this.zoomingSpeed})`;
        }
      } else {
        if (this.$refs.map.style.transform !== "scale(1.5)") {
          this.$refs.map.style.transform = `scale(${this.scale += this.zoomingSpeed})`;
        }
      }
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Sidebar = resolveComponent("Sidebar");
  const _component_AudInfo = __nuxt_component_0;
  const _component_Main = resolveComponent("Main");
  const _component_Map = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))} data-v-2a461ccf>`);
  _push(ssrRenderComponent(_component_Sidebar, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_AudInfo, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_AudInfo)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_Main, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Map, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_Map)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/start.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const start = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-2a461ccf"]]);

export { start as default };
//# sourceMappingURL=start-a90f2dab.mjs.map
