import {isOfType} from "./isOfType";
import {TypeNameUnion} from "./typeNameUnion";

const isOfTypeNameFilter = <N extends Parameters<typeof isOfType>[0], T extends TypeNameUnion<N>>(type: T) => {
    return (node: N): node is Extract<N, { __typename: T }> => {
        return isOfType(node, type);
    };
};


type Node = ({__typename:'Team',team:boolean} | {__typename:'NotTeam',notTeam:boolean}| null) []

const nodes:Node = [{__typename:'Team', team: true} ,{__typename:'NotTeam', notTeam:true}]

const teams = nodes.filter(isOfTypeNameFilter('Team'))
const notTeams = nodes.filter(isOfTypeNameFilter('NotTeam'))
const nonGonnaWork = nodes.filter(isOfTypeNameFilter('What'))
