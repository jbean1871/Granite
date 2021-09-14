import Granite from "./granite";
import Logic from "./logic";

import "./styles/style.css";
import "./styles/style.scss";
import "./styles/style.sass";

const reducer = (accumulator, currentValue) => accumulator + currentValue;
function getRandomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let team = {
  scorecardOptions: {
    type: "scorecard",
    padding: "15px",
    margin: "0",
    bkg_img: "",
    bkg_size: "",
    bkg_repeat: "",
    bkg_position: "center",
    bkg_color: "",
  },
};
const names = ["Emily Moore", "David Therrien", "Sarah Maxwell"];
const months = [
  "january",
  "february",
  "march",
  "april",
  "may",
  "june",
  "july",
  "august",
  "september",
  "october",
  "november",
  "december",
];

names.forEach((name, employeeNum) => {
  let formatName = name.replace(/ /g, "_").toLowerCase();
  team[formatName] = {};
  let actual;
  // let teamAvg;
  switch (formatName) {
    case "emily_moore":
      actual = [2.7, 2.2, 2.5, 2.4, 2.3, 2.2, 2.1, 1.5, 1.8, 2.2, 2.3, 2.3];
      break;
    case "david_therrien":
      actual = [1.7, 1.8, 1.5, 1.9, 1.3, 1.2, 2.1, 1.5, 1.8, 1.8, 2.0, 1.8];
    case "sarah_maxwell":
      actual = [2.7, 2.2, 2.5, 2.4, 2.3, 2.2, 2.1, 1.5, 1.8, 2.2, 2.3, 2.3];
      break;
    default:
      console.log(`Sorry, Did not find a matching name.`);
  }
  // Find Personal Average
  let monthArr = actual.slice(0, employeeNum + 1);
  let total = 0;
  for (let i = 0; i < monthArr.length; i++) {
    total += monthArr[i];
  }
  let personalAvg = parseInt((total / monthArr.length).toFixed(2));

  for (var i = 1; i <= 4; i++) {
    let quarter = "q" + i;
    team[formatName][quarter] = {};
    months.forEach((month, index) => {
      /*----------------------
     Month
    ------------------------ */
      team[formatName][quarter][month] = [];
      const header = {
        type: "header",
        background: "#F5F5F5",
        children: [
          { value: `${quarter} - ${month}`, border_right: "1px solid #EAEAEA" },
          { value: "Actual" },
          { value: `${name} Avg` },
          { value: "Team Avg" },
          { value: "Year Actual" },
          { value: `Year Avg`, filter: true },
          { value: "Year Team Avg" },
          { value: "Notes" },
        ],
      };

      // SALES ROW

      // Personal Year Total
      let personalYearTotal = 0;
      for (let i = 0; i < monthArr.length; i++) {
        personalYearTotal += monthArr[i];
      }

      //Team Stats

      let teamAct = [
        6.8, 12.5, 19.5, 26.8, 39.5, 45.8, 52.0, 60.1, 72.4, 79.4, 90.2, 103.4,
      ];
      let randomNum = Math.floor(Math.random() * (12 - 0)) + 0;
      let sales = {
        type: "row",
        background: "",
        children: [
          { value: "Sales", border_right: "1px solid #EAEAEA" },
          { value: actual[index], format: "custom", symbol: "M" },
          { value: personalAvg, format: "custom", symbol: "M" },
          {
            value: Math.floor(Math.random() * (3 - 2 + 1) + 2),
            format: "custom",
            symbol: "M",
            border_right: "1px solid #EAEAEA",
          },
          { value: teamAct[index], format: "custom", symbol: "M" },
          { value: personalAvg, format: "custom", symbol: "M" },
          { value: 78.5, format: "custom", symbol: "M" },
          { value: "<i class='far fa-comment'></i>" },
        ],
      };

      // PROPOSAL ROW
      let proposals = {
        type: "row",
        background: "",
        children: [
          { value: "Proposals", border_right: "1px solid #EAEAEA" },
          { value: getRandomNumberBetween(8, 16) },
          { value: getRandomNumberBetween(6, 12) },
          {
            value: getRandomNumberBetween(6, 8),
            border_right: "1px solid #EAEAEA",
          },
          { value: 96 },
          { value: 137 },
          { value: 142 },
          { value: "<i class='far fa-comment'></i>" },
        ],
      };

      // New Sales ROW
      let newSales = {
        type: "row",
        background: "",
        children: [
          { value: "New Sales", border_right: "1px solid #EAEAEA" },
          { value: Math.floor(Math.random() * (5 - 0)) },
          { value: getRandomNumberBetween(1, 3) },
          {
            value: Math.floor(Math.random() * (9 - 3 + 1) + 3),
            border_right: "1px solid #EAEAEA",
          },
          { value: 29 },
          { value: Math.floor(Math.random() * (350 - 25 + 1) + 25) },
          { value: 42 },
          { value: "<i class='far fa-comment'></i>" },
        ],
      };

      // Meetings ROW
      let meetings = {
        type: "row",
        background: "",
        children: [
          { value: `Meetings`, border_right: "1px solid #EAEAEA" },
          { value: getRandomNumberBetween(25, 35) },
          { value: getRandomNumberBetween(25, 29) },
          {
            value: getRandomNumberBetween(20, 35),
            border_right: "1px solid #EAEAEA",
            action: "value",
            action_condition: "Greater Than",
            action_value: 32,
            action_execute: "Alert",
            action_message: `${name} had more than 32 meetings during the month of ${month}`,
          },
          { value: 1583 },
          { value: 1435 },
          { value: 1391 },
          { value: "<i class='far fa-comment'></i>" },
        ],
      };

      // Interactions ROW
      let interactions = {
        type: "row",
        background: "",
        children: [
          { value: "Interactions", border_right: "1px solid #EAEAEA" },
          { value: getRandomNumberBetween(50, 120) },
          { value: getRandomNumberBetween(45, 90) },
          {
            value: getRandomNumberBetween(45, 75),
            border_right: "1px solid #EAEAEA",
          },
          { value: 3567 },
          { value: 1693 },
          { value: 1543 },
          { value: "<i class='far fa-comment'></i>" },
        ],
      };
      team[formatName][quarter][month].push(header);
      team[formatName][quarter][month].push(sales);
      team[formatName][quarter][month].push(proposals);
      team[formatName][quarter][month].push(newSales);
      team[formatName][quarter][month].push(meetings);
      team[formatName][quarter][month].push(interactions);
    });
    /*----------------------
     Quarterly Data
    ------------------------ */

    team[formatName][quarter].data = [];
    const qtheader = {
      type: "header",
      background: "#F5F5F5",
      children: [
        { value: quarter, border_right: "1px solid #EAEAEA" },
        { value: "Actual" },
        { value: `Avg` },
        { value: "Team Avg", border_right: "1px solid #EAEAEA" },
        { value: "Year Actual" },
        { value: `Year Avg`, filter: true },
        { value: "Year Team Avg" },
        { value: "Notes" },
      ],
    };
    team[formatName][quarter].data.push(qtheader);
    let qtsales = {
      type: "row",
      background: "",
      children: [
        { value: "Sales", border_right: "1px solid #EAEAEA" },
        {
          value: quarterlyActual(actual, quarter),
          format: "custom",
          symbol: "M",
        },
        { value: personalAvg * 3, format: "custom", symbol: "M" },
        {
          value: Math.floor(Math.random() * (3 - 2 + 1) + 2),
          format: "custom",
          symbol: "M",
          border_right: "1px solid #EAEAEA",
        },
        { value: 103.4, format: "custom", symbol: "M" },
        { value: 87.2, format: "custom", symbol: "M" },
        { value: 22.4, format: "custom", symbol: "M" },
        { value: "<i class='far fa-comment'></i>" },
      ],
    };
    team[formatName][quarter].data.push(qtsales);
    // PROPOSAL ROW
    let qtProposals = {
      type: "row",
      background: "",
      children: [
        { value: "Proposals", border_right: "1px solid #EAEAEA" },
        { value: Math.floor(Math.random() * (50 - 30)) },
        { value: Math.floor(Math.random() * (25 - 15)) },
        {
          value: Math.floor(Math.random() * (100 - 70)),
          border_right: "1px solid #EAEAEA",
        },
        { value: Math.floor(Math.random() * (16 - 4)) * (i + 1) },
        { value: Math.floor(Math.random() * (140 - 128 + 1) + 128) },
        { value: Math.floor(Math.random() * (1029 - 928 + 1) + 928) },
        { value: "<i class='far fa-comment'></i>" },
      ],
    };
    team[formatName][quarter].data.push(qtProposals);

    // New Sales ROW
    let qtNewSales = {
      type: "row",
      background: "",
      children: [
        { value: "New Sales", border_right: "1px solid #EAEAEA" },
        { value: getRandomNumberBetween(10, 22) },
        { value: getRandomNumberBetween(14, 21) },
        {
          value: getRandomNumberBetween(20, 30),
          border_right: "1px solid #EAEAEA",
        },
        { value: 29 },
        { value: getRandomNumberBetween(100, 350) },
        { value: getRandomNumberBetween(15, 30) },
        { value: "<i class='far fa-comment'></i>" },
      ],
    };
    team[formatName][quarter].data.push(qtNewSales);

    // Meetings ROW
    let qtMeetings = {
      type: "row",
      background: "",
      children: [
        { value: "Meetings", border_right: "1px solid #EAEAEA" },
        { value: getRandomNumberBetween(100, 200) },
        { value: getRandomNumberBetween(100, 150) },
        {
          value: getRandomNumberBetween(120, 160),
          border_right: "1px solid #EAEAEA",
          action: "value",
          action_condition: "Greater Than",
          action_value: 150,
          action_execute: "Alert",
          action_message: `${name} had more than 150 meetings during ${quarter}`,
        },
        { value: 1583 },
        { value: 1435 },
        { value: 1391 },
        { value: "<i class='far fa-comment'></i>" },
      ],
    };
    team[formatName][quarter].data.push(qtMeetings);

    // Interactions ROW
    let qtInteractions = {
      type: "row",
      background: "",
      children: [
        { value: "Interactions", border_right: "1px solid #EAEAEA" },
        { value: getRandomNumberBetween(200, 350) },
        { value: getRandomNumberBetween(275, 400) },
        {
          value: getRandomNumberBetween(250, 324),
          border_right: "1px solid #EAEAEA",
        },
        { value: 3567 },
        { value: 1693 },
        { value: 1543 },
        { value: "<i class='far fa-comment'></i>" },
      ],
    };
    team[formatName][quarter].data.push(qtInteractions);

    // Quarterly Progress Bar
    team[formatName][quarter].progressBar = quarterlyProgress(
      name,
      quarter,
      qtsales.children[1].value
    );
    // Quarterly Goal
    team.goals = {
      q1: {
        value: 18.4,
        goal: 22.5,
      },
      q2: {
        value: 25.25,
        goal: 23.8,
      },
      q3: {
        value: 27.95,
        goal: 25.0,
      },
      q4: {
        value: 30.15,
        goal: 28.3,
      },
    };
  }
});
console.log(team);

