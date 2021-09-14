export default function graniteHeatmap(json, jsonTheme) {
  /*---------------------------------------------
    Global Variables
    ---------------------------------------------*/
  console.log(json);
  const id = json.id;
  const o = json.options;
  const r = json.records;
  const t = jsonTheme;
  const mode = !!t.mode ? t.mode : "midnight";
  const cssId = "#" + id;
  const graniteDiv = document.getElementById(id);
  console.log(graniteDiv);
  /*---------------------------------------------
    CSS Attributes
    ---------------------------------------------*/
  let font_style = "hero-new, sans-serif";
  /*---------------------------------------------
    CSS Block
    ---------------------------------------------*/
  var scorecardCss = document.createElement("style");
  scorecardCss.id = "g__css_" + id;
  scorecardCss.innerHTML = `
  ${cssId}{
    width: 100%;
  }
  ${cssId} .g__filters-container{
    background: transparent;
    margin: 0 auto;
  }
    ${cssId} #g__${id}{
      font-family: hero-new, sans-serif;
      font-weight: 400;
      font-style: normal;
      width: 100%;
      margin: 0 auto;
      color: #5D5D5D;
      table-layout: auto;
    }
    ${cssId} td,
    ${cssId} tbody {
      text-align: left;
      padding: 8px;
      padding: 15px;
      font-size: 14px;
    }
    ${cssId} tr td{
      border: 1px solid #ffffff;
    }
    ${cssId} tr td.g__col-1 {
      text-align: right;
    }
    ${cssId} tr td.g__data-cell{
      position: relative;
    }
    ${cssId} tr td.g__td-add{
      width: 10px;
      padding: 5px;
      background: #F5F5F5;
    }

    ${cssId} tr.g__row{
      border: 0px solid #EAEAEA;
    }
    ${cssId} th{
      padding: 10px;
      text-align: center;
      font-size: 14px;
      font-weight: 400;
    }
    ${cssId} thead tr{
      background: transparent;
      font-size: 1rem;
    }
    /* ----------
    Tooltip
    ---------- */
    .g__data-cell:hover .g__heatmap-tooltip{
      opacity: 1;
      display: block;
    }
    .g__heatmap-tooltip {
      opacity: 0;
      position: absolute;
      top: 20;
      left: 50%;
      width: 200px;
      background: #ffffff;
      padding: 15px;
      z-index: 5;
      border: 1px solid #EAEAEA;
      border-radius: 5px;
      transition: all 0.5s ease;
  }
      `;
  let granite_css = document.getElementById("g__css_" + id);
  if (granite_css) {
    granite_css.remove();
  }
  document.head.appendChild(scorecardCss);
  /*---------------------------------------------
    Main Build
    ---------------------------------------------*/
  let rowCount;
  // Row Count
  for (let i = 0; i < r.length; i++) {
    if (r[i].type === "row") {
      rowCount = r[i].children.length;
      break;
    }
  }

  // Main table container
  let table = document.createElement("table");
  table.classList.add("animate__animated");
  table.classList.add("animate__fadeIn");
  table.id = "g__" + id;
  graniteDiv.appendChild(table);

  // Table body
  const tbody = document.createElement("tbody");
  let rowArr = [];
  // Record loop and build
  r.forEach((r, index) => {
    let type = r.type;

    switch (type) {
      case "header":
        const thead = document.createElement("thead");
        r.background ? (thead.style.background = r.background) : "";
        let headerRow = document.createElement("tr");
        r.children.forEach((cell, index) => {
          const th = document.createElement("th");
          !!cell.value ? th.setAttribute("data-org-value", cell.value) : "";
          !!cell.align_text ? (th.style.textAlign = cell.align_text) : "";
          !!cell.fixed_width ? (th.style.width = cell.fixed_width) : "";
          th.setAttribute("data-col-num", index);
          th.innerHTML = cell.value;
          headerRow.appendChild(th);
        });
        if (o.add_row) {
          const addRowHeader = document.createElement("th");
          addRowHeader.classList.add("g__td-add-header");
          addRowHeader.innerHTML = "<i class='fal fa-plus'></i>";
          headerRow.appendChild(addRowHeader);
        }
        thead.appendChild(headerRow);
        table.appendChild(thead);
        break;
      case "row":
        rowArr.push(index);
        let tr = document.createElement("tr");
        tr.classList.add("g__row");
        r.background ? (tr.style.background = r.background) : "";
        r.children.forEach((cell, index) => {
          const td = document.createElement("td");
          if (index === 0) {
            td.classList.add("g__col-1");
          }
          if (cell.heat_value) {
            td.classList.add("g__data-cell");
            td.style.backgroundColor = colorIndicator(cell);
            if (o.tooltip) {
              const tooltip = document.createElement("div");
              tooltip.classList.add("g__heatmap-tooltip");
              tooltip.innerHTML = `${cell.value}<br>Neglected apps - 4<br>Won deals ($) - $10,000`;
              td.appendChild(tooltip);
            }
          }
          cell.show_value ? (td.innerHTML = cell.value) : "";
          td.setAttribute("data-org-value", cell.value);
          tr.appendChild(td);
        });
        if (o.add_row) {
          const addRow = document.createElement("td");
          addRow.classList.add("g__td-add");
          tr.appendChild(addRow);
        }
        tbody.appendChild(tr);
        table.appendChild(tbody);
        break;
    }
  });

  graniteDiv.appendChild(table);
  /*---------------------------------------------
    Collapable Sections
    ---------------------------------------------*/
  let rowGroups = document.querySelectorAll(".g__header");
  if (rowGroups) {
    rowGroups.forEach((header) => {
      header.addEventListener("click", () => {
        let nextRow = header.nextElementSibling;
        header.classList.toggle("g__close_arrow");
        while (nextRow) {
          if (nextRow.classList.contains("g__header")) break;
          nextRow.classList.toggle("g__hide-group");
          nextRow = nextRow.nextElementSibling;
        }
      });
    });
  }
  /*---------------------------------------------
    Functions
    ---------------------------------------------*/
  function colorIndicator(cell) {
    if (cell.value >= 90) {
      return "#D9EE9B";
    } else if (cell.value >= 80) {
      return "#FFD699";
    } else {
      return "#F59CA4";
    }
  }
}
