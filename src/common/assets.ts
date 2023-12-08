import $ from "jquery";

const STYLE_ID = "better-monash-injected";

type Asset = Readonly<{
  name: string,
  data: string,
}>;

let assets: Asset[] = [];

function assetsToCSS(assets: Asset[]): string{
  const rules = assets.map(({name, data})=>`--${name}: url(${data});`).join();
  return ":root{" + rules + "}";
}

function getStyleElement(): JQuery<HTMLElement>{
  const elem = $(`#${STYLE_ID}`);
  
  if (elem.length === 0){
    return $("<style></style>").appendTo("head").attr({
      id:STYLE_ID
    });
  }
  
  return elem;
}

function registerAssets(rawAssets: Asset[]){
  assets = [...assets, ...rawAssets];
  getStyleElement().empty().text(assetsToCSS(rawAssets));
}

export type {Asset};
export {registerAssets};