function quarterlyActual(actual, quarter) {
  switch (quarter) {
    case "q1":
      return (actual[0] + actual[1] + actual[2]).toFixed(2);
      break;
    case "q2":
      return (actual[3] + actual[4] + actual[5]).toFixed(2);
      break;
    case "q3":
      return (actual[6] + actual[7] + actual[8]).toFixed(2);
      break;
    case "q4":
      return (actual[9] + actual[10] + actual[11]).toFixed(2);
      break;
  }
}
function quarterlyProgress(name, quarter, sales) {
  switch (quarter) {
    case "q1":
      return {
        label: `${name}'s Quarterly Goal`,
        value: parseFloat(sales),
        goal: 6,
        max: "100",
        linear_gradient: true,
        gradient: "#B3F0FD, #73DDFF, #2EC5FF, #24A9FF",
      };
      break;
    case "q2":
      return {
        label: `${name}'s Quarterly Goal`,
        value: parseFloat(sales),
        goal: 6,
        max: "100",
        linear_gradient: true,
        gradient: "#B3F0FD, #73DDFF, #2EC5FF, #24A9FF",
      };
      break;
    case "q3":
      return {
        label: `${name}'s Quarterly Goal`,
        percent: 50,
        value: parseFloat(sales),
        goal: 6,
        max: "100",
        linear_gradient: true,
        gradient: "#B3F0FD, #73DDFF, #2EC5FF, #24A9FF",
      };
      break;
    case "q4":
      return {
        label: `${name}'s Quarterly Goal`,
        value: parseFloat(sales),
        goal: 6,
        max: "100",
        linear_gradient: true,
        gradient: "#B3F0FD, #73DDFF, #2EC5FF, #24A9FF",
      };
      break;
  }
}

