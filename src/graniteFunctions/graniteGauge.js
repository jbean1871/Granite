export default function granite_gauge(jsonBlock, jsonTheme) {
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
      flex: 1;
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
  /*-------------------------------------
  Full
  -------------------------------------*/
  ${cssId} .g__gauge-full {
    position: relative;
    width: auto;
    max-width: 300px;
    display: flex;
    justify-content:center;
    align-items: center;
    flex-direction: column;
  }
  ${cssId} .g__gauge-full .g__gauge-percent{
    position: relative;
    width: 150px;
    height: 150px;
  }
  ${cssId} .g__gauge-full .g__gauge-percent svg{
    position: relative;
    width: 150px;
    height: 150px;
  }
  ${cssId} .g__gauge-full .g__gauge-percent svg circle{
    width: 150px;
    height: 150px;
    fill: none;
    stroke-width: 10;
    transform: translate(5px, 5px);
    stroke-dasharray: 440;
    stroke-dashoffset: 440;
    stroke-linecap: round;
  }
  ${cssId} .g__gauge-full .g__gauge-percent svg circle.g__circle-2{
    stroke-dashoffset: 0;
    stroke: #EAEAEA;
  }
  ${cssId} .g__gauge-full .g__gauge-percent svg circle.g__circle-1{
    stroke-dashoffset: calc(440 - (440 * 73) / 100);
  }
  ${cssId} .g__gauge-full .g__gauge-percent .g__gauge-number{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #5d5d5d;
    font-size: 3rem;
  }
    /*-------------------------------------
    Half
    -------------------------------------*/
    ${cssId} .g__gauge-half{
      width: 400px;
      height: 400px;
    }

    ${cssId} .g__svg-cont{
      width: 100%;
      height: 100%;
      transform: rotateX(180deg);
    }
  }
    `;
  let granite_css = document.getElementById("g__css_" + id);
  if (granite_css) {
    granite_css.remove();
  }
  document.head.appendChild(codeCss);
  /*---------------------------------------------
    Main Build
    ---------------------------------------------*/
  const svgns = "http://www.w3.org/2000/svg";
  switch (o.style) {
    case "circle":
      const guaugeContFull = document.createElement("div");
      guaugeContFull.classList.add("g__gauge-full");

      const percent = document.createElement("div");
      percent.classList.add("g__gauge-percent");
      guaugeContFull.appendChild(percent);

      const svg = document.createElementNS(svgns, "svg");
      percent.appendChild(svg);

      if (o.gradient) {
        const defs = document.createElementNS(svgns, "defs");

        const linearGradient = document.createElementNS(
          svgns,
          "linearGradient"
        );
        linearGradient.id = "gauge_" + id;
        linearGradient.setAttribute("x1", "0%");
        linearGradient.setAttribute("y1", "0%");
        linearGradient.setAttribute("x2", "100%");
        linearGradient.setAttribute("y2", "0%");

        let gradientArr = [
          ["#A64FF4", "0%"],
          ["#6A84FF", "50%"],
          ["#B3F0FD", "100%"],
        ];
        let gradientCount = 100 / gradientArr.length;

        gradientArr.forEach((color, index) => {
          var stop = document.createElementNS(svgns, "stop");
          stop.setAttribute("offset", color[1]);
          stop.setAttribute("stop-color", color[0]);
          linearGradient.appendChild(stop);
        });
        defs.appendChild(linearGradient);
        svg.appendChild(defs);
      }

      const circle1 = document.createElementNS(svgns, "circle");
      circle1.classList.add("g__circle-1");
      circle1.setAttribute("cx", "70");
      circle1.setAttribute("cy", "70");
      circle1.setAttribute("r", "70");
      circle1.setAttribute("stroke", `url(${"#gauge_" + id})`);
      circle1.setAttribute("stroke-width", "15");

      const circle2 = document.createElementNS(svgns, "circle");
      circle2.classList.add("g__circle-2");
      circle2.setAttribute("cx", "70");
      circle2.setAttribute("cy", "70");
      circle2.setAttribute("r", "70");
      circle2.setAttribute("stroke", "#eaeaea");
      circle2.setAttribute("stroke-width", "15");

      svg.appendChild(circle2);
      svg.appendChild(circle1);

      const number = document.createElement("div");
      number.classList.add("g__gauge-number");
      number.innerHTML = "73%";
      percent.appendChild(number);

      granite_div.appendChild(guaugeContFull);

      break;
    case "half":
      const guaugeContHalf = document.createElement("div");
      guaugeContHalf.classList.add("g__gauge-half");

      const svgCont = document.createElementNS(svgns, "svg");
      svgCont.classList.add("g__svg-cont");
      guaugeContHalf.appendChild(svgCont);

      const halfCircle = document.createElementNS(svgns, "circle");
      halfCircle.setAttribute("cx", "50%");
      halfCircle.setAttribute("cy", "50%");
      halfCircle.setAttribute("r", "150");
      halfCircle.setAttribute("stroke", "#FDE47F");
      halfCircle.setAttribute("stroke-width", "60");
      halfCircle.setAttribute("fill", "none");
      halfCircle.setAttribute("stroke-dasharray", "471, 943");
      svgCont.appendChild(halfCircle);

      const mask = document.createElementNS(svgns, "circle");
      mask.setAttribute("cx", "50%");
      mask.setAttribute("cy", "50%");
      mask.setAttribute("r", "150");
      mask.setAttribute("stroke", "#eaeaea");
      mask.setAttribute("stroke-width", "60");
      mask.setAttribute("fill", "none");
      mask.setAttribute("stroke-dasharray", "100, 943");
      svgCont.appendChild(mask);

      const halfStats = document.createElement("div");
      halfStats.classList.add("g__half-stats");
      guaugeContHalf.appendChild(halfStats);

      granite_div.appendChild(guaugeContHalf);

      break;
  }
}
