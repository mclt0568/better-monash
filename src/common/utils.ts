import $ from "jquery";
import * as browser from "webextension-polyfill";

function loadStyles(namespace: string, filename: string): void {
  const url = browser.runtime.getURL(`${namespace}/${filename}.css`);
  
  $("<link/>").attr({
    rel: "stylesheet",
    href: url,
  }).appendTo("head");
}

export {loadStyles};