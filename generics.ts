
type UrqlResponse = { __typename: string };
type TypeName = 'Failure' | 'Success';
const isResponseTest = <
  X extends string,
  R extends UrqlResponse | undefined,
  T extends TypeName >(
  response: R,
  type: T
): response is Extract<
  R,
  { __typename: `${X}${T}` }
> => {
  return response && response?.__typename.includes(type);
}



type Failure = {
    __typename: 'MyAwesomeFailure',
    failed: true
}
type Success = {
    __typename: 'Success',
    success: true
}

type MyResponse = Failure | Success


const myResponse = {
    __typename: 'MyAwesomeFailure',
    failed: true
} as MyResponse

if(isResponseTest(myResponse, 'Success')){
    console.log(myResponse.success)
}else{
    console.log(myResponse.failed)
}

console.log(myResponse.failed)
