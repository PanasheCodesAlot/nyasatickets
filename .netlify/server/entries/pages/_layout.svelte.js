import { c as create_ssr_component, a as add_attribute, v as validate_component, b as subscribe, e as each, d as escape, n as null_to_empty, m as missing_component } from "../../chunks/index3.js";
import "../../chunks/supabaseClient.js";
import "../../chunks/index.js";
import { w as writable } from "../../chunks/index2.js";
import { p as page } from "../../chunks/stores.js";
const tailwind = "";
const UserData = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#ffffff" viewBox="0 0 256 256"><path d="M207.5,199.3a28,28,0,1,0-31,0A36.24,36.24,0,0,0,156.13,223a4,4,0,0,0,2.84,4.89,3.7,3.7,0,0,0,1,.14,4,4,0,0,0,3.87-3c3.29-12.38,14.85-21,28.13-21s24.84,8.65,28.13,21a4,4,0,1,0,7.73-2.05A36.22,36.22,0,0,0,207.5,199.3ZM172,176a20,20,0,1,1,20,20A20,20,0,0,1,172,176ZM216,76H129.66L101.17,47.51A12,12,0,0,0,92.69,44H40A12,12,0,0,0,28,56V200.61A11.4,11.4,0,0,0,39.38,212h81.18a4,4,0,0,0,0-8H39.38A3.39,3.39,0,0,1,36,200.61V84H216a4,4,0,0,1,4,4v32a4,4,0,0,0,8,0V88A12,12,0,0,0,216,76ZM40,52H92.69a4,4,0,0,1,2.82,1.17L118.34,76H36V56A4,4,0,0,1,40,52Z"></path></svg>`;
});
const sidebarOpen = writable(false);
const TopBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let sQuery;
  return `<header class="h-16 md:h-20 items-center relative w-full z-10"><div class="flex flex-col flex-center h-full px-3 mx-auto relative justify-center "><div class="flex items-center pl-1 relative w-full sm:ml-0 sm:pr-2 lg:max-w-68 "><div class="container flex left-0 relative w-3/4"><div class="flex group h-full items-center relative w-12"><button type="button" aria-expanded="false" aria-label="Toggle sidenav" class="text-4xl text-white focus:outline-none lg:hidden">≡
					</button></div>
				<div class="group h-full hidden items-center relative w-full md:flex lg:w-64 "><div class="absolute block cursor-pointer flex items-center justify-center p-3 pr-2 text-gray-500 text-sm uppercase sm:hidden "><svg fill="none" class="h-5 relative w-5" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></div>
					<svg class="absolute fill-current h-4 hidden left-0 ml-4 pointer-events-none text-gray-500 w-4 group-hover:text-gray-400 sm:block " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path></svg>
					<input type="text" class="bg-gray-100 block leading-normal pl-10 pr-4 py-1.5 ring-opacity-90 rounded-2xl text-gray-400 w-full focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 " placeholder="Search"${add_attribute("value", sQuery, 0)}></div></div>
			<div class="flex items-center justify-end ml-5 p-1 relative w-9/12 sm:mr-0 sm:right-auto md:w-1/4 "><a href="../../../../login">${validate_component(UserData, "UserData").$$render($$result, {}, {}, {})}</a></div></div></div></header>`;
});
const Overlay = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $sidebarOpen, $$unsubscribe_sidebarOpen;
  $$unsubscribe_sidebarOpen = subscribe(sidebarOpen, (value) => $sidebarOpen = value);
  $$unsubscribe_sidebarOpen();
  return `

<button${add_attribute(
    "class",
    $sidebarOpen ? "bg-black fixed h-screen left-0 opacity-40 top-0 w-screen z-30 lg:hidden" : "",
    0
  )}></button>`;
});
const HostEvent = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#ffffff" viewBox="0 0 256 256"><path d="M108.66,55.46a11.79,11.79,0,0,0-19.43,4.31L36.73,204.15a11.81,11.81,0,0,0,11,15.85,11.88,11.88,0,0,0,4.08-.73l144.38-52.5a11.79,11.79,0,0,0,4.31-19.43Zm-6.53,137L63.52,153.87l16.19-44.51,66.92,66.93Zm-53,19.28a3.81,3.81,0,0,1-4.87-4.87l16.27-44.72,33.32,33.32Zm146.8-55.25a3.77,3.77,0,0,1-2.42,2.74l-38.56,14L82.72,101.07l14-38.56a3.77,3.77,0,0,1,2.74-2.42,4.32,4.32,0,0,1,.85-.09A3.65,3.65,0,0,1,103,61.12L194.88,153A3.78,3.78,0,0,1,195.91,156.51ZM220,24c0,9.68-5.85,28-28,28-8.31,0-14.18,3.29-17.42,9.79A26.12,26.12,0,0,0,172,72a4,4,0,0,1-8,0,34.06,34.06,0,0,1,3.42-13.79C170.66,51.73,177.56,44,192,44c19.29,0,20-18,20-20a4,4,0,0,1,4-4h0A4,4,0,0,1,220,24ZM140,40V16a4,4,0,0,1,8,0V40a4,4,0,0,1-8,0Zm94.83,85.17a4,4,0,0,1-5.66,5.66l-16-16a4,4,0,0,1,5.66-5.66Zm6.43-49.37-24,8A4,4,0,0,1,216,84a4,4,0,0,1-1.27-7.79l24-8a4,4,0,0,1,2.53,7.59Z"></path></svg>`;
});
const Calender = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#ffffff" viewBox="0 0 256 256"><path d="M208,36H180V24a4,4,0,0,0-8,0V36H84V24a4,4,0,0,0-8,0V36H48A12,12,0,0,0,36,48V208a12,12,0,0,0,12,12H208a12,12,0,0,0,12-12V48A12,12,0,0,0,208,36ZM48,44H76V56a4,4,0,0,0,8,0V44h88V56a4,4,0,0,0,8,0V44h28a4,4,0,0,1,4,4V84H44V48A4,4,0,0,1,48,44ZM208,212H48a4,4,0,0,1-4-4V92H212V208A4,4,0,0,1,208,212Z"></path></svg>`;
});
const ORcode = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#ffffff" viewBox="0 0 256 256"><path d="M104,44H56A12,12,0,0,0,44,56v48a12,12,0,0,0,12,12h48a12,12,0,0,0,12-12V56A12,12,0,0,0,104,44Zm4,60a4,4,0,0,1-4,4H56a4,4,0,0,1-4-4V56a4,4,0,0,1,4-4h48a4,4,0,0,1,4,4Zm-4,36H56a12,12,0,0,0-12,12v48a12,12,0,0,0,12,12h48a12,12,0,0,0,12-12V152A12,12,0,0,0,104,140Zm4,60a4,4,0,0,1-4,4H56a4,4,0,0,1-4-4V152a4,4,0,0,1,4-4h48a4,4,0,0,1,4,4ZM200,44H152a12,12,0,0,0-12,12v48a12,12,0,0,0,12,12h48a12,12,0,0,0,12-12V56A12,12,0,0,0,200,44Zm4,60a4,4,0,0,1-4,4H152a4,4,0,0,1-4-4V56a4,4,0,0,1,4-4h48a4,4,0,0,1,4,4Zm-64,72V144a4,4,0,0,1,8,0v32a4,4,0,0,1-8,0Zm72-16a4,4,0,0,1-4,4H180v44a4,4,0,0,1-4,4H144a4,4,0,0,1,0-8h28V144a4,4,0,0,1,8,0v12h28A4,4,0,0,1,212,160Zm0,32v16a4,4,0,0,1-8,0V192a4,4,0,0,1,8,0Z"></path></svg>`;
});
const Bell = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#ffffff" viewBox="0 0 256 256"><path d="M218.35,178C212.58,168,204,140.13,204,104a76,76,0,1,0-152,0c0,36.13-8.59,64-14.36,73.95A12,12,0,0,0,48,196H92.23a36,36,0,0,0,71.54,0H208A12,12,0,0,0,218.35,178ZM128,220a28,28,0,0,1-27.71-24h55.42A28,28,0,0,1,128,220Zm83.45-34a3.91,3.91,0,0,1-3.44,2H48a3.91,3.91,0,0,1-3.44-2,4,4,0,0,1,0-4C52,169.17,60,139.32,60,104a68,68,0,1,1,136,0c0,35.31,8,65.17,15.44,78A4,4,0,0,1,211.45,186Z"></path></svg>`;
});
const Search = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#ffffff" viewBox="0 0 256 256"><path d="M226.83,221.17l-52.7-52.7a84.1,84.1,0,1,0-5.66,5.66l52.7,52.7a4,4,0,0,0,5.66-5.66ZM36,112a76,76,0,1,1,76,76A76.08,76.08,0,0,1,36,112Z"></path></svg>`;
});
const Rocket = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#ffffff" viewBox="0 0 256 256"><path d="M99.88,185c-.35,1.43-9.33,35-59.88,35a4,4,0,0,1-4-4c0-50.54,33.6-59.53,35-59.88A4,4,0,0,1,73,163.88c-1.12.29-27.23,7.59-28.89,48,40.45-1.66,47.75-27.76,48.05-28.91a4,4,0,0,1,7.75,2ZM194,115.71,188,121.65v60a11.9,11.9,0,0,1-3.52,8.48l-34.34,34.35a12,12,0,0,1-20.37-6.79l-5.55-39.81L78.12,131.77l-39.79-5.55a12,12,0,0,1-6.81-20.37L65.87,71.51A11.9,11.9,0,0,1,74.35,68h60l5.94-5.94c25.53-25.53,56.3-26.62,68.35-25.91a12,12,0,0,1,11.22,11.22C220.57,59.41,219.48,90.18,194,115.71ZM39.44,118.3l39.14,5.46L126.35,76h-52a4,4,0,0,0-2.82,1.18L37.18,111.51a4,4,0,0,0,2.26,6.79ZM180,129.65l-47.77,47.77,5.46,39.15a4,4,0,0,0,6.79,2.25l34.35-34.34a4,4,0,0,0,1.17-2.83Zm8.28-19.59c23.23-23.24,24.23-51.26,23.58-62.22a3.93,3.93,0,0,0-3.71-3.71c-11-.65-39,.34-62.22,23.58l-7.11,7.11h0L85.66,128,128,170.34l53.18-53.17h0Z"></path></svg>`;
});
const data = [
  {
    section: "Create",
    content: [
      {
        title: "Host an event",
        icon: HostEvent,
        link: "/admin/newEvent"
      }
    ]
  },
  {
    section: "Home",
    content: [
      {
        title: "Overview",
        icon: Rocket,
        link: "/admin/overview"
      },
      {
        title: "Events",
        icon: Calender,
        link: "/admin/events"
      },
      {
        title: "Tickets",
        icon: ORcode,
        link: "/admin/tickets"
      },
      {
        title: "Notifications",
        icon: Bell,
        link: "/admin/notifications"
      },
      {
        title: "Search",
        icon: Search,
        link: "/admin/searchResults"
      }
    ]
  }
];
const SidebarItems_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".notif-bubble.svelte-1dhf63z{padding:5px;background-color:rgb(146 151 179 / 20%);border-radius:40px;width:40px;height:40px;text-align:center}",
  map: null
};
const SidebarItems = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const style = {
    title: `mx-4 text-sm`,
    section: `font-medium mb-4 pl-5 text-gray-500 text-lg lg:pl-6`,
    link: `flex items-center justify-start my-1 p-3 text-white w-full`,
    active: `border-white lg:border-red-300 border-l-4 lg:border-l-0 lg:border-r-4`
  };
  $$result.css.add(css$2);
  $$unsubscribe_page();
  return `<ul class="mt-6 md:pl-6"><li>${each(data, ({ section, content }) => {
    return `<div class="mb-10"><div class="${escape(null_to_empty(style.section), true) + " svelte-1dhf63z"}">${escape(section)}</div>
				${each(content, (item) => {
      return `<a${add_attribute("href", item.link, 0)} class="${escape(null_to_empty(`${style.link} ${item.link === $page.url.pathname && style.active}`), true) + " svelte-1dhf63z"}"><span>${validate_component(item.icon || missing_component, "svelte:component").$$render($$result, {}, {}, {})}</span>
						<span class="${escape(null_to_empty(style.title), true) + " svelte-1dhf63z"}">${escape(item.title)}</span>
						${item.title == "Notifications" ? `${`...`}` : ``}
					</a>`;
    })}
			</div>`;
  })}</li>
</ul>`;
});
const SidebarHeader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="mt-5 h-20 items-center justify-start pl-4 text-white lg:pl-8">NyasaTickets
	<div class="text-sm text-gray-400">From HeavyAtom</div></div>`;
});
const Sidebar_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".scrollbar.svelte-1lb8cde::-webkit-scrollbar{width:0;background:transparent}.scrollbar.svelte-1lb8cde{-ms-overflow-style:none}",
  map: null
};
const Sidebar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $sidebarOpen, $$unsubscribe_sidebarOpen;
  $$unsubscribe_sidebarOpen = subscribe(sidebarOpen, (value) => $sidebarOpen = value);
  const style = {
    mobileOrientation: { start: "left-0", end: "right-0" }
  };
  let { mobileOrientation = "end" } = $$props;
  if ($$props.mobileOrientation === void 0 && $$bindings.mobileOrientation && mobileOrientation !== void 0)
    $$bindings.mobileOrientation(mobileOrientation);
  $$result.css.add(css$1);
  $$unsubscribe_sidebarOpen();
  return `<aside class="${escape(
    null_to_empty(`
			top-0
	    scrollbar
      bg-gray-900
      h-screen
      overflow-y-auto
      lg:bg-transparent lg:block lg:relative lg:w-64 lg:z-auto 
      ${style.mobileOrientation[mobileOrientation]}
      ${$sidebarOpen ? "absolute w-8/12 z-40 sm:w-5/12" : "hidden"}
   `),
    true
  ) + " svelte-1lb8cde"}"><div class="pb-32 lg:pb-6">${validate_component(SidebarHeader, "SidebarHeader").$$render($$result, {}, {}, {})}
		${validate_component(SidebarItems, "SidebarItems").$$render($$result, {}, {}, {})}</div>
