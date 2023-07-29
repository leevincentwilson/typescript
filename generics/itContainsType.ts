export const containsType = <
    R extends { __typename: string } | undefined | null,
    T extends string,
    X extends string
>(
    response: R,
    type: T
): response is Extract<
    R,
    { __typename: `${X}${T}` }
> => {
    return response?.__typename.includes(type);
}



type MyAwesomeFailure = {
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

type MyResponse = MyAwesomeFailure | Success |Unknown

const myResponse = {
    __typename: 'MyAwesomeFailure',
    failed: true
} as MyResponse

if(containsType(myResponse, 'Success')){
    console.log(myResponse.success)
}else if(containsType(myResponse,'Failure')){
    console.log(myResponse.failed)
}else{
    console.log(myResponse.unknown)
}


