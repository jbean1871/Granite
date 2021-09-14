import "./ssoLoginStyles.css";

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
  id: "sso-login-header",
  name: "SSO Login Header",
  feature: "header",
  options: {
    header_text: "Log in with SSO",
    text_color: "#000000",
    font_size: "36",
    margin_bottom: "20",
  },
  records: [],
};
graniteHeader(resetHeader, resetTheme);
/*------------------------
Reset Form
-------------------------*/
const resetForm = {
  id: "sso-login-form",
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
    submit_label: "Log In",
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
      required: false,
      options: "",
      value: "",
      placeholder: "Email or Username",
      radio_style: "button",
      dependency_not_blank: false,
      dependency_values: null,
      dependency_field: null,
      length: null,
      classes: "g__auth-field",
    },
  ],
};
graniteForm(resetForm, resetTheme);
