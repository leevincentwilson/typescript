type UrqlResponse = { __typename: string };

export const containsOfType = <
  R extends UrqlResponse | undefined | null,
  T extends string,
  X extends string
>(
  response: R,
  type: T
): response is Extract<
  R,
  { __typename: `${X}${T}` }
> => {
  return (response?.__typename|| '').includes( type);
}


type Failure = {
    __typename: 'MyAwesomeFailure',
    failed: true
}
type Success = {
    __typename: 'Success',
    success: true
}

type Unknown = {
    __typename: 'Unknown',
    unknown: true
}

type MyResponse = Failure | Success |Unknown


const myResponse = {
    __typename: 'MyAwesomeFailure',
    failed: true
} as MyResponse

if(containsOfType(myResponse, 'Success')){
    console.log(myResponse.success)
}else if(containsOfType(myResponse,'Failure')){
    console.log(myResponse.failed)
}else{
  console.log(myResponse.unknown)
}
console.log(myResponse.unknown)



export const containsType = <
  R extends UrqlResponse | undefined | null,
  T extends string,
>(
  response: R,
  type: T
): response is Extract<
  R,
  { __typename: `${T}` }
> => {
  return response?.__typename === type;
}

if(containsType(myResponse, 'Success')){
    console.log(myResponse.success)
}else if(containsType(myResponse,'MyAwesomeFailure')){
    console.log(myResponse.failed)
}else{
  console.log(myResponse.unknown)
}
console.log(myResponse.unknown)
