import { JobOpportunity } from '../model-interfaces/job-opportunity';
import { Stage } from '../model-interfaces/stage';
import { Skill } from '../model-interfaces/skill';
import { FormGroup } from '@angular/forms';

export const toggleDisabledInputsAndSelect = (idElement: string) => {
  const element = document.getElementById(idElement);
  const inputs = element.getElementsByTagName('INPUT');
  const selects = element.getElementsByTagName('SELECT');
  const changeDisable = (el: Element) => el['disabled'] = !el['disabled'];
  for (var i = 0; i < inputs.length; i++) changeDisable(inputs[i]);
  for (var i = 0; i < selects.length; i++) changeDisable(selects[i]);
}

export const hasPropertyWithValueNullOrEmpty = (object: Object, ...props: string[]): boolean => {
  let result = false;
  props.forEach(prop => {
    if (!result) {
      if (object.hasOwnProperty(prop)) {
        const value = object[prop];
        if (!value) result = true;
        else if (Array.isArray(value) && !value["length"]) result = true;
      }
    }
  });
  return result;
}

export const builderObject = (object: Object, properties: string[]) => {
  const invalid = hasPropertyWithValueNullOrEmpty(object, ...properties);
  if (invalid) throw new Error(`Builder Object : the reported object contains properties with invalid values`);
  return properties.reduce((newObject, prop) => {
    newObject[prop] = object[prop];
    return newObject;
  }, {});
}

export const fbGetValue = (form: FormGroup, key: string) => form.get(key).value;
export const fbSetValue = (form: FormGroup, key: string, value: any) => form.get(key).setValue(value);

export const propertiesInputAngularInvalid = (nameComponent: string, ...props: any[]) => {
  props.map(prop => {
    if (!prop)
      throw new Error(nameComponent + " : there are properties that need to be passed on")
  })
}