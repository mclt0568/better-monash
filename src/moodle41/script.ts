import * as browser from "webextension-polyfill";

const x = browser.runtime.getURL("moodle41/styles.css");
console.log(x);