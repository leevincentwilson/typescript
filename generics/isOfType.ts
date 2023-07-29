import {TypeNameUnion} from "./typeNameUnion";
export const isOfType = <
    R extends { __typename: string } | undefined | null,
    T extends TypeNameUnion<R>,
>(
    response: R,
    type: T
): response is Extract<
    R,
    { __typename: `${T}` }
> => {
    return response?.__typename === type;
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

if(isOfType(myResponse, 'Success')){
    console.log(myResponse.success)
}else if(isOfType(myResponse,'MyAwesomeFailure')){
    console.log(myResponse.failed)
}else{
    console.log(myResponse.unknown)
}
console.log(myResponse.unknown)

isOfType(myResponse, 'NotMyType')