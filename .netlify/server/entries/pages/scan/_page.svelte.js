import { c as create_ssr_component, d as escape, a as add_attribute } from "../../../chunks/index3.js";
import "html5-qrcode/cjs/index.js";
/* empty css                                                    */import "../../../chunks/supabaseClient.js";
import "../../../chunks/index.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ":root{--color-one:#cf4af3;--color-two:#e73bd7;--color-three:#f631bc;--color-four:#fd31a2;--color-five:#ff3a8b;--color-six:#ff4b78;--color-seven:#ff5e68;--color-eight:#ff705c;--color-nine:#ff8c51;--color-ten:#ffaa49;--color-eleven:#ffc848;--color-twelve:#ffe652}.animate-gradient.svelte-1whsx9d{background:linear-gradient(to right, var(--color-one), var(--color-two), var(--color-three), var(--color-four), var(--color-five), var(--color-six), var(--color-seven), var(--color-eight), var(--color-nine), var(--color-ten), var(--color-eleven), var(--color-twelve));background-size:200% auto;animation:svelte-1whsx9d-flow 10s linear infinite;width:20%;height:10px;border-radius:15px;transition:.5s}.phase.svelte-1whsx9d{font-size:1.5rem}.bold.svelte-1whsx9d{font-weight:bold;font-size:1.5rem}.info-con.svelte-1whsx9d{width:100%;display:flex;justify-content:center}.info-con-inner.svelte-1whsx9d{width:400px}button.svelte-1whsx9d,input.svelte-1whsx9d{padding:1rem 1.5rem;width:100%;background-color:rgb(146 151 179 / 40%);border-radius:15px;border:none;margin:0;outline:none;width:100%}input.svelte-1whsx9d{background-color:rgb(146 151 179 / 13%)}.glass.svelte-1whsx9d{background-color:rgb(146 151 179 / 13%);border-radius:15px}.veri-bubble.svelte-1whsx9d{background-color:rgb(146 151 179 / 20%);width:fit-content;border-radius:10px}.red.svelte-1whsx9d{color:rgba(243, 119, 119, 0.935)}.green.svelte-1whsx9d{color:rgb(92, 195, 92)}.err.svelte-1whsx9d{background:red;border-radius:15px}@keyframes svelte-1whsx9d-flow{0%{background-position:0% 50%}100%{background-position:100% 50%}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let width;
  let steps = 1;
  let code;
  let accessError = "";
  $$result.css.add(css);
  width = steps * 100 / 3;
  return `${$$result.head += `<!-- HEAD_svelte-r8jx4a_START -->${$$result.title = `<title>Scan ticket</title>`, ""}<!-- HEAD_svelte-r8jx4a_END -->`, ""}
<div id="animated-gradient mt-4 mb-5" class="animate-gradient svelte-1whsx9d" style="${"width: " + escape(width, true) + "%"}"></div>
${accessError.length > 0 ? `<p class="mt-5 mb-3 text-center err p-4 svelte-1whsx9d">${escape(accessError)}</p>
<div class="mt-3"><button class="svelte-1whsx9d">Restart scan</button></div>` : ``}
<p class="ml-4 text-gray-500">${`Waiting for scan`}</p>
<div class="info-con svelte-1whsx9d"><div class="info-con-inner svelte-1whsx9d">${`<p class="phase text-center mt-10 svelte-1whsx9d">Ticket scan</p>
            <p class="text-gray-400 text-center mt-4 mb-3">Inactive tickets may be scanned, however, they will not verify the existence and validity of your ticket. You will be rejected</p>
            <div id="reader"></div>
            <div class="mt-7"><input type="text" placeholder="Enter code instead" class="svelte-1whsx9d"${add_attribute("value", code, 0)}></div>
            <div class="mt-2"><button class="svelte-1whsx9d">Verify</button></div>`}
        ${``}
        ${``}</div>
</div>`;
});
export {
  Page as default
};
