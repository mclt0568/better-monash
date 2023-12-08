import $ from "jquery";

const STYLE_ID = "better-monash-injected";

type Asset = Readonly<{
  name: string,
  data: string,
}>;

type Variable = Readonly<{
  name: string,
  value: string,
}>;

let assets: Asset[] = [];
let variables: Variable[] = [];

function assetsToCSS(assets: Asset[]): string{
  return assets.map(({name, data})=>`--${name}: url(${data});`).join();
}

function variablesToCSS(variable: Variable[]): string{
  return variable.map(({name, value})=>`--${name}: ${value};`).join();
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

function registerAssets(newAssets: Asset[]){
  assets = [...assets, ...newAssets];
  registerAll();
}

function registerVariables(newVariables: Variable[]){
  variables = [...variables, ...newVariables];
  registerAll();
}

function registerAll(){
  getStyleElement().empty().text(
    ":root{" + assetsToCSS(assets) + variablesToCSS(variables) + "}"
  );
}

export type {Asset, Variable};
export {registerAssets, registerVariables};