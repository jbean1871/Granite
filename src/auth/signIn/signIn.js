import "./signInStyles.css";

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
/*------------------------
Theme
-------------------------*/
const theme = {
  primary: null,
  secondary: null,
  mode: "midnight",
};
/*------------------------
Login Header
-------------------------*/
const loginHeader = {
  id: "login-header",
  name: "Log Into My Account",
  feature: "header",
  options: {
    header_text: "Log Into My Account",
    text_color: "#000000",
    align_text: "center",
    font_size: "36",
    margin_bottom: "20",
  },
  records: [],
};
graniteHeader(loginHeader, theme);

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
  id: "sign-in-form",
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
    submit_label: "Submit",
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
      id: "username",
      name: "username",
      title: "",
      g_type: "text",
      required: true,
      options: "",
      value: "",
      placeholder: "Email or Username",
      classes: "g__auth-field",
    },
    {
      id: "password",
      name: "password",
      title: "",
      g_type: "password",
      required: true,
      options: "",
      value: "",
      show_password_option: true,
      placeholder: "Password",
      classes: "g__auth-field",
    },
  ],
};
graniteForm(loginForm, theme);

/*------------------------
No Account Link
-------------------------*/
const noAccountLink = {
  id: "no-account-link",
  name: "No Account Link",
  feature: "button",
  options: {
    btn_text: "Don’t have an account?",
    btn_url: "/sign_up",
    btn_color: "#FFFFFF",
    text_color: "#A1A1A1",
    text_color_hover: "#8d8d8d",
    border_color: "#FFFFFF",
    text_size: "12",
    btn_color_hover: "#FFFFFF",
    btn_classes: "",
    btn_disabled: true,
    btn_id: "",
    padding_top: "0",
    padding_bottom: "0",
    padding_left: "0",
    padding_right: "0",
    margin_top: "0",
    margin_bottom: "0",
    margin_left: "0",
    margin_right: "0",
  },
  records: [],
};
graniteButton(noAccountLink, theme);

/*------------------------
SSO Login Link
-------------------------*/
const ssoLoginLink = {
  id: "sso-link",
  name: "No Account Link",
  feature: "button",
  options: {
    btn_text: "Login With SSO",
    btn_url: "#",
    btn_color: "#FFFFFF",
    text_color: "#A1A1A1",
    text_color_hover: "#8d8d8d",
    border_color: "#FFFFFF",
    text_size: "12",
    btn_color_hover: "#FFFFFF",
    btn_classes: "",
    btn_disabled: true,
    btn_id: "",
    padding_top: "0",
    padding_bottom: "0",
    padding_left: "0",
    padding_right: "0",
    margin_top: "0",
    margin_bottom: "0",
    margin_left: "0",
    margin_right: "0",
  },
  records: [],
};
graniteButton(ssoLoginLink, theme);

/*------------------------
Forgot Password Link
-------------------------*/
const forgotPasswordLink = {
  id: "forgot-password-link",
  name: "Forgot Password Link",
  feature: "button",
  options: {
    btn_text: "Forgot Password?",
    btn_url: "/forgot_password",
    btn_color: "#FFFFFF",
    text_color: "#A1A1A1",
    text_color_hover: "#8d8d8d",
    border_color: "#FFFFFF",
    text_size: "12",
    btn_color_hover: "#FFFFFF",
    btn_classes: "",
    btn_disabled: true,
    btn_id: "",
    padding_top: "0",
    padding_bottom: "0",
    padding_left: "0",
    padding_right: "0",
    margin_top: "0",
    margin_bottom: "0",
    margin_left: "0",
    margin_right: "0",
  },
  records: [],
};
graniteButton(forgotPasswordLink, theme);
