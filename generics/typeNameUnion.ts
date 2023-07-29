export type TypeNameUnion<T> = T extends { __typename: infer U } ? U : never;
