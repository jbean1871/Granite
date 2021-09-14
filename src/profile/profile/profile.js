import "../../templates/dashboard/dashboardStyles.css";
import "./profile.css";

import template from "../../templates/dashboard/dashboard.js";
import graniteForm from "../../graniteFunctions/graniteForm.js";
/*------------------------
Theme
-------------------------*/
const theme = {
  primary: null,
  secondary: null,
  mode: "midnight",
};
/*------------------------
About Me Form
-------------------------*/
const aboutMeForm = {
  id: "a__about-me-form",
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
    allow_cancel: true,
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
      id: "name",
      name: "name",
      label: "name",
      title: "Name",
      g_type: "text",
      required: true,
      options: "",
      value: "",
      placeholder: "",
      dependency_not_blank: false,
      dependency_values: null,
      dependency_field: null,
      length: null,
      classes: "g__auth-field",
    },
    {
      id: "email",
      name: "email",
      title: "Email",
      g_type: "email",
      required: true,
      options: "",
      value: "",
      placeholder: "",
      dependency_not_blank: false,
      dependency_values: null,
      dependency_field: null,
      length: null,
      classes: "g__auth-field",
    },
    {
      id: "job-title",
      name: "job-title",
      title: "Job Title",
      g_type: "text",
      required: true,
      pattern: "",
      options: "",
      value: "",
      show_password_option: true,
      placeholder: "",
      dependency_not_blank: false,
      dependency_values: null,
      dependency_field: null,
      length: null,
      classes: "g__auth-field",
      id: "a__sign-up-password",
    },
  ],
};
graniteForm(aboutMeForm, theme);
