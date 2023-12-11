import { sidebarToMoodle41 } from "./sidebars";

type ThemeLookup = {
  urls: RegExp[],
  callbacks: (()=>void)[],
}

const themeLookups: ThemeLookup[] = [
  {
    urls: [
      /^https\:\/\/learning\.monash\.edu\/my\/?$/,
      /^https\:\/\/learning\.monash\.edu\/my\/courses.php$/,
    ], 
    callbacks: [sidebarToMoodle41]
  }
]

function applyThemes(){
  for (const lookup of themeLookups){
    const matched = lookup.urls.some((pattern) => pattern.test(location.href));
    if (matched){
      console.log("MATCHED!");
      lookup.callbacks.forEach((callback)=>callback());
    }
  }
}

export {applyThemes};
