import { SVGCircleProps, SVGAttributes } from '../types/svg'
import { createCircleElement, createRectElement } from '../load/create-element'

/**
 * Build loading icon type 
 * 
 * @param { String } shape
 * @param { SVGAttributes } options 
 * @returns { SVGElement }
 */
export const buildLoadingShape = (shape: string, options?: SVGAttributes): SVGElement => {
    const svg = document.querySelector('.esay-svg-dom')
    switch (shape) {
        case 'circle':
            return createCircleElement({
                r: 20,
                cx: 100,
                cy: 100,
                stroke: options?.stroke,
                strokeWidth: options?.strokeWidth
            })
            break;
        case 'rect': 
        const Rw:number = svg && svg.clientWidth || 0
        const Rh:number = svg && svg.clientHeight || 0
        return createRectElement({
            width: 50,
            height: 50,
            fill: options?.fill,
            rx: 10,
            ry: 10,
            x: (Rw - 50) / 2,
            y: (Rh - 50) / 2
        })
        break;
        default:
            return createCircleElement({
                r: 20,
                cx: 100,
                cy: 100,
                stroke: options?.stroke,
                strokeWidth: options?.strokeWidth
            })
            break;
    }
}