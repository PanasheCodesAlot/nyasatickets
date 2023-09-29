import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index3.js";
import { C as Content } from "../../../../chunks/Content.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-56vx43_START -->${$$result.title = `<title>Overview</title>`, ""}<!-- HEAD_svelte-56vx43_END -->`, ""}

${validate_component(Content, "Content").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
