import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index3.js";
import { L as Loader } from "../../../../chunks/loader.js";
import "../../../../chunks/supabaseClient.js";
import "../../../../chunks/index.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".user-event-con.svelte-pyzj4d{display:flex;justify-content:space-between;flex-wrap:wrap}.user-event-details-con.svelte-pyzj4d{background-color:rgb(146 151 179 / 20%);width:95%;margin-top:1rem;cursor:pointer;transition:.5s;border-radius:15px;display:flex;justify-content:space-between}.user-event-details-con.svelte-pyzj4d:hover{width:100%}.bold.svelte-pyzj4d{font-weight:bold}.custom-bg.svelte-pyzj4d{background-image:linear-gradient(\r\n			to left top,\r\n			#cf4af3,\r\n			#e73bd7,\r\n			#f631bc,\r\n			#fd31a2,\r\n			#ff3a8b,\r\n			#ff4b78,\r\n			#ff5e68,\r\n			#ff705c,\r\n			#ff8c51,\r\n			#ffaa49,\r\n			#ffc848,\r\n			#ffe652\r\n		);width:100%;border-radius:15px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-2xcn1u_START -->${$$result.title = `<title>Events</title>`, ""}<!-- HEAD_svelte-2xcn1u_END -->`, ""}

${`${validate_component(Loader, "Loader").$$render($$result, {}, {}, {})}`}

<p class="text-lg mt-10">Available events</p>
<div class="mt-8 rounded-2xl" style="background: rgb(146 151 179 / 13%)"><div class="container mx-auto"><div class="py-8"><div class="py-4"><div class="max-w-full overflow-x-auto rounded-lg"><table class="w-full leading-normal text-white"><thead><tr><th scope="col" class="px-5 py-3 border-b border-gray-200 text-left text-sm uppercase font-normal ">Event
								</th>
								<th scope="col" class="px-5 py-3 border-b border-gray-200 text-left text-sm uppercase font-normal ">Date
								</th>
								<th scope="col" class="px-5 py-3 border-b border-gray-200 text-left text-sm uppercase font-normal ">Price
								</th>
								<th scope="col" class="px-5 py-3 border-b border-gray-200 text-left text-sm uppercase font-normal ">Tickets
								</th>
								<th scope="col" class="px-5 py-3 border-b border-gray-200 text-left text-sm uppercase font-normal "></th></tr></thead>
						<tbody class="text-white">${`<tr>${validate_component(Loader, "Loader").$$render($$result, {}, {}, {})}</tr>`}</tbody></table>
					<div class="px-5 py-5 flex flex-col xs:flex-row items-center xs:justify-between ">${``}</div></div></div></div></div>
</div>`;
});
export {
  Page as default
};
