import { c as create_ssr_component, v as validate_component } from "../../../../../chunks/index3.js";
import { L as Loader } from "../../../../../chunks/loader.js";
import "../../../../../chunks/supabaseClient.js";
import "../../../../../chunks/index.js";
import "postcss/lib/list";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".btn-con.svelte-7hwpn6{display:flex;flex-wrap:wrap}.bold.svelte-7hwpn6{font-weight:bold}.detail.svelte-7hwpn6{display:flex}button.svelte-7hwpn6{padding:1rem 1.5rem;width:100%;max-width:fit-content;display:flex;background-color:rgb(146 151 179 / 40%);border-radius:15px;border:none;margin:0;outline:none}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${`${validate_component(Loader, "Loader").$$render($$result, {}, {}, {})}`}`;
});
export {
  Page as default
};
