import "./resetStyles.css";

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
const resetTheme = {
  primary: null,
  secondary: null,
  mode: "midnight",
};
/*------------------------
Reset Header
-------------------------*/
const resetHeader = {
  id: "reset-header",
  name: "Reset Password",
  feature: "header",
  options: {
    header_text: "Reset Password",
    text_color: "#000000",
    font_size: "36",
    margin_bottom: "20",
  },
  records: [],
};
graniteHeader(resetHeader, resetTheme);
/*------------------------
Reset Description
-------------------------*/
const resetDesc = {
  id: "reset-desc",
  name: "Sign in with",
  feature: "text",
  options: {
    text: "<p>Enter your email and we will send instructions on how to reset your password.</p>",
    font_color: "#B4B4B4",
    g_font_size: "16",
    text_align: "center",
    header_size: "h4",
  },
  records: [],
};
graniteText(resetDesc, resetTheme);
/*------------------------
Reset Form
-------------------------*/
const resetForm = {
  id: "reset-form",
  options: {
    title: "",
    action: "/",
    description: "",
    title_font_size: "40px",
    description_font_size: "20px",
    db_action: "",
    db_object: "",
    db_id: "",
    db_redirect: "",
    flash_message: "",
    form_id: "",
    button_1_label: "",
    button_1_href: "",
    submit_label: "Send Email",
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
    // Design
    field_bkg_color: "#FFFFFF",
    field_border_color: "#4b4b4b",
    field_border_width: "",
  },
  records: [
    {
      id: "email",
      name: "email",
      title: "",
      g_type: "text",
      required: true,
      options: "",
      value: "",
      placeholder: "Email address",
      classes: "g__auth-field",
    },
  ],
};
graniteForm(resetForm, resetTheme);
/*------------------------
Reset Description
-------------------------*/
const resetBack = {
  id: "reset-back",
  name: "Sign in with",
  feature: "text",
  options: {
    text: "<p>Go back to <a href='/sign_in'>login <i class='far fa-arrow-right'></i></a></p>",
    font_color: "#B4B4B4",
    g_font_size: "12",
    text_align: "center",
  },
  records: [],
};
graniteText(resetBack, resetTheme);
