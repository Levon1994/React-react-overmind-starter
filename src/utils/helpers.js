const PHONE_REGEXP = minLength => new RegExp(`^[()+-]*([0-9][()+-]*){${minLength},20}$`);
const PRECISION_REGEX = precision => new RegExp(`^-?(0|([1-9][0-9]*))(.[0-9]{0,${precision}})?$`);

const stopEvent = e => e.stopPropagation();
const stopActionEvent = e => e.preventDefault();

const getPercent = (value, toFixed = 2) => {
  if (value !== 0 && !value) return null;
  return `${Number(Number(value).toFixed(toFixed)).toLocaleString()}%`;
};

const getNumberFormat = value => value && new Intl.NumberFormat().format(value);

const sortAlphabetical = (arr, key = 'Name') => arr.sort((a, b) => a[key].localeCompare(b[key]));

const sortNumber = (arr, key = 'Id') => arr.sort((a, b) => a[key] - b[key]);

const validatePhone = (value, minLength = 6) => {
  if (!value) return true;
  const phoneNumber = value.replace(/\s/g, '');
  return PHONE_REGEXP(minLength).test(phoneNumber);
};

const withSymbol = value => value === '-';

const compareInputs = (param1, param2) => {
  if ((typeof param1 !== 'number' && !param1) || (typeof param2 !== 'number' && !param2)) {
    return true;
  }
  param1 = Number(param1);
  param2 = Number(param2);
  if (Number.isNaN(param1) || Number.isNaN(param2)) {
    return true;
  }

  return param1 <= param2;
};

const compareInputChecker = (param1, param2) => param1 !== null && param2 !== null && Number(param1) > Number(param2);

const validatePrecision = (value, precision = 2) => PRECISION_REGEX(precision).test(value);

const compose = (...fns) =>
  fns.reduceRight((prevFn, nextFn) =>
    (...args) => nextFn(prevFn(...args)),
  value => value);

const addArgs = (func, ...added) => (...args) => func(...added, ...args);
const errorText = object => Object.keys(object).find(key => object[key]);

const convertUrlToBas64 = url => `data:image/png;base64,${url}`;

const transformSearchQuery = query => query.toString().toLowerCase().replace(/ /g, '');

const excludeProp = (name, obj) => {
  const { [name]: omitted, ...newObj } = obj;
  return newObj;
};

// eslint-disable-next-line
const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const isEmail = email => reg.test(String(email).toLowerCase());

// ************* Number Input Field *************
const isNull = value => value === null;
const checkEmptyField = value => value || null;
// ************* Number Input Field *************

const isEmpty = value => !value;

const getImageUrl = base64 => {
  const buffer = Uint8Array.from(atob(base64), c => c.charCodeAt(0));
  const blob = new Blob([buffer], { type: 'image/gif' });
  return URL.createObjectURL(blob);
};

const readImage = file => (
  new Promise(response => {
    const reader = new FileReader();
    reader.readAsDataURL(file?.uploadedFiles[0]?.blob);
    reader.onloadend = () => {
      response(reader.result);
    };
  })
);

const toRem = number => `${number / 10}rem`;

const stringWithoutNewLine = value => value && value.replace(/\n/g, '');
const stringWithoutEmptyTub = value => value && value.replace(/\s/g, '');

export {
  toRem,
  isEmpty,
  isEmail,
  compose,
  addArgs,
  errorText,
  stopEvent,
  getPercent,
  validatePhone,
  sortAlphabetical,
  validatePrecision,
  compareInputs,
  compareInputChecker,
  sortNumber,
  excludeProp,
  convertUrlToBas64,
  transformSearchQuery,
  getNumberFormat,
  isNull,
  checkEmptyField,
  stopActionEvent,
  withSymbol,
  getImageUrl,
  readImage,
  stringWithoutNewLine,
  stringWithoutEmptyTub,
};
