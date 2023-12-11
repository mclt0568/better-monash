import $ from "jquery";
import arrowUp from "./assets/arrowUp.svg";

function sidebarToMoodle41(){
  // side pane (to old monash)
  if ($("#inst38662 .footer .bm-to-moodle39").length === 0){
    $("<a></a>")
      .attr({
        href:"https://lms.monash.edu/"
      })
      .append("Moodle 3.9")
      .append($("<img/>").attr({
        src: arrowUp,
      }))
      .addClass("bm-button")
      .addClass("bm-accent-secondary")
      .addClass("bm-to-moodle39")
      .appendTo("#inst38662 .footer");
  }
}

export {sidebarToMoodle41};