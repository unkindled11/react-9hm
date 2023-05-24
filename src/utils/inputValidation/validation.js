import { phoneMask } from "../masks/phoneMask.js";

export function nameValidation(value, input) {
  const span = document.querySelector(`.error-${input}`);
  const name = value.replace(/[^a-zA-Zа-яА-ЯёЁ .]/i, "").trimStart();
  if (name.length === 0) {
    span.textContent = `This field is empty`;
  } else {
    if (name[0] !== name[0].toUpperCase()) {
      span.textContent = `You should start the ${input} with a capital letter`;
    } else {
      span.textContent = "";
    }
  }
  return name;
}

export function dateValidation(value) {
  const date = value.replace(/^\d{1,2}\/\d{1,2}\/\d{4}$/, "");
  const span = document.querySelector(`.error-date`);
  if (!date) {
    span.textContent = `This field is empty`;
  } else {
    span.textContent = "";
  }

  return value;
}

export function linkValidation(value) {
  const link = value.trimStart();
  const span = document.querySelector(`.error-link`);
  if (value.length === 0) {
    span.textContent = `This field is empty`;
  } else {
    if (value.substring(0, 8) !== "https://") {
      span.textContent = 'Please start with https://';
    } else {
      span.textContent = "";
    }
  }
  return link;
}

export function phoneValidation(value) {
  const phone = phoneMask(value);
  const span = document.querySelector(".error-phone");

  if (phone.length < 12) {
    span.textContent = "Please add all numbers";
  } else {
    span.textContent = "";
  }
  return phone;
}


export function textAreaValidation(value, name) {
  const span = document.querySelector(`.error-${name}`);
  const text = value.trimStart();

  if (text.length === 0) {
    span.textContent = "This field is empty";
  } else {
    if (text.length > 600) {
      span.textContent = "Too much symbols";
    } else {
      span.textContent = "";
    }
  }

  return text;
}


export function blurValidation(value, name){
const span = document.querySelector(`.error-${name}`);
if(value.length===0){
  span.textContent = "This field is empty";
}
}

export function submitValidation(name, value) {
  const span = document.querySelector(`.error-${name}`);
  if(value.length===0){
    span.textContent = "This field is empty";
  }

}

export function resetErrors(){
  const span = document.querySelectorAll(`.error`);
  span.forEach(el => el.textContent='')
}

export function changeValidation() {
  const spans = document.querySelectorAll(`.error`);
  let errors = [];
  spans.forEach(el => errors.push(el.textContent));
  errors = errors.filter(el => el !== '').length;
  return errors;
}