import { IsBoolean } from './svg';
export interface Options {
    duration: number,
    name: string,
    parent: string,
    stroke?: string,
    strokeWidth?: number | string,
    shape?: string,
    backgroundColor?: string
    fill?: string
    opacity?: number | string,
    isEnableGradient?: IsBoolean,
    isMix?: IsBoolean,
    svg?: {
        width?: string | number,
        height?: string | number,
    }
}