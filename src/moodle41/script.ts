import { registerAssets, registerVariables } from "@common/assets";
import $ from "jquery";

import { colorScheme, misc, typography } from "./variables";
import { applyThemes } from "./url";
import "./styles/main.scss";

import avatar from "./assets/avatar.svg";
import buttonDecoration from "./assets/buttonDecoration.svg";
import catalog from "./assets/catalog.svg";
import certificate from "./assets/certificate.svg";
import chevronRight from "./assets/chevronRight.svg";
import close from "./assets/close.svg";
import contactsBlocked from "./assets/contactsBlocked.svg";
import course from "./assets/course.svg";
import forum from "./assets/forum.svg";
import help from "./assets/help.svg";
import home from "./assets/home.svg";
import loading from "./assets/loading.svg";
import logout from "./assets/logout.svg";
import notification from "./assets/notification.svg";
import search from "./assets/search.svg";
import searchHint from "./assets/searchHint.svg";
import searchHintFocused from "./assets/searchHintFocused.svg";
import report from "./assets/report.svg";
import settings from "./assets/settings.svg";
import sidePanelOpen from "./assets/sidePanelOpen.svg";
import sidePanelClose from "./assets/sidePanelClose.svg";
import user from "./assets/user.svg";
import userMultiple from "./assets/userMultiple.svg";
import workspace from "./assets/workspace.svg";

registerVariables([
  ...colorScheme,
  ...misc,
  ...typography,
]);

registerAssets([
  {name: "button-decoration", data: buttonDecoration},
  {name: "contacts-blocked", data: contactsBlocked},
  {name: "notification", data: notification},
  {name: "search-hint", data: searchHint},
  {name: "search-hint-focused", data: searchHintFocused},
  {name: "user", data: user},
]);

// ======================
// NAV BAR
// ======================

const leftLinkIcons = [home, workspace, course, search, search, catalog, help];
const leftLinkText = ["Home", "Dashboard", "My Units", "", "Preview Units", "Handbook", "Help"];

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
.append("See all")
.append($("<img/>").attr({
  src: chevronRight,
}));
}

// message button
$("div[data-region=\"popover-region-messages\"]")
.addClass("bm-message-popover-btn");

const messagePopoverButton = $(".bm-message-popover-btn a");

messagePopoverButton
.find("img")
.remove();

messagePopoverButton
.append($("<img/>").attr({src: forum,}));

messagePopoverButton
.find('i')
.remove();

// messages panel
const messagesPanel = $("[data-region=\"right-hand-drawer\"].drawer").addClass("bm-messages-panel");
messagesPanel.find(".closewidget").remove(); // remove close button
messagesPanel.find(".footer-container").addClass("bm-messages-panel-actions");

messagesPanel.find('[data-route="view-settings"]') // settings link
.addClass("bm-icon-btn bm-white bm-no-focus-effect bm-extra-option")
.detach()
.prependTo(".bm-messages-panel-actions")
.empty()
.append($("<img/>").attr({src: settings}));
messagesPanel.find(".simplesearchform").parent().find(".ml-2").remove();

const messagesPanelViewContacts = messagesPanel.find('[data-route="view-contacts"]'); // contacts link
messagesPanelViewContacts.addClass("bm-icon-btn bm-white bm-no-focus-effect bm-extra-option");
messagesPanelViewContacts.find("img").remove();
messagesPanelViewContacts.contents().each(function () {
  if (this.nodeType === Node.TEXT_NODE) {
    $(this).remove();
  }
})
messagesPanelViewContacts
.detach()
.prependTo(".bm-messages-panel-actions")
.append($("<img/>").attr({src: userMultiple}));
messagesPanelViewContacts.find("i").remove()
messagesPanel.find('[data-region="view-overview"] .text-right').remove();

const messagePanelViewAllLink = messagesPanel
.find(".bm-messages-panel-actions div[data-region=\"view-overview\"]") // view all conversation link
.addClass("bm-messages-see-all-link")
.find("a")
.addClass("bm-button bm-accent-secondary");
messagePanelViewAllLink.contents().first().replaceWith("See all conversations");
messagePanelViewAllLink.find("img").remove();
messagePanelViewAllLink.append($("<img/>").attr({src: chevronRight}));

const messagesPanelSearchForm = messagesPanel.find(".simplesearchform"); // search panel
const messagesPanelSearchContainer = messagesPanelSearchForm.parent().parent()
.addClass("bm-messages-panel-search-container");
messagesPanelSearchForm.find("input")
.addClass("bm-messages-panel-search-input bm-no-focus-effect");
messagesPanelSearchForm.find(".btn-submit")
.addClass("bm-messages-panel-search-submit")
.hide();
messagesPanelSearchContainer.find('[data-action="cancel-search"]')
.addClass("bm-icon-btn bm-white bm-no-focus-effect bm-messages-panel-search-cancel")
.empty()
.append($("<img/>").attr({src: close}))
.parent()
.addClass("bm-messages-panel-search-active");

const messagesPanelSearchResultContainer = messagesPanel // search result
.find('[data-region="search-results-container"]>div')
.addClass("bm-messages-panel-search-result-container");
messagesPanelSearchResultContainer.find(".list-group-item")
.addClass("bm-no-focus-effect");
messagesPanelSearchResultContainer.find(".border-top")
.removeClass("border-top");

const messagesPanelConversationFooter = messagesPanel // conversation footer box
.find(".bm-messages-panel-actions div[data-region=\"view-conversation\"]")
.addClass("bm-messages-panel-conversation-footer");
const messagesPanelConversationInput = messagesPanelConversationFooter
.find('[data-region="content-messages-footer-container"]')
.addClass("bm-messages-panel-conversation-input");
const messagesPanelConversationEdit = messagesPanelConversationFooter
.find('[data-region="content-messages-footer-edit-mode-container"]')
.addClass("bm-messages-panel-conversation-edit");

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

// remove that unwanted search button
$(".nav-item.dropdown.dropdownmoremenu[data-region=\"morebutton\"]").detach().remove();

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

if ($(".bm-side-pane-toggle").length === 0){
  $("<button/>")
    .addClass("bm-side-pane-toggle")
    .addClass("bm-icon-btn")
    .append($("<img/>").attr({
      src: _sidePaneStatus ? sidePanelClose : sidePanelOpen,
    }))
    .on("click", ()=>{
      _sidePaneStatus = !_sidePaneStatus;
      $(".bm-side-pane-toggle img").attr({
        src: _sidePaneStatus ? sidePanelClose : sidePanelOpen,
      });
      $(".drawer-toggler button").trigger("click");
    })
    .appendTo(".header-custom-menus");
}

$(".loading-icon")
  .empty()
  .addClass("bm-loading-icon")
  .append($("<img/>").attr({
    src: loading,
  }));

applyThemes();