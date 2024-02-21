import { SVGCircleProps, SVGRectProps, SVGGProps, SVGAnimateTransformProps } from '../types/svg'
/**
 * svg
 * 
 * @param label
 * @returns { SVGElement }
 */
const nameSpace = "http://www.w3.org/2000/svg"
export const createSvg = (label: string): SVGElement => {
    const svgElement = document.createElementNS(nameSpace, label)
    svgElement.setAttribute('viewBox', '0 0 240 240')
    svgElement.setAttribute('preserveAspectRatio', 'xMidYMid meet')
    svgElement.style.width = '100%'
    svgElement.style.height = '100%'
    svgElement.classList.add('esay-loading-svg-dom')
    return svgElement;
}

/**
 * circle
 * 
 * @param options circle
 * @returns { SVGElement } svgElement
 */
export const createCircleElement = (options: SVGCircleProps): SVGElement => {
    const Element = document.createElementNS(nameSpace, 'circle')
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
    const Element = document.createElementNS(nameSpace, 'rect')
    const ox = options.x?options.x: '0', oy = options.y?options.y:'0'
    Element.setAttribute('transform-origin', `${ox} ${oy}`)
    Element.setAttribute('width', options.width as string)
    Element.setAttribute('height', options.height as string)
    Element.setAttribute('x', options.x as string)
    Element.setAttribute('y', options.y as string)
    options.rx && Element.setAttribute('rx', options.rx as string)
    options.ry && Element.setAttribute('ry', options.ry as string)
    Element.setAttribute('fill', options.fill as string)
    if (options.skewX !== undefined) {
        Element.setAttribute('transform', `skewX(${options.skewX})`)
    }
    return Element;
}

/**
 * g
 * 
 * @param options g
 * @returns { SVGElement } SVGElement
 */
export const createGElement = (options?: SVGGProps): SVGElement => {
    const Element = document.createElementNS(nameSpace, 'g')
    return Element;
}

/**
 * AnimateTransform
 * 
 * @param options AnimateTransform
 * @returns { SVGElement } SVGElement
 */
export const createAnimateTransformElement = (options: SVGAnimateTransformProps): SVGElement => {
    const Element = document.createElementNS(nameSpace, 'animateTransform')
    Element.setAttribute('attributeName', options.attributeName as string || 'transform')
    Element.setAttribute('attributeType', 'XML')
    if (options.fill !== undefined) {
        Element.setAttribute('fill', options.fill as string)
    }
    if (options.begin !== undefined) {
        Element.setAttribute('begin', options.begin as string)
    }
    if (options.duration !== undefined) {
        Element.setAttribute('dur', options.duration as string)
    }
    options.type && Element.setAttribute('type', options.type as string)
    if (options.from !== undefined) {
        Element.setAttribute('from', options.from as string)
    }
    if (options.to !== undefined) {
        Element.setAttribute('to', options.to as string)
    }
    if (options.values) {
        Element.setAttribute('values', options.values)
    }
    if (options.keyTimes) {
        Element.setAttribute('keyTimes', options.keyTimes)
    }
    options.repeatCount && Element.setAttribute('repeatCount', options.repeatCount as string)
    return Element
}

/**
 * animate
 * 
 * @param options animate
 * @returns { SVGElement } SVGElement
 */
export const createAnimateElement = (options: SVGAnimateTransformProps): SVGElement => {
    const Element = document.createElementNS(nameSpace, 'animate')
    Element.setAttribute('attributeName', options.attributeName as string)
    Element.setAttribute('attributeType', 'XML')
    if (options.begin !== undefined) {
        Element.setAttribute('begin', options.begin as string)
    }
    if (options.end !== undefined) {
        Element.setAttribute('end', options.end as string)
    }
    if (options.duration !== undefined) {
        Element.setAttribute('dur', options.duration as string)
    }
    if (options.from !== undefined) {
        Element.setAttribute('from', options.from as string)
    }
    if (options.fill !== undefined) {
        Element.setAttribute('fill', options.fill as string)
    }
    if (options.to !== undefined) {
        Element.setAttribute('to', options.to as string)
    }
    if (options.values) {
        Element.setAttribute('values', options.values)
    }
    if (options.keyTimes) {
        Element.setAttribute('keyTimes', options.keyTimes)
    }
    options.repeatCount && Element.setAttribute('repeatCount', options.repeatCount as string)
    return Element
}