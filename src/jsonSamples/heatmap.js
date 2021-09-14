const heatmap = {
  id: "heatmap-demo",
  name: "Pipeline",
  feature: "heatmap",
  options: {
    tooltip: true,
    type: "scorecard",
    padding: "15px",
    margin: "0",
    bkg_img: "",
    bkg_size: "",
    bkg_repeat: "",
    bkg_position: "center",
    bkg_color: "",
    add_row: true,
  },
  records: [
    {
      type: "header",
      background: "#FFFFFF",
      children: [
        { value: "", fixed_width: "150px" },
        { value: "Data Quality" },
        { value: "Outreach" },
        { value: "Revenue" },
        { value: "Score", fixed_width: "50px" },
      ],
    },
    {
      type: "row",
      background: "",
      children: [
        { value: "Sarah Jay", show_value: true },
        { value: 75, heat_value: true },
        { value: 93, heat_value: true },
        { value: 91, heat_value: true },
        { value: 96, show_value: true },
      ],
    },
    {
      type: "row",
      background: "",
      children: [
        { value: "Billy Sathe", show_value: true },
        { value: 78, heat_value: true },
        { value: 97, heat_value: true },
        { value: 94, heat_value: true },
        { value: 93, show_value: true },
      ],
    },
    {
      type: "row",
      background: "",
      children: [
        { value: "Quinten Lotus", show_value: true },
        { value: 95, heat_value: true },
        { value: 93, heat_value: true },
        { value: 82, heat_value: true },
        { value: 89, show_value: true },
      ],
    },
    {
      type: "row",
      background: "",
      children: [
        { value: "Bella Fox", show_value: true },
        { value: 83, heat_value: true },
        { value: 71, heat_value: true },
        { value: 97, heat_value: true },
        { value: 83, show_value: true },
      ],
    },
    {
      type: "row",
      background: "",
      children: [
        { value: "Parker Ramey", show_value: true },
        { value: 94, heat_value: true },
        { value: 81, heat_value: true },
        { value: 63, heat_value: true },
        { value: 77, show_value: true },
      ],
    },
    {
      type: "row",
      background: "",
      children: [
        { value: "Lily Kim", show_value: true },
        { value: 43, heat_value: true },
        { value: 54, heat_value: true },
        { value: 92, heat_value: true },
        { value: 77, show_value: true },
      ],
    },
  ],
};

export { heatmap };
