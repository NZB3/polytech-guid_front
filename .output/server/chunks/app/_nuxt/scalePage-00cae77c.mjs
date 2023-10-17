import { r as regions, _ as __nuxt_component_0 } from './map-d87048c1.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
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
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main = {
  data() {
    return {
      regions,
      viewBox: "0 0 1334 1404",
      selectedIds: [],
      selectedAudId: null,
      defaultColor: "#494949",
      secondColor: "#9C9C9F",
      successColor: "#5F6DEC"
    };
  },
  computed: {
    map() {
      let map = this.regions;
      map.forEach((region) => {
        if (this.selectedIds.indexOf(region.id) !== -1) {
          region.fill = this.successColor;
        } else {
          region.fill = this.defaultColor;
        }
      });
      return map;
    },
    selectedRegions() {
      return this.map.filter((region) => this.selectedIds.indexOf(region.id) !== -1);
    }
  },
  methods: {
    findRegionById(id) {
      return this.map.find((x) => x.id === id);
    },
    click(payload) {
      if (this.selectedIds.indexOf(payload.id) === -1) {
        if (payload.id !== void 0) {
          console.log(4312);
          if (this.selectedAudId !== null) {
            this.selectedIds.splice(this.selectedIds.indexOf(this.selectedAudId), 1);
          }
          this.selectedAudId = payload.id;
          this.selectedIds.push(payload.id);
          console.log(this.selectedIds);
        }
      } else {
        this.selectedAudId = null;
        this.selectedIds.splice(this.selectedIds.indexOf(payload.id), 1);
      }
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Scale = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))} data-v-3a3a10c4><div class="layout" data-v-3a3a10c4><div class="layout__map" data-v-3a3a10c4><div class="card" data-v-3a3a10c4>`);
  _push(ssrRenderComponent(_component_Scale, {
    map: $options.map,
    "view-box": $data.viewBox,
    "thin-border-on-zoom": true,
    "wrapper-styles": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%"
    },
    mobilePreventScroll: true,
    onClick: $options.click
  }, null, _parent));
  _push(`</div></div><div class="layout__content" data-v-3a3a10c4><h4 class="small-title" data-v-3a3a10c4> Actions </h4><ul data-v-3a3a10c4><li data-v-3a3a10c4>Click to select region</li><li data-v-3a3a10c4>Scroll mousewheel for zoom</li><li data-v-3a3a10c4>Hold left mouse button to drag map</li></ul>`);
  if ($options.selectedRegions && $options.selectedRegions.length) {
    _push(`<!--[--><h4 class="small-title" data-v-3a3a10c4> \u0412\u044B\u0431\u0440\u0430\u043D\u043D\u044B\u0435 \u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u0438 </h4><!--[-->`);
    ssrRenderList($options.selectedRegions, (region, index) => {
      _push(`<div class="label" data-v-3a3a10c4>${ssrInterpolate(region.title)}</div>`);
    });
    _push(`<!--]--><!--]-->`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/scalePage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const scalePage = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-3a3a10c4"]]);

export { scalePage as default };
//# sourceMappingURL=scalePage-00cae77c.mjs.map
