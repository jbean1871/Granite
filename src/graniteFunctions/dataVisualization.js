export default function dataVisualization(jsonBlock, jsonTheme) {
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
    Set The mode
    ---------------------------------------------*/
  granite_div.setAttribute("mode", mode);
}
