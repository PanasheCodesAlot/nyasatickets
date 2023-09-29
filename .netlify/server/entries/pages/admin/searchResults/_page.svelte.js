import { c as create_ssr_component, d as escape, a as add_attribute, v as validate_component } from "../../../../chunks/index3.js";
import { L as Loader } from "../../../../chunks/loader.js";
import "../../../../chunks/supabaseClient.js";
import "../../../../chunks/index.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "input.svelte-1fzi58v{padding:1rem 1.5rem;width:100%;background-color:rgb(146 151 179 / 40%);border-radius:15px;border:none;margin:0;outline:none}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let evtType;
  let sQuery;
  setTimeout(
    () => {
      console.log("Hello there! You arent supposed to be here");
    },
    1e3
  );
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1sdufk4_START -->${$$result.title = `<title>Search: ${escape(sQuery)}</title>`, ""}<!-- HEAD_svelte-1sdufk4_END -->`, ""}
<div><input type="text" placeholder="${"Search for events by " + escape(evtType, true)}" class="svelte-1fzi58v"${add_attribute("value", sQuery, 0)}></div>
${`${validate_component(Loader, "Loader").$$render($$result, {}, {}, {})}`}`;
});
export {
  Page as default
};
