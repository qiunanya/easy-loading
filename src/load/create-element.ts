import { SVGCircleProps, SVGRectProps, SVGGProps } from '../types/svg'
/**
 * svg
 * 
 * @param label
 * @returns { SVGElement }
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
 * circle
 * 
 * @param options circle
 * @returns { SVGElement } svgElement
 */
export const createCircleElement = (options: SVGCircleProps): SVGElement => {
    const Element = document.createElementNS(xmlns, 'circle')
    if (options.r !== undefined) {
        Element.setAttribute('r', options.r as string)
    }
    if (options.cy !== undefined) {
        Element.setAttribute('cy', options.cy as string)
    }
    if (options.cx !== undefined) {
        Element.setAttribute('cx', options.cx as string)
    }
    if (Element) {
        Element.setAttribute('stroke-width', options.strokeWidth as string || '4')
        Element.setAttribute('stroke', options.stroke || "hsl(214, 97%, 59%)")
        Element.setAttribute('class', 'circle__loading-icon')
    }
    return Element;
}

/**
 * rect
 * 
 * @param options rect
 * @returns { SVGElement } SVGElement
 */
export const createRectElement = (options: SVGRectProps): SVGElement => {
    const Element = document.createElementNS(xmlns, 'rect')
    Element.setAttribute('width', options.width as string)
    Element.setAttribute('height', options.height as string)
    Element.setAttribute('x', options.x as string)
    Element.setAttribute('y', options.y as string)
    Element.setAttribute('rx', options.rx as string)
    Element.setAttribute('ry', options.ry as string)
    Element.setAttribute('fill', options.fill as string)
    return Element;
}

/**
 * g
 * 
 * @param options g
 * @returns { SVGElement } SVGElement
 */
export const createGElement = (options?: SVGGProps): SVGElement => {
    const Element = document.createElementNS(xmlns, 'g')
    return Element;
}