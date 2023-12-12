type funcUpperize = (a: string) => string;
type StringInfo = {
  toUpper: string;
  toLower: string;
  length: number;
};

const t: StringInfo = {
  toUpper: "",
  toLower: "",
  length: 1,
};

let toUpper: funcUpperize = (arg: string): string => {
  return arg.toUpperCase();
};

let getStringInfo = (arg: string): StringInfo => {
  return {
    toUpper: arg.toUpperCase(),
    toLower: arg.toLowerCase(),
    length: arg.length,
  };
};

export { funcUpperize, StringInfo,toUpper, getStringInfo };
