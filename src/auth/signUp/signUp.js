import "./signUpStyles.css";

import graniteButton from "../../graniteFunctions/graniteButton.js";
import graniteCode from "../../graniteFunctions/graniteCode.js";
import graniteDivider from "../../graniteFunctions/graniteDivider.js";
import graniteFilter from "../../graniteFunctions/graniteFilter.js";
import graniteForm from "../../graniteFunctions/graniteForm.js";
import graniteGauge from "../../graniteFunctions/graniteGauge.js";
import graniteHeader from "../../graniteFunctions/graniteHeader.js";
import graniteImage from "../../graniteFunctions/graniteImage.js";
import graniteProgressBar from "../../graniteFunctions/graniteProgressBar.js";
import graniteSearch from "../../graniteFunctions/graniteSearch.js";
import graniteSelect from "../../graniteFunctions/graniteSelect.js";
import graniteScorecard from "../../graniteFunctions/graniteScorecard.js";
import graniteText from "../../graniteFunctions/graniteText.js";
/*------------------------
Theme
-------------------------*/
const theme = {
  primary: null,
  secondary: null,
  mode: "midnight",
};
/*------------------------
Reset Header
-------------------------*/
const signUpHeader = {
  id: "sign-up-header",
  name: "Sign Up",
  feature: "header",
  options: {
    header_text: "Let’s Get Started",
    text_color: "#000000",
    align_text: "center",
    font_size: "36",
    margin_bottom: "20",
  },
  records: [],
};
graniteHeader(signUpHeader, theme);

/*------------------------
Login SSO Header
-------------------------*/
const loginSsoHeader = {
  id: "login-sso-header",
  name: "Sign in with",
  feature: "header",
  options: {
    header_text: "Sign in with",
    text_color: "#B4B4B4",
    font_size: "16",
    header_size: "h4",
  },
  records: [],
};
graniteHeader(loginSsoHeader, theme);

/*------------------------
Login Form
-------------------------*/
const loginForm = {
  id: "sign-up-form",
  options: {
    title: "",
    addapptation_action: "/",
    description: "",
    title_font_size: "40px",
    description_font_size: "20px",
    db_action: "",
    db_object: "",
    db_id: "g_sf2dsdsf33",
    db_redirect: "",
    flash_message: "",
    form_id: "",
    button_1_label: "",
    button_1_href: "",
    submit_label: "Create Account",
    cancel_label: "Cancel",
    max_width: "600px",
    enctype: "application/x-www-form-urlencoded",
    method: "POST",
    visibility_settings: "",
    hide_submit: false,
    allow_cancel: false,
    activate_recaptcha: false,
    auto_superscript: false,
    autosave: false,
    action: "/",
    // Design
    field_bkg_color: "#FFFFFF",
    field_border_color: "#4b4b4b",
    field_border_width: "",
  },
  records: [
    {
      id: "full-name",
      name: "name",
      title: "",
      g_type: "text",
      required: true,
      options: "",
      value: "",
      placeholder: "Full Name",
      dependency_not_blank: false,
      dependency_values: null,
      dependency_field: null,
      length: null,
      classes: "g__auth-field",
    },
    {
      id: "email",
      name: "email",
      title: "",
      g_type: "email",
      required: true,
      options: "",
      value: "",
      placeholder: "Email",
      dependency_not_blank: false,
      dependency_values: null,
      dependency_field: null,
      length: null,
      classes: "g__auth-field",
    },
    {
      id: "password",
      name: "password",
      title: "",
      g_type: "password",
      required: true,
      pattern: "^(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&]){8,}$",
      options: "",
      value: "",
      show_password_option: true,
      placeholder: "Password",
      radio_style: "button",
      dependency_not_blank: false,
      dependency_values: null,
      dependency_field: null,
      length: null,
      classes: "g__auth-field",
      id: "a__sign-up-password",
    },
  ],
};
graniteForm(loginForm, theme);

/*------------------------
Email Strength Validation
-------------------------*/
// Build the check items
const passCont = document.querySelector(".g__password_container");
const validationCont = document.createElement("div");
validationCont.classList.add("a__email-req-list");
const lowercase = document.createElement("div");

lowercase.classList.add("a__validate-item");
lowercase.id = "a__pass-lowercase";
lowercase.innerHTML =
  "<i class='fas fa-circle a__circle-indicator a__lower-icon'></i> One lowercase letter";
validationCont.appendChild(lowercase);

const uppercase = document.createElement("div");
uppercase.classList.add("a__validate-item");
uppercase.id = "a__pass-uppercase";
uppercase.innerHTML =
  "<i class='fas fa-circle a__circle-indicator a__upper-icon'></i> One uppercase letter";
validationCont.appendChild(uppercase);

const length = document.createElement("div");
length.classList.add("a__validate-item");
length.id = "a__pass-length";
length.innerHTML =
  "<i class='fas fa-circle a__circle-indicator a__length-icon'></i> 8 character minimum";
validationCont.appendChild(length);

const symbols = document.createElement("div");
symbols.classList.add("a__validate-item");
symbols.id = "a__pass-symbols";
symbols.innerHTML =
  "<i class='fas fa-circle a__circle-indicator a__symbol-icon'></i> One symbol";
validationCont.appendChild(symbols);

passCont.after(validationCont);

// Validate each item on keyup
const userPassword = document.getElementById("a__sign-up-password");
const lowerIcon = document.querySelector(".a__lower-icon");
const upperIcon = document.querySelector(".a__upper-icon");
const lengthIcon = document.querySelector(".a__length-icon");
const symbolIcon = document.querySelector(".a__symbol-icon");
userPassword.addEventListener("keyup", () => {
  let password = userPassword.value;
  //Lowercase Check
  const lowercaseLetters = /[a-z]/g;
  if (password.match(lowercaseLetters)) {
    lowerIcon.style.color = "#65C963";
  } else {
    lowerIcon.style.color = "#BFBFBF";
  }
  //Uppercase Check
  const uppercaseLetters = /[A-Z]/g;
  if (password.match(uppercaseLetters)) {
    upperIcon.style.color = "#65C963";
  } else {
    upperIcon.style.color = "#BFBFBF";
  }
  //Length Check
  if (password.length >= 8) {
    lengthIcon.style.color = "#65C963";
  } else {
    lengthIcon.style.color = "#BFBFBF";
  }
  const symbol = /[$-/:-?{-~!"^_`\[\]]/g;
  if (password.match(symbol)) {
    symbolIcon.style.color = "#65C963";
  } else {
    symbolIcon.style.color = "#BFBFBF";
  }
});
