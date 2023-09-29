import { c as create_ssr_component } from "./index3.js";
/* empty css                                      */const css = {
  code: ".load-con.svelte-g3g2n2{width:100%;display:flex;justify-content:center}.load-btn.svelte-g3g2n2{height:30px;width:30px;background-color:rgb(146 151 179 / 13%);animation:svelte-g3g2n2-sparkle 1s infinite;margin-left:.5rem;border-radius:50%}.load-btn.svelte-g3g2n2:nth-child(2){animation-delay:.3s}.load-btn.svelte-g3g2n2:nth-child(3){animation-delay:.6s}@keyframes svelte-g3g2n2-sparkle{0%{background-color:rgb(146 151 179 / 13%)}50%{background-color:rgb(146 151 179 / 20%)}100%{background-color:rgb(146 151 179 / 13%)}}",
  map: null
};
const Loader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="load-con mt-10 mb-3 svelte-g3g2n2"><div class="load-btn svelte-g3g2n2"></div>
    <div class="load-btn svelte-g3g2n2"></div>
    <div class="load-btn svelte-g3g2n2"></div>
</div>`;
});
export {
  Loader as L
};
