import { SVGCircleProps, SVGAttributes } from '../types/svg'
import { 
    createCircleElement, 
    createRectElement, 
    createGElement,
    createPathElement,
    createAnimateElement,
    createAnimateTransformElement,
    createAnimateMotionElement,
    createDefsElement,
    createLinearGradientElement,
    createStopElement 
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
            const G1 = createGElement()
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
        case 'ring1':
            const RG = createGElement()
            const RDefs = createDefsElement()
            const RLinearGradient = createLinearGradientElement({ id: 'gradient1'})
            const offsets = ['30%', '60%', '100%']
            const stopColors = ['#1c8cff', '#1584d6', '#0c6ebf']
            const animateStopColor = ['#1c8cff; #3eaee9; #1c8cff', '#1584d6; #3eaee9; #1584d6', '#0c6ebf; #3eaee9; #0c6ebf']
            for (let i = 0; i < 3; i++) {
                const stop = createStopElement({
                    stopColor: stopColors[i],
                    offset: offsets[i]
                })
                const animate = createAnimateElement({
                    attributeName: 'stop-color',
                    repeatCount: 'indefinite',
                    duration: 5,
                    values: animateStopColor[i]
                })
                stop.appendChild(animate)
                RLinearGradient.appendChild(stop)
            }
            const RCircle = createCircleElement({
                strokeLinecap: 'round',
                r: 70,
                cx: 120,
                cy: 120,
                strokeWidth: options?.strokeWidth || 10,
                stroke: options?.isEnableGradient ? 'url(#gradient1)': '#3189fc',
                fill: 'none'
            })
            const RAnimateTrans = createAnimateTransformElement({
                attributeName: "transform",
                type: 'rotate',
                from: '0 120 120',
                to: '360 120 120',
                duration: options?.duration || 2.5,
                repeatCount: 'indefinite'
            })
            RDefs.appendChild(RLinearGradient)
            RG.appendChild(RDefs)
            RCircle.appendChild(RAnimateTrans)
            for (let i = 0; i < 2; i++) {
                const RAnimate = createAnimateElement({
                    attributeName: i ? "stroke-dashoffset":"stroke-dasharray",
                    duration: options?.duration&&(+options.duration - 0.5) || 2,
                    values: i ? '0; -100; -439':'1, 520; 360, 520; 1, 520',
                    keyTimes: '0; 0.5; 1',
                    repeatCount: 'indefinite'
                })
               RCircle.appendChild(RAnimate)
            }
            RG.appendChild(RCircle)
            return RG;
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
            const TG = createGElement()
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
        case 'eightDown':
            const EG = createGElement()
            const EPath = createPathElement({
                d: pathSet.d4,
                stroke: '#EDEDED',
                fill: 'none',
                strokeWidth: 7,
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeMiterlimit: 16.0171
            })
            EG.append(EPath)
            const fillColors = ['#F266AB', '#A459D1', '#2CD3E1']
            for (let i = 0; i < 3; i++) {
                const ECircle = createCircleElement({
                    r: 5,
                    stroke: '#3498db',
                    strokeWidth: 3,
                    fill: fillColors[i],
                    opacity: 1
                })
                const EAnimateMotion = createAnimateMotionElement({
                    path: pathSet.d4,
                    duration: options?.duration?options.duration: 3,
                    begin: (i * 3) / 10,
                    repeatCount: 'indefinite',
                    rotate: 0
                })
                ECircle.append(EAnimateMotion)
                EG.append(ECircle)
            }
            return EG;
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