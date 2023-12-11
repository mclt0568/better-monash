import $ from "jquery";
import arrowUp from "./assets/arrowUp.svg";

export function sidebarToMoodle41(){
  // side pane (to old monash)
  if ($("#inst38662 .footer .bm-to-moodle39").length !== 0){
    return;
  }
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

export function concerningBehaviourHelp(){
  // side pane (to old monash)
  if ($("#inst240 .footer .bm-concerning-behaviour-help").length !== 0){
    return;
  }
  const helpLink = $("#inst240 a:not([class])").attr("href");
  
  $("<a></a>")
    .attr({
      href: helpLink
    })
    .append("Get Help")
    .append($("<img/>").attr({
      src: arrowUp,
    }))
    .addClass("bm-button")
    .addClass("bm-accent-secondary")
    .addClass("bm-concerning-behaviour-help")
    .appendTo("#inst240 .footer");
}

export function covidHelp(){
  if ($("#inst250980 h5").length !== 0){
    return;
  }

  $("<h5></h5>")
    .addClass("card-title")
    .text("About COVID-19")
    .prependTo("#inst250980 .card-body");

  const paragraphs = $("#inst250980 .card-text .no-overflow p");
  if (paragraphs.length === 2){
    return ;
  }

  paragraphs.eq(0).remove();
}

export function mfaHelp(){
  if ($("#inst250979 h5").length !== 0){
    return;
  }

  $("<h5></h5>")
    .addClass("card-title")
    .text("Changing your phone: Multi-factor authentication (MFA).")
    .prependTo("#inst250979 .card-body");

  const paragraphs = $("#inst250979 .card-text .no-overflow p");
  if (paragraphs.length === 2){
    return ;
  }

  paragraphs.eq(0).remove();
}