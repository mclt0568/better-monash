import { HomeLayout } from "./home";
import { 
  sidebarToMoodle41, 
  concerningBehaviourHelp,
  covidHelp,
  mfaHelp,
  calendar
} from "./sidebars";

type ThemeLookup = {
  urls: RegExp[],
  callbacks: (()=>void)[],
}

const urls = {
  any: /.*/,
  home: /^https\:\/\/learning\.monash\.edu\/\?redirect=0.*$/,
  dashboard: /^https\:\/\/learning\.monash\.edu\/my(\/|\/index.php|\/index\.php\/)?((\?|\#).*)?$/,
  myUnits: /^https\:\/\/learning\.monash\.edu\/my\/courses\.php((\?|\#).*)?$/,
};

const themeLookups: ThemeLookup[] = [
  {
    urls: [urls.dashboard],
    callbacks: [covidHelp, mfaHelp, calendar]
  },
  {
    urls: [
      urls.dashboard,
      urls.myUnits,
    ], 
    callbacks: [sidebarToMoodle41]
  },
  {
    urls: [urls.any],
    callbacks: [concerningBehaviourHelp]
  },
  {
    urls: [urls.home],
    callbacks: [HomeLayout]
  }
]

function applyThemes(){
  for (const lookup of themeLookups){
    const matched = lookup.urls.some((pattern) => pattern.test(location.href));
    if (matched){
      lookup.callbacks.forEach((callback)=>callback());
    }
  }
}

export {applyThemes};
