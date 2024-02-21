import { SVGCircleProps, SVGAttributes } from '../types/svg'
import { 
    createCircleElement, 
    createRectElement, 
    createGElement,
    createAnimateTransformElement,
    createAnimateElement 
} from '../load/create-element'

/**
 * Build loading icon type 
 * 
 * @param { String } shape
 * @param { SVGAttributes } options 
 * @returns { SVGElement }
 */
export const buildLoadingShape = (shape: string, options?: SVGAttributes): SVGElement => {
    const svg = document.querySelector('.esay-loading-svg-dom')
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
        const scaleW:number = 15
        const scaleH:number = 50
        const backgroundColors = ['#F266AB', '#A459D1', '#2CD3E1']
        const totalDuration = 0.2;
        for (let i = 0; i < 3; i++) {
            let SET_X = 0;
            if (i === 0) {
                SET_X = (Rw - scaleW) / 2 - 20
            } else if (i === 1) {
                SET_X = (Rw - scaleW) / 2
            } else if (i === 2) SET_X = (Rw - scaleW) / 2 + 20
            const rect = createRectElement({
                width: scaleW,
                height: scaleH,
                fill: backgroundColors[i],
                x: SET_X,
                y: (Rh - scaleW) / 2,
                ry: 4
            })
            const animate = createAnimateElement({
                attributeName: 'height',
                begin: `${i * totalDuration}s`,
                duration: `1s`,
                values: `${scaleH};10;${scaleH};`,
                repeatCount: 'indefinite'
            })
            rect.appendChild(animate)
            G.appendChild(rect)
        }
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