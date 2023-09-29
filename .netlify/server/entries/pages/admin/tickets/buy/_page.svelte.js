import { c as create_ssr_component, v as validate_component } from "../../../../../chunks/index3.js";
import { L as Loader } from "../../../../../chunks/loader.js";
import "../../../../../chunks/supabaseClient.js";
import "../../../../../chunks/index.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".price-con-outer.svelte-1d2irx8{display:flex;justify-content:center}.price-con-inner.svelte-1d2irx8{width:400px;display:flex}button.svelte-1d2irx8,input.svelte-1d2irx8{padding:1rem 1.5rem;width:100%;display:flex;background-color:rgb(146 151 179 / 13%);border:none;margin:0;outline:none;text-align:center}.rounded.svelte-1d2irx8{border-radius:15px;text-align:center;background-color:rgb(146 151 179 / 40%)}.item-amout.svelte-1d2irx8{background-color:rgb(146 151 179 / 20%);width:60%}.caret.svelte-1d2irx8{width:20%;border-radius:15px;border-top-right-radius:0;border-bottom-right-radius:0}.caret.svelte-1d2irx8:last-child{border-radius:0;border-top-right-radius:15px;border-bottom-right-radius:15px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-5agwh4_START -->${$$result.title = `<title>Buy tickets</title>`, ""}<!-- HEAD_svelte-5agwh4_END -->`, ""}
${`${validate_component(Loader, "Loader").$$render($$result, {}, {}, {})}`}`;
});
export {
  Page as default
};
