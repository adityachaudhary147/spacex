import { MODIFY_LAND, MODIFY_LAUNCH, MODIFY_YEAR } from "./types";

export function modifyYear(value)
{
    return {type:MODIFY_YEAR,value:value};
}
export function modifyLaunch(value)
{
    return {type:MODIFY_LAUNCH,value:value};
}
export function modifyLand(value)
{
    return {type:MODIFY_LAND,value:value};
}