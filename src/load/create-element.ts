import { SVGCircleProps } from '../types/svg'
/**
 * 创建svg标签并返回
 * 
 * @param label svg标签 
 */
const xmlns = 'http://www.w3.org/2000/svg'
export const createSvg = (label: string): SVGElement => {
    const svgElement = document.createElementNS(xmlns, label)
    svgElement.setAttribute('viewBox', '0 0 200 200')
    svgElement.setAttribute('preserveAspectRatio', 'xMidYMid meet')
    svgElement.style.width = '100%'
    svgElement.style.height = '100%'
    svgElement.classList.add('esay-svg-dom')
    return svgElement;
}

/**
 * 创建circle标签
 * 
 * @param options circle元素参数
 * @returns svgElement
 */
export const createCircleElement = (options: SVGCircleProps): SVGElement => {
    const svgElement = document.createElementNS(xmlns, 'circle')
    if (options.r !== undefined) {
        svgElement.setAttribute('r', options.r as string)
    }
    if (options.cy !== undefined) {
        svgElement.setAttribute('cy', options.cy as string)
    }
    if (options.cx !== undefined) {
        svgElement.setAttribute('cx', options.cx as string)
    }
    if (svgElement) {
        svgElement.setAttribute('stroke-width', options.strokeWidth as string || '4')
        svgElement.setAttribute('stroke', options.stroke || "hsl(214, 97%, 59%)")
        svgElement.setAttribute('class', 'circle__loading-icon')
    }
    return svgElement;
}