export default function granite_code(jsonBlock, jsonTheme) {
  const id = jsonBlock.id;
  const o = jsonBlock.options;
  const r = jsonBlock.records;
  const t = jsonTheme;
  const mode = t.mode || "midight";
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
  Attributes
  ---------------------------------------------*/
  switch (t.mode) {
    case "standard":
      !!o.text_color ? "" : (o.text_color = "#000000");
      break;
    default:
      !!o.text_color ? "" : (o.text_color = "#ffffff");
      break;
  }

  let font_style = "hero-new, sans-serif";

  !!o.padding_top ? "" : (o.padding_top = "0");
  !!o.padding_right ? "" : (o.padding_right = "0");
  !!o.padding_bottom ? "" : (o.padding_bottom = "0");
  !!o.padding_left ? "" : (o.padding_left = "0");

  !!o.margin_top ? "" : (o.margin_top = "0");
  !!o.margin_right ? "" : (o.margin_right = "0");
  !!o.margin_bottom ? "" : (o.margin_bottom = "0");
  !!o.margin_left ? "" : (o.margin_left = "0");

  let paddingTop = o.padding_top + "px";
  let paddingRight = o.padding_right + "px";
  let paddingBottom = o.padding_bottom + "px";
  let paddingLeft = o.padding_left + "px";
  let marginTop = o.margin_top + "px";
  let marginRight = o.margin_right + "px";
  let marginBottom = o.margin_bottom + "px";
  let marginLeft = o.margin_left + "px";
  /*---------------------------------------------
    CSS Block
    ---------------------------------------------*/
  var codeCss = document.createElement("style");
  codeCss.id = "g__css_" + id;
  codeCss.innerHTML = `
      ${cssId}{
        font-family: ${font_style};
        font-weight: 300;
        color: #5d5d5d;
        text-align: left;
        padding-top: ${paddingTop};
        padding-right: ${paddingRight};
        padding-bottom: ${paddingBottom};
        padding-left: ${paddingLeft};
        margin-top: ${marginTop};
        margin-right: ${marginRight};
        margin-bottom: ${marginBottom};
        margin-left: ${marginLeft};
      }
      `;
  let granite_css = document.getElementById("g__css_" + id);
  if (granite_css) {
    granite_css.remove();
  }
  document.head.appendChild(codeCss);
  granite_div.innerHTML = o.code;
}
