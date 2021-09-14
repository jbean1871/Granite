import Granite from "./granite";
import GraniteBlock from "./GraniteBlock.js";

export default function logic(team) {
  let employee = document.getElementById("granite_select").value;
  let quarter = document.getElementById("quarter-seletor").value;
  let month = document.getElementById("month_selector").value;
  const graniteTheme = {
    primary: null,
    secondary: null,
    mode: "midnight",
  };

  let monthSelectOptions = {
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
  };

  let employeeSel = document.getElementById("granite_select");
  employeeSel.addEventListener("change", (e) => {
    let name = e.target.value;
    employee = e.target.value;
    let scorecardChange = new GraniteBlock(
      "scorecard",
      "granite_sc01",
      "scorecard Test",
      team.scorecardOptions,
      team[name][quarter].data,
      graniteTheme
    );
    let progressBar = new GraniteBlock(
      "progressBar",
      "emilys_goal",
      "Emily's Progress",
      team[employee][quarter].progressBar,
      [],
      graniteTheme
    );
    let qtrFilter = new GraniteBlock(
      "filter",
      "quarter_filter",
      "Quarter Filter",
      {
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
      [],
      graniteTheme
    );

    scorecardChange.internalAttach();
    progressBar.internalAttach();
    qtrFilter.internalAttach();
    quarterFilter();
    EmployeeStats();

    // generalStats(name);
  });
  quarterFilter();
  function quarterFilter() {
    let quarterSel = document.getElementById("quarter-seletor");
    quarterSel.addEventListener("change", (e) => {
      quarterSel = e.target.value;
      let scorecardChange = new GraniteBlock(
        "scorecard",
        "granite_sc01",
        "scorecard Test",
        team.scorecardOptions,
        team[employee][quarterSel].data,
        graniteTheme
      );
      scorecardChange.internalAttach();
      switch (quarterSel) {
        case "q1":
          monthSelectOptions.options.select_options = [
            "January",
            "February",
            "March",
          ];
          break;
        case "q2":
          monthSelectOptions.options.select_options = ["April", "May", "June"];
          break;
        case "q3":
          monthSelectOptions.options.select_options = [
            "July",
            "August",
            "September",
          ];
          break;
        case "q4":
          monthSelectOptions.options.select_options = [
            "October",
            "November",
            "December",
          ];
          break;
      }
      let monthFilter = new GraniteBlock(
        monthSelectOptions.feature,
        monthSelectOptions.id,
        monthSelectOptions.name,
        monthSelectOptions.options,
        [],
        graniteTheme
      );
      monthFilter.internalAttach();

      let progressBar = new GraniteBlock(
        "progressBar",
        "emilys_goal",
        "Emily's Progress",
        team[employee][quarterSel].progressBar,
        [],
        graniteTheme
      );
      progressBar.internalAttach();

      let progressBarTeam = new GraniteBlock(
        "progressBar",
        "team_goal",
        "Team Goal",
        {
          label: "Team Quarterly Goal",
          value: team.goals[quarterSel].value,
          goal: team.goals[quarterSel].goal,
          max: "100",
          linear_gradient: true,
          gradient: "#6A84FF, #876AFA, #A64FF4",
        },
        [],
        graniteTheme
      );
      progressBarTeam.internalAttach();

      monthSelector();
    });
  }
  monthSelector();
  function monthSelector() {
    let monthSel = document.getElementById("month_selector");
    monthSel.addEventListener("change", (e) => {
      let monthChange = e.target.value;
      month = e.target.value;
      console.log(monthChange);
      let scorecardChange = new GraniteBlock(
        "scorecard",
        "granite_sc01",
        "scorecard Test",
        team.scorecardOptions,
        team[employee][quarter][monthChange],
        graniteTheme
      );
      scorecardChange.internalAttach();
    });
  }

  //Button Active State
  let btnArr = document.querySelectorAll(".g__elm_btn");
  let url_string = window.location.href.toLowerCase();
  let url = new URL(url_string);
  var view = url.searchParams.get("view");
  var name = url.searchParams.get("name");
  btnArr.forEach((btn) => {
    let value = btn.innerText.replace(/ /g, "_").toLowerCase();
    if (view === value) {
      btn.classList.add("g__active_btn");
    }
  });

  // Team Meber View
  if (view === "team_member_view") {
    let memberSelect =
      document.getElementById("granite_select").parentElement.parentElement;
    memberSelect.style.display = "none";

    let statsEmily = new Granite({
      id: "stats",
      blocks: [
        {
          id: "goal-header",
          name: "Goal Header",
          feature: "header",
          options: {
            header_text: `Emily Moore Surpassed Her Monthly Goal <span class='goal-number animate__animated animate__flipInX'>10</span> Times in 2020`,
            text_color: "#5d5d5d",
            font_size: "30",
            margin_left: "0",
          },
          records: [],
        },
        {
          id: "avg-header",
          name: "Average Header",
          feature: "header",
          options: {
            header_text: `When Emily Moore Met Her Goal, She Averaged:`,
            text_color: "#5d5d5d",
            font_size: "22",
            margin_left: "0",
          },
          records: [],
        },
        {
          id: "proposals",
          name: "Proposals",
          feature: "header",
          options: {
            header_text: "<span class='number-call-out'>8</span>Proposals",
            text_color: "#5d5d5d",
            font_size: "22",
            margin_left: "0",
          },
          records: [],
        },
        {
          id: "meetings",
          name: "Meetings",
          feature: "header",
          options: {
            header_text: "<span class='number-call-out'>26</span>Meetings",
            text_color: "#5d5d5d",
            font_size: "22",
            margin_left: "0",
          },
          records: [],
        },
        {
          id: "interactions",
          name: "Interactions",
          feature: "header",
          options: {
            header_text: "<span class='number-call-out'>73</span>Interactions",
            text_color: "#5d5d5d",
            font_size: "22",
            margin_left: "0",
          },
          records: [],
        },
      ],
    });
  }
  EmployeeStats();
  function EmployeeStats() {
    switch (employee) {
      case "emily_moore":
        let statsEmily = new Granite({
          id: "stats",
          blocks: [
            {
              id: "goal-header",
              name: "Goal Header",
              feature: "header",
              options: {
                header_text: `Emily Moore Surpassed Her Monthly Goal <span class='goal-number animate__animated animate__flipInX'>10</span> Times in 2020`,
                text_color: "#5d5d5d",
                font_size: "30",
                margin_left: "0",
              },
              records: [],
            },
            {
              id: "avg-header",
              name: "Average Header",
              feature: "header",
              options: {
                header_text: `When Emily Moore Met Her Goal, She Averaged:`,
                text_color: "#5d5d5d",
                font_size: "22",
                margin_left: "0",
              },
              records: [],
            },
            {
              id: "proposals",
              name: "Proposals",
              feature: "header",
              options: {
                header_text: "<span class='number-call-out'>8</span>Proposals",
                text_color: "#5d5d5d",
                font_size: "22",
                margin_left: "0",
              },
              records: [],
            },
            {
              id: "meetings",
              name: "Meetings",
              feature: "header",
              options: {
                header_text: "<span class='number-call-out'>26</span>Meetings",
                text_color: "#5d5d5d",
                font_size: "22",
                margin_left: "0",
              },
              records: [],
            },
            {
              id: "interactions",
              name: "Interactions",
              feature: "header",
              options: {
                header_text:
                  "<span class='number-call-out'>73</span>Interactions",
                text_color: "#5d5d5d",
                font_size: "22",
                margin_left: "0",
              },
              records: [],
            },
          ],
        });
        break;
      case "david_therrien":
        let statsDave = new Granite({
          id: "stats",
          blocks: [
            {
              id: "goal-header",
              name: "Goal Header",
              feature: "header",
              options: {
                header_text: `David Therrien Surpassed His Monthly Goal <span class='goal-number-warning animate__animated animate__flipInX'>7</span> Times in 2020`,
                text_color: "#5d5d5d",
                font_size: "30",
                margin_left: "0",
              },
              records: [],
            },
            {
              id: "avg-header",
              name: "Average Header",
              feature: "header",
              options: {
                header_text: "When David Therrien Met His Goal, He Averaged:",
                text_color: "#5d5d5d",
                font_size: "22",
                margin_left: "0",
              },
              records: [],
            },
            {
              id: "proposals",
              name: "Proposals",
              feature: "header",
              options: {
                header_text: "<span class='number-call-out'>13</span>Proposals",
                text_color: "#5d5d5d",
                font_size: "22",
                margin_left: "0",
              },
              records: [],
            },
            {
              id: "meetings",
              name: "Meetings",
              feature: "header",
              options: {
                header_text: "<span class='number-call-out'>36</span>Meetings",
                text_color: "#5d5d5d",
                font_size: "22",
                margin_left: "0",
              },
              records: [],
            },
            {
              id: "interactions",
              name: "Interactions",
              feature: "header",
              options: {
                header_text:
                  "<span class='number-call-out'>80</span>Interactions",
                text_color: "#5d5d5d",
                font_size: "22",
                margin_left: "0",
              },
              records: [],
            },
          ],
        });
        break;
      case "sarah_maxwell":
        const jsConfetti = new JSConfetti({
          confettiRadius: 6,
          confettiNumber: 500,
        });
        jsConfetti.addConfetti();
        let statsSarah = new Granite({
          id: "stats",
          blocks: [
            {
              id: "top-goal",
              name: "Top Goal",
              feature: "header",
              options: {
                header_text:
                  "⭐ Congradulations! You Met Your Monthly Goal More Times Than Anyone On the Team! ⭐",
                text_color: "#5d5d5d",
                font_size: "16",
                margin_left: "0",
                margin_top: "25",
              },
              records: [],
            },
            {
              id: "goal-header",
              name: "Goal Header",
              feature: "header",
              options: {
                header_text: `Sarah Maxwell Surpassed Her Monthly Goal <span class='goal-number animate__animated animate__flipInX'>11</span> Times in 2020`,
                text_color: "#5d5d5d",
                font_size: "30",
                margin_left: "0",
              },
              records: [],
            },
            {
              id: "avg-header",
              name: "Average Header",
              feature: "header",
              options: {
                header_text: "When Sarah Maxwell Met Her Goal, She Averaged:",
                text_color: "#5d5d5d",
                font_size: "22",
                margin_left: "0",
              },
              records: [],
            },
            {
              id: "proposals",
              name: "Proposals",
              feature: "header",
              options: {
                header_text: "<span class='number-call-out'>10</span>Proposals",
                text_color: "#5d5d5d",
                font_size: "22",
                margin_left: "0",
              },
              records: [],
            },
            {
              id: "meetings",
              name: "Meetings",
              feature: "header",
              options: {
                header_text: "<span class='number-call-out'>26</span>Meetings",
                text_color: "#5d5d5d",
                font_size: "22",
                margin_left: "0",
              },
              records: [],
            },
            {
              id: "interactions",
              name: "Interactions",
              feature: "header",
              options: {
                header_text:
                  "<span class='number-call-out'>75</span>Interactions",
                text_color: "#5d5d5d",
                font_size: "22",
                margin_left: "0",
              },
              records: [],
            },
          ],
        });
        break;
    }
  }
}