let granite = new Granite({
  id: "granite",
  blocks: [
    {
      id: "page-header",
      name: "Page Header",
      feature: "header",
      options: {
        header_text: "2020 Team Overview",
        text_color: "#5d5d5d",
        font_size: "30",
        margin_left: "0",
      },
      records: [],
    },
    {
      id: "quarterly_results",
      name: "Quarterly Results",
      feature: "header",
      options: {
        header_text: "Quarterly Results",
        text_color: "#5d5d5d",
        font_size: "21",
        margin_left: "0",
      },
      records: [],
    },
    {
      id: "granite_sc01",
      name: "scorecard Test",
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
        pattern: true,
      },
      records: team.emily_moore.q1.data,
    },
    {
      id: "employee_filter",
      name: "Employee Select",
      feature: "filter",
      options: {
        select_id: "granite_select",
        select_options: ["Emily Moore", "David Therrien", "Sarah Maxwell"],
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
    },
    {
      id: "team_goal",
      name: "Team Goal",
      feature: "progressBar",
      options: {
        label: "Team Quarterly Goal",
        value: 18.4,
        goal: 22.5,
        max: "100",
        linear_gradient: true,
        gradient: "#6A84FF, #876AFA, #A64FF4",
      },
      records: [],
    },
    {
      id: "emilys_goal",
      name: "Emily's Quarterly Goal",
      feature: "progressBar",
      options: {
        label: "Emily's Quarterly Goal",
        value: 1.6,
        goal: 2.3,
        max: "100",
        linear_gradient: true,
        gradient: "#B3F0FD, #73DDFF, #2EC5FF, #24A9FF",
      },
      records: [],
    },
    {
      id: "btn-team",
      name: "Team Member View",
      feature: "button",
      options: {
        btn_id: "team_view",
        btn_text: "Team Member View",
        text_size: "12",
        btn_color: "#f0f0f0",
        btn_color_hover: "#b8e7ff",
        btn_url: "?view=team_member_view&name=emily-moore",
        text_color: "#5d5d5d",
        text_color_hover: "#5d5d5d",
        btn_color_active: "#b8e7ff",
        text_color_active: "#5d5d5d",
        border_width: "0",
        border_radius: "50",
        border_color: "#EAEAEA",
        padding_top: "5",
        padding_bottom: "5",
        padding_left: "15",
        padding_right: "15",
        margin_top: "",
        margin_bottom: "",
        margin_left: "5",
        margin_right: "5",
      },
      records: [],
    },
    {
      id: "btn-manager",
      name: "Manager View",
      feature: "button",
      options: {
        btn_text: "Manager View",
        text_size: "12",
        btn_url: "?view=manager_view",
        btn_color: "#f0f0f0",
        btn_color_hover: "#b8e7ff",
        text_color: "#5d5d5d",
        text_color_hover: "#5d5d5d",
        btn_color_active: "#b8e7ff",
        text_color_active: "#5d5d5d",
        border_width: "0",
        border_radius: "50",
        border_color: "#EAEAEA",
        padding_top: "5",
        padding_bottom: "5",
        padding_left: "15",
        padding_right: "15",
        margin_top: "",
        margin_bottom: "",
        margin_left: "5",
        margin_right: "5",
      },
      records: [],
    },
    {
      id: "quarter_filter",
      name: "Quarter Filter",
      feature: "filter",
      options: {
        select_id: "quarter-seletor",
        table_id: "",
        select_options: ["Q1", "Q2", "Q3", "Q4"],
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
    },
    {
      id: "month_filter",
      name: "Month Filter",
      feature: "filter",
      options: {
        select_id: "month_selector",
        table_id: "",
        select_options: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ],
        placeholder: "Select Month",
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
    },
    {
      id: "pipeline-header",
      name: "Pipeline Header",
      feature: "header",
      options: {
        header_text: "My Open Opportunities Pipeline",
        text_color: "#5d5d5d",
        font_size: "21",
        margin_left: "0",
      },
      records: [],
    },
    {
      id: "pipeline-search",
      name: "Pipeline Search",
      feature: "search",
      options: {
        table_id: "pipeline-table",
        padding_top: "8",
        padding_bottom: "8",
        padding_left: "28",
        padding_right: "5",
        margin_top: "0",
        margin_bottom: "0",
        margin_left: "0",
        margin_right: "0",
      },
      records: [],
    },
    {
      id: "pipeline-table",
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
          background: "#F5F5F5",
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
            { value: "0-3K" },
            { value: 83 },
            { value: 151.2 },
            { value: 221.0 },
            { value: "<i class='far fa-comment'></i>" },
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
            { value: "3-5K" },
            { value: 39 },
            { value: 36.0 },
            { value: 63.1 },
            { value: "<i class='far fa-comment'></i>" },
          ],
        },
        {
          type: "row",
          background: "",
          children: [
            { value: "3-50K" },
            { value: 12 },
            { value: 32.4 },
            { value: 45.6 },
            { value: "<i class='far fa-comment'></i>" },
          ],
        },
        {
          type: "row",
          background: "",
          children: [
            { value: "50-100K" },
            { value: 14 },
            { value: 40.7 },
            { value: 48.6 },
            { value: "<i class='far fa-comment'></i>" },
          ],
        },
        {
          type: "row",
          background: "",
          children: [
            { value: "100-500K" },
            { value: 6 },
            { value: 21 },
            { value: 21.2 },
            { value: "<i class='far fa-comment'></i>" },
          ],
        },
        {
          type: "row",
          background: "",
          children: [
            { value: "150K-200M" },
            { value: 6 },
            { value: 23 },
            { value: 9.7 },
            { value: "<i class='far fa-comment'></i>" },
          ],
        },
        {
          type: "row",
          background: "",
          children: [
            { value: "2-5M" },
            { value: 3 },
            { value: 10.4 },
            { value: 5.0 },
            { value: "<i class='far fa-comment'></i>" },
          ],
        },
        {
          type: "row",
          background: "",
          children: [
            { value: "+5M" },
            { value: 0 },
            { value: 9.4 },
            { value: 4.9 },
            { value: "<i class='far fa-comment'></i>" },
          ],
        },
      ],
    },
  ],
});

Logic(team);
