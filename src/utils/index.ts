import { SVGCircleProps, SVGAttributes } from '../types/svg'
import { createCircleElement, createRectElement, createGElement } from '../load/create-element'

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
        const G:SVGElement = createGElement()
        const scale:number = 40
        const round:number = 10
        const rect = createRectElement({
            width: scale,
            height: scale,
            fill: options?.fill,
            rx: round,
            ry: round,
            x: (Rw - scale) / 2 - 50,
            y: (Rh - scale) / 2
        })
        const rect1 = createRectElement({
            width: scale,
            height: scale,
            fill: options?.fill,
            rx: round,
            ry: round,
            x: (Rw - scale) / 2,
            y: (Rh - scale) / 2
        })
        const rect2 = createRectElement({
            width: scale,
            height: scale,
            fill: options?.fill,
            rx: round,
            ry: round,
            x: (Rw - scale) / 2 + 50,
            y: (Rh - scale) / 2
        })
        G.appendChild(rect)
        G.appendChild(rect1)
        G.appendChild(rect2)
        return G
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