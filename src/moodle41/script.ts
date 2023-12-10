import { registerAssets, registerVariables } from "@common/assets";
import $ from "jquery";

import { colorScheme, misc, typography } from "./variables";
import "./styles/main.scss";

import avatar from "./assets/avatar.svg";
import buttonDecoration from "./assets/buttonDecoration.svg";
import catalog from "./assets/catalog.svg";
import certificate from "./assets/certificate.svg";
import chevronRight from "./assets/chevronRight.svg";
import course from "./assets/course.svg";
import forum from "./assets/forum.svg";
import help from "./assets/help.svg";
import home from "./assets/home.svg";
import logout from "./assets/logout.svg";
import notification from "./assets/notification.svg";
import search from "./assets/search.svg";
import report from "./assets/report.svg";
import settings from "./assets/settings.svg";
import sidePanelOpen from "./assets/sidePanelOpen.svg";
import sidePanelClose from "./assets/sidePanelClose.svg";
import user from "./assets/user.svg";
import workspace from "./assets/workspace.svg";

registerVariables([
  ...colorScheme,
  ...misc,
  ...typography,
]);

registerAssets([
  {name: "button-decoration", data: buttonDecoration},
  {name: "notification", data: notification},
  {name: "user", data: user},
]);

// ======================
// NAV BAR
// ======================

const leftLinkIcons = [home, workspace, course, search, search, catalog, help];
const leftLinkText = ["Home", "Dashboard", "My Units", "", "Search Units", "Handbook", "Help"];

$("nav.navbar").removeClass("bg-white");

$("a.navbar-brand").remove(); // monash logo

$(".navbar>.header-user").remove(); // edit mode

// left nav links buttons
$("nav li>a.nav-link")
.removeClass("nav-link")
.addClass("bm-button")
.addClass("bm-nav-link")

.first() // Home button
.addClass("bm-home")
.addClass("bm-accented");


// Move right nav links
const _rightLinks = $(".custom-menus .custommenu");
_rightLinks.each((index)=>{
  const newListItem = $("<li></li>").appendTo("ul.navbar-nav")
  _rightLinks.eq(index)
  .removeClass("custommenu")
  .addClass("bm-button")
  .addClass("bm-nav-link")
  .detach()
  .appendTo(newListItem);
});

// add icons if do not exists
if ($(".bm-nav-link img").length === 0){
  let _leftLinks = $(".bm-nav-link").removeAttr("role");
  _leftLinks.each((index) => {
    _leftLinks.eq(index)
    .empty()
      .append($("<img/>").attr({
        src: leftLinkIcons[index],
      }))
      .append(leftLinkText[index]);
    });
  }
  
  // cleanup empty containers for nav right links
  $(".header-custom-menus .custom-menus").remove();
  
  // nav right popovers
  $(".header-custom-menus .popover-region [role]")
  .removeAttr("role");
  
  $(".header-custom-menus .nav-link")
  .removeClass("nav-link");
  
  $(".header-custom-menus .popover-region")
  .addClass("bm-nav-icon-btn")
  .addClass("bm-icon-btn");
  
  
  // append icon if not exist already
  if ($(".popover-region-notifications .popover-region-toggle img").length === 0){
    $(".popover-region-notifications .popover-region-toggle") // notification button
    .append($("<img/>").attr({
      src: notification,
    }));
  }
  
  // notification panel
  $(".popover-region-container .popover-region-header-container")
  .removeClass("popover-region-header-container")
  .addClass("bm-header-container");
  
  
  // notification buttons
  $(".popover-region-header-actions")
  .removeClass("popover-region-header-actions")
  .addClass("bm-notification-actions")
  .detach()
  .appendTo(".popover-region-container");
  
  $(".bm-notification-actions > a")
  .addClass("bm-icon-btn")
  .addClass("bm-white")
  .empty();
  
  $(".popover-region-container .see-all-link")
  .detach()
  .appendTo(".bm-notification-actions");
  
  $(".bm-notification-actions > .see-all-link")
  .addClass("bm-button")
  .addClass("bm-accent-secondary")
  .removeClass("bm-white")
  .removeClass("bm-icon-btn")
  .empty();
  
  if ($(".mark-all-read-button img").length === 0){
    $(".mark-all-read-button")
  .append($("<img/>").attr({
    src: certificate,
  }));
}

if ($(".bm-icon-btn[title=\"Notification preferences\"] img").length === 0){
  $(".bm-icon-btn[title=\"Notification preferences\"]")
  .append($("<img/>").attr({
    src: settings,
  }));
}

if ($(".see-all-link > *").length === 0){
  $(".see-all-link")
  .append("See All")
  .append($("<img/>").attr({
    src: chevronRight,
  }));
}

// message button
$("div[data-region=\"popover-region-messages\"]")
.addClass("bm-message-popover-btn");

$(".bm-message-popover-btn a")
.empty()
.append($("<img/>").attr({
  src: forum,
}));


// User dropdown button
const userActonMenuIcons = [avatar, report, forum, settings, logout];

const _username = $("#user-menu-toggle .userfullname").text();
$("#user-menu-toggle")
.removeAttr("role")
.removeClass("dropdown-toggle")
.removeClass("btn")
.addClass("bm-button")
.addClass("bm-accent-secondary")
.empty()
.append($("<img/>").attr({
  src: user,
}))
.append($("<span></span>")
.addClass("userfullname")
.text(_username));

const _buttonSize = getComputedStyle(
  document.getElementById("user-menu-toggle")!)
  .width;
  
  $("#user-action-menu div.dropdown-divider")
  .remove();
  
  $("#user-action-menu a.dropdown-item")
  .removeClass("dropdown-item")
  .addClass("bm-button");
  
  const _dropdownItem = $("#user-action-menu a.bm-button");
  if ($("#user-action-menu a.bm-button img").length === 0){
    _dropdownItem.each((index) => {
      _dropdownItem.eq(index)
      .prepend($("<img/>").attr({
        src: userActonMenuIcons[index],
      }))
    })
  }
  _dropdownItem
  .eq(_dropdownItem.length - 1)
  .addClass("logout")
  
registerVariables([
  {name: "username", value: `"${_username}"`},
  {name: "username-width", value: _buttonSize},
]);

// ======================
// Workspace
// ======================

// Page title
$("#page-header .page-header-headings")
  .removeClass("page-header-headings");

$("#page-header h1")
  .removeClass("h2");

// sidebar toggler
$(".drawer-toggler button")
  .css({display: "none"});

$("#theme_boost-drawers-blocks button")
  .css({display: "none"});

let _sidePaneStatus = $(".drawer.drawer-right.show").length !== 0;

$("<button/>")
  .addClass("bm-side-pane-toggle")
  .addClass("bm-icon-btn")
  .append($("<img/>").attr({
    src: _sidePaneStatus ? sidePanelClose : sidePanelOpen,
  }))
  .on("click", ()=>{
    $(".drawer.drawer-right").toggleClass("show");
    $(".drawers.drag-container").toggleClass("show-drawer-right");
    _sidePaneStatus = !_sidePaneStatus;
    $(".bm-side-pane-toggle img").attr({
      src: _sidePaneStatus ? sidePanelClose : sidePanelOpen,
    });
  })
  .appendTo(".header-custom-menus");