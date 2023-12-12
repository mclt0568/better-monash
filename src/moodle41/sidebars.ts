import $ from "jquery";

import arrowUp from "./assets/arrowUp.svg";
import calendarView from "./assets/calendarView.svg";
import chevronLeftFG from "./assets/chevronLeftFG.svg";
import chevronRightFG from "./assets/chevronRightFG.svg";
import loading from "./assets/loading.svg";

export function sidebarToMoodle41(){
  // side pane (to old monash)
  if ($(".drawer.drawer-right #inst38662 .footer .bm-to-moodle39").length !== 0){
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
  if ($(".drawer.drawer-right #inst240 .footer .bm-concerning-behaviour-help").length !== 0){
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
  if ($(".drawer.drawer-right #inst250980 h5").length !== 0){
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
  if ($(".drawer.drawer-right #inst250979 h5").length !== 0){
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

const _calendarObserver = new MutationObserver((mutation, observer)=>{
  calendar();
});

let _currMonth = "";

export function calendar(){
  
  if ($(".drawer.drawer-right #inst250975").length === 0){
    return;
  }
  
  const actualMonth = $("#inst250975 h4.current").text();
  if (_currMonth === actualMonth){
    return;
  }
  _currMonth = $("#inst250975 h4.current").text();
  _calendarObserver.disconnect();

  $("#inst250975 div.header").remove();
  $("#inst250975 h5").remove();

  $("#inst250975 .controls")
    .addClass("bm-calendar-month-nav")
    .addClass("bm-calendar-month-nav");

  $("#inst250975 .card-text")
    .addClass("bm-calendar-content");


  $("#inst250975 .calendartable")
    .addClass("bm-calendar-table");

  $("#inst250975 .footer-link a")
  .remove();
  
  if ($("#inst250975 .bm-full-cal").length === 0){
    $("<a></a>")
      .addClass("bm-full-cal")
      .addClass("bm-icon-btn")
      .addClass("bm-accent-secondary")
      .empty()
      .attr({
        href:"https://learning.monash.edu/calendar/view.php?view=month"
      })
      .append($("<img/>").attr({
        src: calendarView,
      }))
      .appendTo(".calendar-controls");
  }

  $("#inst250975 .arrow_link.next")
    .detach()
    .empty()
    .append($("<img/>").attr({
      src: chevronRightFG,
    }))
    .insertAfter("#inst250975 .arrow_link.previous");
    
    $("#inst250975 .arrow_link.previous")
      .empty()
      .append($("<img/>").attr({
        src: chevronLeftFG,
      }))

  $("#inst250975 .arrow_link")
    .addClass("bm-icon-btn");

  $("#inst250975 .calendar-controls span")
    .remove();

  $("#inst250975 .footer")
    .remove();
    

  $("#inst250975 .loading-icon")
    .empty()
    .append($("<img/>").attr({
      src: loading,
    }));

  _calendarObserver.observe(document.getElementById("inst250975")!, {childList: true, subtree: true});
}