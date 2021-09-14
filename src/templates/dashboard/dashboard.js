import "./dashboardStyles.css";

import graniteTabs from "../../graniteFunctions/graniteTabs.js";
/*------------------------
Theme
-------------------------*/
const theme = {
  primary: null,
  secondary: null,
  mode: "midnight",
};
/*------------------------
Dashboard Tabs
-------------------------*/
let dashboardTabs = {
  id: "dashboard-tabs",
  options: {
    g_style: "line",
    g_align_tabs: "left",
    g_font_size: "30px",
    g_font_color: "#5d5d5d",
    g_font_hover_color: "",
    g_icon_size: "",
    g_step_number_color: "",
    g_title_size: "20px",
    g_title_color: "",
    g_description_size: "12px",
    g_description_color: "",
    g_highlight_color: "",
    g_background_color: "",
    g_background_active_color: "#ffffff",
    g_background_hover_color: "",
    g_align: "center",
    g_align_icon: "",
    g_direction: false,
    g_padding: "10px 40px",
    g_margin: "0",
    g_border_width: "",
    g_border_color: "red",
    g_border_radius: "",
    g_full_width: true,
    padding_top: "0",
    padding_bottom: "0",
    margin_top: "0",
    margin_bottom: "0",
    g_classes: "",
    g_cursor_disabled: false,
    g_action: "hash_builder",
  },
  records: [
    {
      name: "Overview",
      desc: "",
      icon: "",
      href: "?overview",
    },
    {
      name: "Planner",
      desc: "",
      disabled: false,
      href: "?planner",
    },
    {
      name: "Reports",
      desc: "",
      href: "?reports",
    },
    {
      name: "Pipeline Health",
      desc: "",
      href: "?pipeline-health",
    },
  ],
};
graniteTabs(dashboardTabs, theme);

/*------------------------
Dashboard Tabs
-------------------------*/
let bodyTabs = {
  id: "a__main-sidebar",
  options: {
    g_style: "block",
    g_align_tabs: "left",
    g_font_size: "16",
    g_font_color: "#5d5d5d",
    g_font_hover_color: "#a4a4a4",
    g_icon_size: "",
    g_step_number_color: "",
    g_title_size: "20px",
    g_title_color: "",
    g_description_size: "12px",
    g_description_color: "",
    g_highlight_color: "#5D50E6",
    g_background_color: "#ffffff",
    g_background_active_color: "#F7F6FE",
    g_background_hover_color: "#F7F6FE",
    g_align: "left",
    g_align_icon: "flex-start",
    g_direction: true,
    g_padding: "10px 40px",
    g_margin: "0",
    g_border_width: "",
    g_border_color: "red",
    g_border_radius: "",
    g_full_width: true,
    padding_top: "0",
    padding_bottom: "0",
    margin_top: "0",
    margin_bottom: "0",
    g_classes: "",
    g_cursor_disabled: false,
    g_action: "hash_builder",
  },
  records: [
    {
      name: "Profile",
      desc: "",
      icon: "",
      href: "?profile",
    },
    {
      name: "Account Settings",
      desc: "",
      disabled: false,
      href: "?account-settings",
    },
    {
      name: "Permissions",
      desc: "",
      href: "?permissions",
    },
    {
      name: "Billing",
      desc: "",
      href: "?billing",
    },
    {
      name: "Data Connections",
      desc: "",
      href: "?data-connections",
    },
    {
      name: "Privacy",
      desc: "",
      href: "?privacy",
    },
  ],
};
graniteTabs(bodyTabs, theme);

/*------------------------
Account Dropdown - Desktop
-------------------------*/
let dropdownMenus = document.querySelectorAll(".a__dropdown");
dropdownMenus.forEach((menu) => {
  const dropdownContainer = menu.querySelector(".a__dropdown-container");
  console.log(dropdownContainer);
  menu.addEventListener("click", (e) => {
    dropdownContainer.classList.toggle("a__active-dropdown");
  });
});

const mobileMenu = document.querySelector(".a__hamburger-container");
const sideMenu = document.querySelector(".a__desktop-header");

mobileMenu.addEventListener("click", () => {
  sideMenu.classList.toggle("a__active-mobile-menu");
});
