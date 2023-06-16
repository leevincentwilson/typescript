const keyValues = {
  planA: "PLAN_A",
  planB: "PLAN_B",
  planC: "PLAN_C",
} as const;

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
console.log(factory(keyValues).planA);



/************/


type OptionsFlags<Type> = {
  [Property in keyof Type]: {
    key: Property,
    value: keyof Property
    }
};

type Features = {
  darkMode: number;
  newUserProfile: number;
};
 
type FeatureOptions = OptionsFlags<Features>;


const test: FeatureOptions = {
    darkMode: {
        key: 'darkMode',
        value: 1
    },
    newUserProfile: {
        key: 'newUserProfile',
        value: 2
    }
}





