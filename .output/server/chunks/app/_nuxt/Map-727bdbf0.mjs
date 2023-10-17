import { b as buildAssetsURL } from '../../handlers/renderer.mjs';
import { i as infoData } from './aud_info-52558608.mjs';
import { useSSRContext, mergeProps, withCtx, createVNode } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
import { _ as __nuxt_component_2 } from './FloorsButtons-df9296de.mjs';
import { r as regions, _ as __nuxt_component_0$1 } from './map-d87048c1.mjs';

const _sfc_main$2 = {
  props: {
    audNumber: String
  },
  data() {
    return {
      item: {
        id: 7,
        campus: "\u0410\u0412",
        corpus: "5",
        floor: "1",
        number: "5105",
        type: "\u041F\u0440\u043E\u0435\u043A\u0442\u043D\u043E\u0435 \u0431\u044E\u0440\u043E",
        desc: "\u041A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440\u043D\u044B\u0439 \u043A\u043B\u0430\u0441\u0441"
      },
      info: []
    };
  },
  mounted() {
    this.info = infoData;
  },
  watch: {
    audNumber(newVal) {
      this.item = this.info.filter((d) => d.number === newVal)[0];
      console.log(this.item);
    }
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "info" }, _attrs))} data-v-1dd171d6><div class="info__item" data-v-1dd171d6><h2 class="info__heading" data-v-1dd171d6>${ssrInterpolate($data.item.campus)} ${ssrInterpolate($data.item.number)}</h2><svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-1dd171d6><rect width="37" height="37" rx="6" fill="#5F6DEC" data-v-1dd171d6></rect><path d="M26.75 30.25C25.9375 30.25 25.2083 30.0154 24.5625 29.5462C23.9167 29.0771 23.4688 28.4783 23.2188 27.75H16.75C15.375 27.75 14.1979 27.2604 13.2188 26.2812C12.2396 25.3021 11.75 24.125 11.75 22.75C11.75 21.375 12.2396 20.1979 13.2188 19.2188C14.1979 18.2396 15.375 17.75 16.75 17.75H19.25C19.9375 17.75 20.5262 17.505 21.0163 17.015C21.5063 16.525 21.7508 15.9367 21.75 15.25C21.75 14.5625 21.505 13.9737 21.015 13.4837C20.525 12.9938 19.9367 12.7492 19.25 12.75H12.7812C12.5104 13.4792 12.0571 14.0783 11.4212 14.5475C10.7854 15.0167 10.0617 15.2508 9.25 15.25C8.20833 15.25 7.32292 14.8854 6.59375 14.1562C5.86458 13.4271 5.5 12.5417 5.5 11.5C5.5 10.4583 5.86458 9.57292 6.59375 8.84375C7.32292 8.11458 8.20833 7.75 9.25 7.75C10.0625 7.75 10.7867 7.98458 11.4225 8.45375C12.0583 8.92292 12.5108 9.52167 12.78 10.25H19.25C20.625 10.25 21.8021 10.7396 22.7812 11.7188C23.7604 12.6979 24.25 13.875 24.25 15.25C24.25 16.625 23.7604 17.8021 22.7812 18.7812C21.8021 19.7604 20.625 20.25 19.25 20.25H16.75C16.0625 20.25 15.4738 20.495 14.9837 20.985C14.4937 21.475 14.2492 22.0633 14.25 22.75C14.25 23.4375 14.495 24.0263 14.985 24.5163C15.475 25.0063 16.0633 25.2508 16.75 25.25H23.2188C23.4896 24.5208 23.9429 23.9217 24.5788 23.4525C25.2146 22.9833 25.9383 22.7492 26.75 22.75C27.7917 22.75 28.6771 23.1146 29.4062 23.8438C30.1354 24.5729 30.5 25.4583 30.5 26.5C30.5 27.5417 30.1354 28.4271 29.4062 29.1562C28.6771 29.8854 27.7917 30.25 26.75 30.25ZM9.25 12.75C9.60417 12.75 9.90125 12.63 10.1412 12.39C10.3812 12.15 10.5008 11.8533 10.5 11.5C10.5 11.1458 10.38 10.8488 10.14 10.6088C9.9 10.3688 9.60333 10.2492 9.25 10.25C8.89583 10.25 8.59875 10.37 8.35875 10.61C8.11875 10.85 7.99917 11.1467 8 11.5C8 11.8542 8.12 12.1512 8.36 12.3912C8.6 12.6312 8.89667 12.7508 9.25 12.75Z" fill="#EAEAEA" data-v-1dd171d6></path></svg></div>`);
  if ($data.item.campus !== "") {
    _push(`<div class="info__item" data-v-1dd171d6><p class="info__key" data-v-1dd171d6>\u041A\u0430\u043C\u043F\u0443\u0441</p><p class="info__value" data-v-1dd171d6>${ssrInterpolate($data.item.campus)}</p></div>`);
  } else {
    _push(`<!---->`);
  }
  if ($data.item.corpus !== "") {
    _push(`<div class="info__item" data-v-1dd171d6><p class="info__key" data-v-1dd171d6>\u041A\u043E\u0440\u043F\u0443\u0441</p><p class="info__value" data-v-1dd171d6>${ssrInterpolate($data.item.corpus)}</p></div>`);
  } else {
    _push(`<!---->`);
  }
  if ($data.item.floor !== "") {
    _push(`<div class="info__item" data-v-1dd171d6><p class="info__key" data-v-1dd171d6>\u042D\u0442\u0430\u0436</p><p class="info__value" data-v-1dd171d6>${ssrInterpolate($data.item.floor)}</p></div>`);
  } else {
    _push(`<!---->`);
  }
  if ($data.item.number !== "") {
    _push(`<div class="info__item" data-v-1dd171d6><p class="info__key" data-v-1dd171d6>\u041D\u043E\u043C\u0435\u0440</p><p class="info__value info__value_no_wrap" data-v-1dd171d6>${ssrInterpolate($data.item.number)}</p></div>`);
  } else {
    _push(`<!---->`);
  }
  if ($data.item.type !== "") {
    _push(`<div class="info__item" data-v-1dd171d6><p class="info__key" data-v-1dd171d6>\u041D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435</p><p class="info__value" data-v-1dd171d6>${ssrInterpolate($data.item.type)}</p></div>`);
  } else {
    _push(`<!---->`);
  }
  if ($data.item.desc !== "") {
    _push(`<div class="info__item" data-v-1dd171d6><p class="info__key" data-v-1dd171d6>\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435</p><p class="info__value" data-v-1dd171d6>${ssrInterpolate($data.item.desc)}</p></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AudInfo.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-1dd171d6"]]);
