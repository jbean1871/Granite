export default function granite_select(jsonBlock, jsonTheme) {
  /*---------------------------------------------
    Global Variables
    ---------------------------------------------*/
  const id = jsonBlock.id;
  const o = jsonBlock.options;
  const r = jsonBlock.records;
  const t = jsonTheme;
  const mode = t.mode || "midnight";
  const cssId = "#" + id;
  const granite_div = document.getElementById(id);

  /*---------------------------------------------
    Add Font Family To Header
    ---------------------------------------------*/
  const font_include = document.getElementById("g__font_stylesheet");
  if (!font_include) {
    var head = document.head;
    var fontLink = document.createElement("link");
    fontLink.type = "text/css";
    fontLink.rel = "stylesheet";
    fontLink.id = "g__font_stylesheet";
    fontLink.href = "https://use.typekit.net/ihq4dbs.css";
    head.appendChild(fontLink);
  }

  /*---------------------------------------------
    Set The mode
    ---------------------------------------------*/
  granite_div.setAttribute("mode", mode);

  /*---------------------------------------------
    Attributes
  ---------------------------------------------*/
  let font_style = "hero-new, sans-serif";

  !!o.padding_top ? "" : (o.padding_top = "0");
  !!o.padding_right ? "" : (o.padding_right = "0");
  !!o.padding_bottom ? "" : (o.padding_bottom = "0");
  !!o.padding_left ? "" : (o.padding_left = "0");

  !!o.margin_top ? "" : (o.margin_top = "0");
  !!o.margin_right ? "" : (o.margin_right = "0");
  !!o.margin_bottom ? "" : (o.margin_bottom = "0");
  !!o.margin_left ? "" : (o.margin_left = "0");

  let fontColorMode = mode === "midnight" ? "#bfbfbf" : "#a1a1a1";
  const img_url = o.img_url || "";

  //layout
  let paddingTop = o.padding_top + "px";
  let paddingRight = o.padding_right + "px";
  let paddingBottom = o.padding_bottom + "px";
  let paddingLeft = o.padding_left + "px";
  let marginTop = o.margin_top + "px";
  let marginRight = o.margin_right + "px";
  let marginBottom = o.margin_bottom + "px";
  let marginLeft = o.margin_left + "px";
  let justify_content = o.justify_content || "center";

  /*---------------------------------------------
    CSS Block
    ---------------------------------------------*/
  var imgCss = document.createElement("style");
  imgCss.id = "g__css_" + id;
  imgCss.innerHTML = `
  ${cssId}{
    display: flex;
    justify-content: flex-start;
  }
  ${cssId} .g__elm_select{
      font-family: ${font_style};
      font-weight: 300;
      padding-top: ${paddingTop};
      padding-right: ${paddingRight};
      padding-bottom: ${paddingBottom};
      padding-left: ${paddingLeft};
      margin-top: ${marginTop};
      margin-right: ${marginRight};
      margin-bottom: ${marginBottom};
      margin-left: ${marginLeft};
  }
  ${cssId} select{
    width: 100%;
    min-width: 15ch;
    max-width: 30ch;
    border: 1px solid #fff;
    border-radius: 0.25em;
    font-size: 1.5rem;
    color: #5d5d5d;
    cursor: pointer;
    line-height: 1.1;
    background-color: #fff;
  }
    `;
  let granite_css = document.getElementById("g__css_" + id);
  if (granite_css) {
    granite_css.remove();
  }
  document.head.appendChild(imgCss);

  /*---------------------------------------------
    Wrapper
  ---------------------------------------------*/
  let select = document.createElement("select");
  select.classList.add("g__elm_select");
  !!o.select_id ? (select.id = o.select_id) : "";
  !!o.select_id ? (select.name = o.select_id) : "";
  !!o.select_classes ? select.classList.add(o.select_classes) : "";

  if (o.select_options) {
    o.select_options.forEach((opt) => {
      const option = document.createElement("option");
      let formatValue = opt.replace(/ /g, "_").toLowerCase();
      option.setAttribute("value", formatValue);
      option.innerHTML = opt;
      select.appendChild(option);
    });
  }

  /*---------------------------------------------
    Append micro to the DOM
  ---------------------------------------------*/
  granite_div.appendChild(select);
}
