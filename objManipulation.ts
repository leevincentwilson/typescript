/*
Two Approachs for converting an objects values into another type of value
Approach 1 uses typeguarding
Approach 2 uses casting 
*/

const keyValues = {
  planA: "PLAN_A",
  planB: "PLAN_B",
  planC: "PLAN_C",
}

type BooleanRecord<Type> = Record<keyof Type, boolean>;
function isFull<TypeA extends Record<string,string> >(
  objA: TypeA,
  objB: Partial<BooleanRecord<TypeA>>
) : objB is BooleanRecord<TypeA>{
    return JSON.stringify(Object.keys(objA)) === JSON.stringify(Object.keys(objB))
}

function factory<Type extends Record<string,string>>(obj: Type): BooleanRecord<Type> {
  const returnObj: Partial<BooleanRecord<Type>> = {};
  for (const key in obj) {
    returnObj[key] = false;
  }
  if(isFull(obj,returnObj)){
    return returnObj;
  }
  throw Error('Something went wrong')
}
console.log('test1',factory(keyValues));



/************/


type BooleanObj<Type> = { [Property in keyof Type]: boolean }
 
const convertValuesToBoolean = <Type extends Record<string, unknown>>(obj: Type): BooleanObj<Type> =>
  Object.entries(obj).reduce((result, [key]) => ({
    ...result,
    [key as keyof Type]: false
  }), {} as BooleanObj<Type>);


const test2 = convertValuesToBoolean(keyValues)

console.log('test2',test2)


/*********/

const convertObjectToBooleanMap = <T extends Record<string, unknown>>(obj: T): Map<keyof T, boolean> => {
  const result = new Map<keyof T, boolean>();
  for (const [key] of Object.entries(obj)) {
    result.set(key, false);
  }
  return result;
};


console.log('test3',convertObjectToBooleanMap(keyValues))

