import {nameValidation, dateValidation, phoneValidation, linkValidation, textAreaValidation,} from '../inputValidation/validation.js';

export function chooseValidation(name, target) {
    let value;
    switch (name) {
      case "name":
        value = nameValidation(target, "name");
        break;
  
      case "surname":
        value = nameValidation(target, "surname");
        break;
  
      case "date":
        value = dateValidation(target);
        break;
  
        case "phone":
          value = phoneValidation(target);
          break;
  
      case "link":
        value = linkValidation(target);
        break;
  
      case "about":
        value = textAreaValidation(target, 'about');
        break;
  
      case "technologies":
        value = textAreaValidation(target, 'technologies');
        break;
  
      case "description":
        value = textAreaValidation(target, 'description');
        break;
  
      default:
        return target;
    }
    return value;
}

export default chooseValidation;