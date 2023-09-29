import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index3.js";
const Check = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="84" height="84" fill="#ffffff" viewBox="0 0 256 256"><path d="M160,42A86.11,86.11,0,0,0,82.43,90.88,62,62,0,1,0,72,214h88a86,86,0,0,0,0-172Zm0,160H72a50,50,0,0,1,0-100,50.67,50.67,0,0,1,5.91.35A85.61,85.61,0,0,0,74,128a6,6,0,0,0,12,0,74,74,0,1,1,74,74Zm36.24-94.24a6,6,0,0,1,0,8.48l-48,48a6,6,0,0,1-8.48,0l-24-24a6,6,0,0,1,8.48-8.48L144,151.51l43.76-43.75A6,6,0,0,1,196.24,107.76Z"></path></svg>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".container.svelte-gr9tji{display:flex;justify-content:center;align-items:center;width:100%;height:80%}.check-con.svelte-gr9tji{width:100%;display:flex;justify-content:center}.panel.svelte-gr9tji{border-radius:15px;background-color:rgb(146 151 179 / 13%);width:300px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1qpww1m_START -->${$$result.title = `<title>Verify your account</title>`, ""}<!-- HEAD_svelte-1qpww1m_END -->`, ""}
<div class="container svelte-gr9tji"><div class="panel p-4 svelte-gr9tji"><div class="check-con svelte-gr9tji">${validate_component(Check, "Check").$$render($$result, {}, {}, {})}</div>
        <p class="mt-5 text-center">Check your email. We have sent a verification link. Click it now and buy some tickets</p></div>
</div>`;
});
export {
  Page as default
};
