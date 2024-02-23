import { SVGCircleProps, SVGAttributes } from '../types/svg'
import { 
    createCircleElement, 
    createRectElement, 
    createGElement,
    createPathElement,
    createAnimateElement,
    createAnimateTransformElement 
} from '../load/create-element'

import pathSet from '../utils/path'

/**
 * Build loading icon type 
 * 
 * @param { String } shape
 * @param { SVGAttributes } options 
 * @returns { SVGElement }
 */
export const buildLoadingShape = (shape: string, options?: SVGAttributes): SVGElement => {
    const svg = document.querySelector('.esay-loading-svg-dom')
    const Rw:number = svg && svg.clientWidth || 0
    const Rh:number = svg && svg.clientHeight || 0
    console.log(Rw, Rh);
    
    switch (shape) {
        case 'columnar':
            const G:SVGElement = createGElement()
            const scaleW:number = 15
            const scaleH:number = 50
            const backgroundColors = ['#F266AB', '#A459D1', '#2CD3E1']
            const totalDuration = 0.2;
            for (let i = 0; i < 3; i++) {
                const rect = createRectElement({
                    width: scaleW,
                    height: scaleH,
                    fill: backgroundColors[i],
                    x: -(scaleW / 2) * i * 3,
                    y: -(scaleH / 2) - 10,
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
            // rect坐标以左上角为准，g元素坐标为svg的一半，刚好是svg的中心坐标
            // rect取宽高的一半就是其中心坐标
            G.setAttribute('transform', `translate(${Rw/2}, ${Rh/2}) scale(-1)`)
            return G
            break;
        case 'ring':
            const G1:SVGElement = createGElement()
            const path1 = createPathElement({
                d: pathSet.d1,
                opacity: 0.2,
                fill: options?.fill ? options.fill: '#ff6700'
            })
            const path2 = createPathElement({
                d: pathSet.d2,
                fill: options?.fill ? options.fill: '#ff6700'
            })
            const animateTransform = createAnimateTransformElement({
                attributeName: 'transform',
                type: 'rotate',
                from: '0 120 120',
                to: '360 120 120',
                duration: options?.duration?options.duration:'0.8s',
                repeatCount: 'indefinite'
            })
            path2.appendChild(animateTransform)
            G1.appendChild(path1)
            G1.appendChild(path2)
            return G1;
            break;
        case 'partArc':
            const path3 = createPathElement({
                d: pathSet.d3,
                fill: options?.fill ? options.fill: '#ff6700'
            })
            const animateTransform3 = createAnimateTransformElement({
                attributeName: 'transform',
                type: 'rotate',
                from: '0 120 120',
                to: '360 120 120',
                duration: options?.duration?options.duration:'0.8s',
                repeatCount: 'indefinite'
            })
            path3.appendChild(animateTransform3)
            return path3
            break;
        case 'transition':
            const TG:SVGElement = createGElement()
            const sum = 3;
            const distance = Rw / sum;
            for (let i = 0; i < sum; i++) {
                const tCircle = createCircleElement({
                    r: 20,
                    cx: i * distance + (distance * 0.8),
                    cy: Rh/2 + 20,
                    fill: options?.fill ? options.fill: '#fff'
                })
                const tAnimate = createAnimateElement({
                    attributeName: "opacity",
                    duration: '1s',
                    values: "0;1;0",
                    repeatCount: "indefinite",
                    begin: (i + 1) / 10
                })
                tCircle.appendChild(tAnimate)
                TG.appendChild(tCircle)
            }
            return TG;
            break;
        default:
            const SG:SVGElement = createGElement()
            const circle = createCircleElement({
                r: 70,
                cx: 120,
                cy: 120,
                stroke: options?.stroke,
                strokeWidth: options?.strokeWidth,
                fill: 'transparent',
                opacity: options?.opacity
            })
            const circle1 = createCircleElement({
                r: 13,
                cx: 120,
                cy: 50,
                fill: options?.fill,
            })
            const animateTransform4 = createAnimateTransformElement({
                attributeName: 'transform',
                type: 'rotate',
                from: '0 120 120',
                to: '360 120 120',
                duration: options?.duration?options.duration:'1s',
                repeatCount: 'indefinite'
            })
            SG.appendChild(circle)
            SG.appendChild(circle1)
            circle1.appendChild(animateTransform4)
            return SG;
            break;
    }
}