import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index3.js";
import "../../../../chunks/supabaseClient.js";
import "../../../../chunks/index.js";
import { L as Loader } from "../../../../chunks/loader.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".notifcon.svelte-1atvsoj{background-color:rgb(146 151 179 / 20%);width:95%;margin-top:1rem;cursor:pointer;transition:.5s;border-radius:15px}.notifcon-inner.svelte-1atvsoj{display:flex;justify-content:space-between;overflow:hidden}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-kb9c6k_START -->${$$result.title = `<title>Notifications</title>`, ""}<!-- HEAD_svelte-kb9c6k_END -->`, ""}

${`${validate_component(Loader, "Loader").$$render($$result, {}, {}, {})}`}`;
});
export {
  Page as default
};
