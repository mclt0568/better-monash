import { Variable } from "@common/assets";

const colorScheme: Variable[] = [
  {name:"accent", value: "#006144",},
  {name:"accent-active", value: "#04704F",},
  {name:"accent-decoration", value: "#047D59",},
  {name:"accent-background", value: "#E4FAF3",},
  {name:"accent-background-active", value: "#D8F4EB",},
  {name:"background", value: "#F8F8F8",},
  {name:"background-secondary", value: "#FFFFFF",},
  {name:"background-active", value: "#EAEAEA",},
  {name:"foreground", value: "#323232",},
  {name:"foreground-invert", value: "#FFFFFF",},
  {name:"foreground-secondary", value: "#929292",},
  {name:"scheme-dangerous", value: "#B90000",},
  {name:"scheme-dangerous-background", value: "#FFE3E3",},
  {name:"background-filter", value: "rgba(209, 209, 209, 0.45)",},
];

const misc: Variable[] = [
  {name:"default-float", value: "0px 3px 3px 0px rgba(0,0,0,0.24)",},
  {name:"default-active", value: "0.4s cubic-bezier(.05,.65,.27,.96)",},
  {name:"navbar-height", value: "40px",},
  {name:"side-pane-width", value: "400px",},
  {name:"icon-btn-size", value: "40px",},
  {name:"icon-btn-size-lrg", value: "46px",},
  {name:"page-title-height", value: "250px",},
  {name:"page-title-image", value: "url(https://images.adsttc.com/media/images/5f35/b347/b357/655d/6f00/0030/slideshow/1_1432_00_N555_extralarge.jpg)",},
];

const typography: Variable[] = [
  {name:"size-button-caption", value: "16px",},
  {name:"size-header", value: "22px",},
  {name:"size-title", value: "64px",},
  {name:"size-paragraph", value: "16px",},
]

export {colorScheme, misc, typography};