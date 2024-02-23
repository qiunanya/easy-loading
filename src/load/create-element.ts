import { SVGCircleProps, SVGRectProps, SVGGProps, SVGAnimateTransformProps, SVGPathProps, SVGAnimateMotionProps } from '../types/svg'
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
    // 百分比子元素居中很难定位，容易出错，所以采用实际像素
    // svgElement.style.width = '100%'
    // svgElement.style.height = '100%'
    svgElement.setAttribute('width', '200px')
    svgElement.setAttribute('height', '200px')
    svgElement.classList.add('esay-loading-svg-dom')
    svgElement.style.position = 'absolute'
    svgElement.style.left = '50%'
    svgElement.style.top = '50%'
    svgElement.style.transform = 'translate(-50%, -50%)'
    return svgElement;
}

/**
 * circle
 * 
 * @param options circleProps
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
    if (options.strokeWidth !== undefined) {
        Element.setAttribute('stroke-width', options.strokeWidth as string)
    }
    if (options.stroke !== undefined) {
        Element.setAttribute('stroke', options.stroke as string)
    }
    options.fill && Element.setAttribute('fill', options.fill)
    options.opacity && Element.setAttribute('opacity', options.opacity as string)
    return Element;
}

/**
 * rect
 * 
 * @param options rectProps
 * @returns { SVGElement } SVGElement
 */
export const createRectElement = (options: SVGRectProps): SVGElement => {
    const Element = document.createElementNS(nameSpace, 'rect')
    const ox = options.x?options.x: '0', oy = options.y?options.y:'0'
    // Element.setAttribute('transform-origin', `${ox} ${oy}`)
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
 * @param options gProps
 * @returns { SVGElement } SVGElement
 */
export const createGElement = (options?: SVGGProps): SVGElement => {
    const Element = document.createElementNS(nameSpace, 'g')
    return Element;
}

/**
 * AnimateTransform
 * 
 * @param options AnimateTransformProps
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
 * @param options animateProps
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

/**
 * animateMotion
 * 
 * @param options AnimateMotionProps
 * @returns { SVGElement } SVGElement
 */
export const createAnimateMotionElement = (options: SVGAnimateMotionProps): SVGElement => {
    const Element = document.createElementNS(nameSpace, 'animateMotion')
    if (options.begin !== undefined) {
        Element.setAttribute('begin', options.begin as string)
    }
    if (options.end !== undefined) {
        Element.setAttribute('end', options.end as string)
    }
    if (options.duration !== undefined) {
        Element.setAttribute('dur', options.duration as string)
    }
    if (options.fill !== undefined) {
        Element.setAttribute('fill', options.fill as string)
    }
    if (options.rotate !== undefined) {
        Element.setAttribute('rotate', options.rotate as string)
    }
    options.repeatCount && Element.setAttribute('repeatCount', options.repeatCount as string)
    options.path && Element.setAttribute('path', options.path)
    return Element
}

/**
 * path
 * 
 * @param options pathProps
 * @returns { SVGElement } SVGElement
 */
export const createPathElement = (options: SVGPathProps): SVGElement => {
    const Element = document.createElementNS(nameSpace, 'path')
    options.d && Element.setAttribute('d', options.d)
    options.fill && Element.setAttribute('fill', options.fill)
    options.opacity && Element.setAttribute('opacity', options.opacity as string)
    options.stroke && Element.setAttribute('stroke', options.stroke)
    options.strokeWidth && Element.setAttribute('stroke-width', options.strokeWidth as string)
    options.strokeLinecap && Element.setAttribute('stroke-linecap', options.strokeLinecap)
    options.strokeLinejoin && Element.setAttribute('stroke-linejoin', options.strokeLinejoin)
    options.strokeMiterlimit && Element.setAttribute('stroke-miterlimit', options.strokeMiterlimit as string)
    return Element
}

/**
 * div
 * 
 * @param options divProps
 * @returns { HTMLElement } HTMLElement
 */
export const createDivElement = (): HTMLElement => {
    const Element = document.createElement('DIV')
    Element.style.position = 'relative'
    Element.style.overflow = "overflow"
    Element.style.top = "0px"
    Element.style.left = "0px"
    Element.style.bottom = "0px"
    Element.style.right = "0px"
    Element.style.outline = '0'
    Element.style.zIndex = '999999'
    Element.style.width = '100%'
    Element.style.height = '100%'
    return Element
}