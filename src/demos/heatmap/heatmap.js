import "../../templates/dashboard/dashboardStyles.css";
import "./heatmap.css";

import template from "../../templates/dashboard/dashboard.js";
import graniteHeatmap from "../../graniteFunctions/graniteHeatmap.js";
import graniteFilter from "../../graniteFunctions/graniteFilter.js";
import graniteScorecard from "../../graniteFunctions/graniteScorecard.js";
import { heatmap } from "../../jsonSamples/heatmap.js";
import { theme } from "../../jsonSamples/theme.js";

graniteHeatmap(heatmap, theme);

const selectManager = {
  id: "select-manager",
  name: "Select Manager Filter",
  feature: "filter",
  options: {
    select_id: "granite_select",
    select_options: ["Emily Moore", "David Therrien", "Sarah Maxwell"],
    placeholder: "Select Manager",
    padding_top: "5",
    padding_bottom: "5",
    padding_left: "0",
    padding_right: "5",
    margin_top: "0",
    margin_bottom: "0",
    margin_left: "0",
    margin_right: "10",
  },
  records: [],
};

graniteFilter(selectManager, theme);

const riskyScorecard = {
  id: "risky-scorecard",
  name: "Pipeline",
  feature: "scorecard",
  options: {
    type: "scorecard",
    padding: "15px",
    margin: "0",
    bkg_img: "",
    bkg_size: "",
    bkg_repeat: "",
    bkg_position: "center",
    bkg_color: "",
  },
  records: [
    {
      type: "header",
      background: "#ffffff",
      children: [
        { value: "Name" },
        { value: "Item" },
        { value: "Current" },
        { value: "Team Average" },
        { value: "" },
      ],
    },
    {
      type: "row",
      background: "",
      children: [
        { value: "Parker Ramey" },
        { value: "Missing email addresses" },
        { value: 12 },
        { value: 12 },
        { value: "<button class='a__nudge-btn'>Nudge &#128073;</button>" },
      ],
    },
    {
      type: "row",
      background: "",
      children: [
        { value: "Lily Kim" },
        { value: "Tasks completed" },
        { value: 2 },
        { value: 17 },
        { value: "<button class='a__nudge-btn'>Nudge &#128073;</button>" },
      ],
    },
    {
      type: "row",
      background: "",
      children: [
        { value: "Sarah Jones" },
        { value: "Neglected opportunities" },
        { value: 5 },
        { value: 1 },
        { value: "<button class='a__nudge-btn'>Nudge &#128073;</button>" },
      ],
    },
  ],
};

graniteScorecard(riskyScorecard, theme);

const addColumn = document.querySelector(".g__td-add-header");
addColumn.addEventListener("click", () => {
  alert("Add Column Modal");
});
