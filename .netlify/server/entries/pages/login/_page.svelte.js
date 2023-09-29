import { c as create_ssr_component, v as validate_component, a as add_attribute } from "../../../chunks/index3.js";
import "../../../chunks/supabaseClient.js";
import "../../../chunks/index.js";
const HandWave = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div style="margin-right: 1rem;"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#ffa54a" viewBox="0 0 256 256"><path d="M186.2,30.45a6,6,0,0,1,7.35-4.24c15.39,4.12,28,13.64,35.65,26.79a6,6,0,0,1-10.4,6c-6-10.38-16.06-17.91-28.35-21.2A6,6,0,0,1,186.2,30.45ZM78.34,227.29C68.75,219.73,60.76,210.11,53.2,197a6,6,0,0,0-10.4,6c8.36,14.47,17.29,25.18,28.11,33.71a6,6,0,1,0,7.43-9.42Zm148.72-61A86.12,86.12,0,0,1,144.13,230a86.71,86.71,0,0,1-22.4-3A85.45,85.45,0,0,1,69.51,187l-38-65.82a26,26,0,0,1,23.68-39l-5-8.73A26,26,0,0,1,91.92,43a26,26,0,0,1,45.9-1.67l17.05,29.52a26,26,0,0,1,45.59-1l18,31.18A85.45,85.45,0,0,1,227.06,166.25Zm-19-59.26-18-31.18a14,14,0,1,0-24.25,14l10,17.32a6,6,0,0,1-2.19,8.2,34,34,0,0,0-12.45,46.44,6,6,0,1,1-10.39,6,46.08,46.08,0,0,1,11.84-59.5l-35.2-61a14,14,0,0,0-24.25,14l26,45a6,6,0,1,1-10.39,6l-34-58.89a14,14,0,1,0-24.25,14l38,65.81a6,6,0,1,1-10.39,6l-22-38.1a14,14,0,1,0-24.25,14L79.9,181a74,74,0,0,0,128.17-74Z"></path></svg></div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".form-con-outer.svelte-1ldwd6r.svelte-1ldwd6r{display:flex;justify-content:center}.form-con-inner.svelte-1ldwd6r.svelte-1ldwd6r{width:400px;border-radius:3rem;overflow:hidden}.input-con.svelte-1ldwd6r.svelte-1ldwd6r{background-color:rgb(146 151 179 / 13%)}.mt-3.svelte-1ldwd6r.svelte-1ldwd6r{margin-top:1rem}.nyasa-text.svelte-1ldwd6r.svelte-1ldwd6r{display:flex}.header.svelte-1ldwd6r.svelte-1ldwd6r{background-color:rgb(146 151 179 / 40%);height:70px;text-align:center;display:flex;justify-content:center;align-items:center;font-size:1.3rem}input.svelte-1ldwd6r.svelte-1ldwd6r,button.svelte-1ldwd6r.svelte-1ldwd6r{border:none;margin:0;outline:none}.f-pass.svelte-1ldwd6r.svelte-1ldwd6r{text-align:right}.change-form.svelte-1ldwd6r.svelte-1ldwd6r{text-align:center}.logged-in-panel.svelte-1ldwd6r.svelte-1ldwd6r{background:rgb(146 151 179 / 13%);display:flex;justify-content:space-between}.logged-in-panel.svelte-1ldwd6r>div.svelte-1ldwd6r{display:flex}.error.svelte-1ldwd6r.svelte-1ldwd6r{background:rgba(145 16 16 / 70%);margin-bottom:1.5rem}a.svelte-1ldwd6r.svelte-1ldwd6r{color:#ff8c51}input.svelte-1ldwd6r.svelte-1ldwd6r{padding:1rem 1.5rem;width:100%;background-color:rgb(146 151 179 / 20%);border-radius:15px}button.svelte-1ldwd6r.svelte-1ldwd6r{padding:1rem 1.5rem;width:100%;background-color:rgb(146 151 179 / 40%);border-radius:15px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let inputs = {
    signIn: { email: "", password: "" },
    signUp: { name: "", email: "", password: "" }
  };
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-c77y3o_START -->${$$result.title = `<title>Login</title>`, ""}<!-- HEAD_svelte-c77y3o_END -->`, ""}
${`<div class="form-con-outer svelte-1ldwd6r"><div class="form-con-inner svelte-1ldwd6r"><div class="header svelte-1ldwd6r"><p class="nyasa-text svelte-1ldwd6r">${`${validate_component(HandWave, "HandWave").$$render($$result, {}, {}, {})} Sign in`}</p></div>
        <div class="p-8 font-normal input-con svelte-1ldwd6r">${``}
            ${`<input type="email" placeholder="Email" class="svelte-1ldwd6r"${add_attribute("value", inputs.signIn.email, 0)}>
                <div class="mt-3 svelte-1ldwd6r"><input type="password" placeholder="Password" class="svelte-1ldwd6r"${add_attribute("value", inputs.signIn.password, 0)}>
                    <p class="f-pass svelte-1ldwd6r"><a href="/forgotpassword" class="svelte-1ldwd6r">Forgot password</a></p></div>
                <button class="submit mt-3 svelte-1ldwd6r">Sign in</button>`}
            <p class="mt-3 change-form svelte-1ldwd6r">${`<a class="svelte-1ldwd6r">Create free account</a>`}</p></div></div></div>`}`;
});
export {
  Page as default
};
