import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index3.js";
import { L as Loader } from "../../../../chunks/loader.js";
import "../../../../chunks/supabaseClient.js";
import "../../../../chunks/index.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".form-con.svelte-1yqvf9m{width:400px}.container.svelte-1yqvf9m{display:flex;justify-content:center}input.svelte-1yqvf9m,textarea.svelte-1yqvf9m{padding:1rem 1.5rem;background-color:rgb(146 151 179 / 20%);border-radius:15px}input.svelte-1yqvf9m,button.svelte-1yqvf9m,textarea.svelte-1yqvf9m{border:none;margin:0;outline:none;width:100%}button.svelte-1yqvf9m{padding:1rem 1.5rem;width:100%;background-color:rgb(146 151 179 / 40%);border-radius:15px}textarea.svelte-1yqvf9m{height:20rem}.mt-3.svelte-1yqvf9m{margin-top:1rem}.mt-2.svelte-1yqvf9m{margin-top:.5rem}.hd-text.svelte-1yqvf9m{font-size:2rem}.text-con.svelte-1yqvf9m{text-align:center}.error.svelte-1yqvf9m{background:rgba(145 16 16 / 70%);margin-bottom:1.5rem}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1jes23l_START -->${$$result.title = `<title>Create an event</title>`, ""}<!-- HEAD_svelte-1jes23l_END -->`, ""}
<div class="container svelte-1yqvf9m"><div class="form-con svelte-1yqvf9m"><div class="text-con svelte-1yqvf9m"><div class="hd-text svelte-1yqvf9m">Create a new event</div>
			<div class="mt-1 mb-3 text-gray-400">${`Lets celebrate!`}</div></div>
		${``}
		${`${validate_component(Loader, "Loader").$$render($$result, {}, {}, {})}`}</div>
</div>`;
});
export {
  Page as default
};
