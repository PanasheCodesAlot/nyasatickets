import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index3.js";
import { L as Loader } from "../../../../chunks/loader.js";
import "../../../../chunks/supabaseClient.js";
import "../../../../chunks/index.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".filters.svelte-yrhajx .active.svelte-yrhajx{color:#ff8c51;border:2px solid #ff8c51;;}.bold.svelte-yrhajx.svelte-yrhajx{font-weight:bold}button.svelte-yrhajx.svelte-yrhajx{padding:1rem 1.5rem;width:fit-content;background-color:rgb(146 151 179 / 13%);border:none;margin:0;outline:none;border-radius:15px}.user-event-details-con.svelte-yrhajx.svelte-yrhajx{background-color:rgb(146 151 179 / 20%);width:100%;margin-top:1rem;cursor:pointer;transition:.5s;border-radius:15px;display:flex;justify-content:space-between}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1mcy3tb_START -->${$$result.title = `<title>Tickets</title>`, ""}<!-- HEAD_svelte-1mcy3tb_END -->`, ""}

<div class="filters svelte-yrhajx"><button class="filter-btns active svelte-yrhajx">Active</button>
	<button class="filter-btns svelte-yrhajx" id="fil-btn">Unverified</button>
	<button class="filter-btns svelte-yrhajx">Expired</button></div>
${`${validate_component(Loader, "Loader").$$render($$result, {}, {}, {})}`}`;
});
export {
  Page as default
};
