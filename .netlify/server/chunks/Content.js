import { c as create_ssr_component, v as validate_component } from "./index3.js";
import { L as Loader } from "./loader.js";
import "./supabaseClient.js";
import "./index.js";
const Content_svelte_svelte_type_style_lang = "";
const css = {
  code: ".custom-bg.svelte-yvhfgw{background-image:linear-gradient(\r\n			to right top,\r\n			#cf4af3,\r\n			#e73bd7,\r\n			#f631bc,\r\n			#fd31a2,\r\n			#ff3a8b,\r\n			#ff4b78,\r\n			#ff5e68,\r\n			#ff705c,\r\n			#ff8c51,\r\n			#ffaa49,\r\n			#ffc848,\r\n			#ffe652\r\n		)}.err-banner.svelte-yvhfgw{width:385px;padding:15px;border-radius:15px;background:rgb(146 151 179 / 13%)}.obj-center.svelte-yvhfgw{display:flex;justify-content:center;width:100%}",
  map: null
};
const Content = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div>${``}
	${`${validate_component(Loader, "Loader").$$render($$result, {}, {}, {})}`}
	<div class="mt-6 mb-3 text-gray-400">Available events</div>
	${`${validate_component(Loader, "Loader").$$render($$result, {}, {}, {})}`}
	<div class="mt-6 mb-3 text-gray-400">Tickets</div>
	${`${validate_component(Loader, "Loader").$$render($$result, {}, {}, {})}`}
</div>`;
});
export {
  Content as C
};