</aside>`;
});
const Layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".background.svelte-1xq5poe{background-image:url('./mac.webp');background-size:cover;background-position:center}.content.svelte-1xq5poe{background-color:rgba(16 18 27 / 40%);backdrop-filter:blur(24px)}.main.svelte-1xq5poe{color:#f9fafb;background-color:rgba(16 18 27 / 40%);overflow:auto}.main.svelte-1xq5poe::-webkit-scrollbar{width:6px;border-radius:10px}.main.svelte-1xq5poe::-webkit-scrollbar-thumb{background:rgb(1 2 3 / 40%);border-radius:10px}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_sidebarOpen;
  $$unsubscribe_sidebarOpen = subscribe(sidebarOpen, (value) => value);
  $$result.css.add(css);
  $$unsubscribe_sidebarOpen();
  return `

<div class="background h-screen overflow-hidden w-full lg:p-4 svelte-1xq5poe"><div class="content h-screen overflow-hidden relative lg:rounded-2xl svelte-1xq5poe"><div class="flex items-start">${validate_component(Overlay, "Overlay").$$render($$result, {}, {}, {})}
			${validate_component(Sidebar, "Sidebar").$$render($$result, { mobileOrientation: "end" }, {}, {})}
			<div class="flex flex-col h-screen pl-0 w-full lg:space-y-4 lg:w-[calc(100%-16rem)]">${validate_component(TopBar, "TopBar").$$render($$result, {}, {}, {})}
				<main class="main h-screen pb-36 pt-4 px-2 md:pb-8 md:px-4 lg:px-6 svelte-1xq5poe">${slots.default ? slots.default({}) : ``}</main></div></div></div>
</div>`;
});
const Layout_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Layout, "Layout").$$render($$result, {}, {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
export {
  Layout_1 as default
};