const _imports_0 = "" + buildAssetsURL("AV.3993e9f8.svg");
const _sfc_main$1 = {
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
          if (this.selectedAudId !== null) {
            this.selectedIds.splice(this.selectedIds.indexOf(this.selectedAudId), 1);
          }
          this.selectedAudId = payload.id;
          this.selectedIds.push(payload.id);
        }
      } else {
        this.selectedAudId = null;
        this.selectedIds.splice(this.selectedIds.indexOf(payload.id), 1);
      }
      this.$emit("newSelected", { aud: this.selectedAudId });
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Scale = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "map-container" }, _attrs))} data-v-b11c97b5>`);
  _push(ssrRenderComponent(_component_Scale, {
    map: $options.map,
    "view-box": $data.viewBox,
    "thin-border-on-zoom": true,
    "wrapper-styles": {
      position: "relative",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%"
    },
    mobilePreventScroll: true,
    onClick: $options.click
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="" data-v-b11c97b5${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_0,
            alt: ""
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ScaleFrame.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-b11c97b5"]]);
const _sfc_main = {
  data() {
    return {
      navCardState: false,
      modalState: false,
      numberOfFloors: 5,
      b1: "",
      b2: "",
      isAudSelected: false,
      selectedAudNumber: ""
    };
  },
  methods: {
    getAudInfo(data) {
      if (data.aud) {
        this.isAudSelected = true;
      } else {
        this.isAudSelected = false;
      }
      this.selectedAudNumber = data.aud;
      this.$emit("audInfoChanged", {
        isAudSelected: this.isAudSelected,
        selectedAudNumber: this.selectedAudNumber
      });
    },
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
    },
    toggleNavCard() {
      this.navCardState = !this.navCardState;
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_FloorsButtons = __nuxt_component_2;
  const _component_ScaleFrame = __nuxt_component_1$1;
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_FloorsButtons, {
    class: "floor-buttons",
    numberOfFloors: $data.numberOfFloors
  }, null, _parent));
  _push(ssrRenderComponent(_component_ScaleFrame, {
    class: "map-frame",
    onNewSelected: $options.getAudInfo
  }, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Map.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_1 as _, __nuxt_component_0 as a };
//# sourceMappingURL=Map-727bdbf0.mjs.map
