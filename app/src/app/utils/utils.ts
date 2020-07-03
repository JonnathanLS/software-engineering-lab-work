import { JobOpportunity } from '../model-interfaces/job-opportunity';
import { Stage } from '../model-interfaces/stage';
import { Skill } from '../model-interfaces/skill';

export const toggleDisabledInputsAndSelect = (idElement: string) => {
  const element = document.getElementById(idElement);
  element.childNodes.forEach(node => {
    if(node.nodeName === 'INPUT' || node.nodeName === 'SELECT')
      node['disabled'] = !node['disabled'];
    else if ( node.nodeName === 'DIV'){
      if (node.childNodes.length) {
        node.childNodes.forEach(n => {
          if(n.nodeName === 'INPUT' || n.nodeName === 'SELECT')
            n['disabled'] = !n['disabled'];
        });
      }
    }
    
  });
}

export const hasPropertyWithValueNullOrEmpty = (object: Object, ...props: string[]): boolean => {
  let result = false;
  props.forEach(prop => {
    if (!result) {
      if (object.hasOwnProperty(prop)) {
        const value = object[prop];
        if ( !value ) result = true;
        else if ( Array.isArray(value) && !value["length"]) result = true;
      }
    }
  });
  return result;
}

export const builderObject = (object: Skill | JobOpportunity | Stage, properties: string[]) =>{
  const invalid = hasPropertyWithValueNullOrEmpty(object, ...properties);
  if (invalid) throw new Error(`Builder Object : the reported object contains properties with invalid values`);
  return properties.reduce( (newObject, prop) => {
    newObject[prop] = object[prop];
    return newObject;
  }, {});
}