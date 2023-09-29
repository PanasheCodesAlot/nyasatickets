import { c as create_ssr_component, v as validate_component } from "../../../../../chunks/index3.js";
import { L as Loader } from "../../../../../chunks/loader.js";
import "../../../../../chunks/supabaseClient.js";
import "../../../../../chunks/index.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".bold.svelte-m37mjg{font-weight:bold}.details-con.svelte-m37mjg{display:flex;justify-content:center}.OR-con.svelte-m37mjg{width:100%;height:350px;background-color:rgb(146 151 179 / 13%);border-radius:15px}.btn-flex.svelte-m37mjg{display:flex;justify-content:center}.w-100.svelte-m37mjg{width:100%;width:350px}.d-hidden.svelte-m37mjg{display:none}button.svelte-m37mjg{padding:1rem 1.5rem;width:100%;background-color:rgb(146 151 179 / 40%);border-radius:15px;border:none;margin:0;outline:none}.error.svelte-m37mjg{background:rgba(145 16 16 / 70%)}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1ei6kgx_START -->${$$result.title = `<title>View tickets</title>`, ""}<!-- HEAD_svelte-1ei6kgx_END -->`, ""}
${`${validate_component(Loader, "Loader").$$render($$result, {}, {}, {})}`}`;
});
export {
  Page as default
};
