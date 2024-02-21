export type SVGAttributes = {
    id?: string;
    className?: string;
    viewBox?: string;
    width?: string | number;
    height?: string | number;
    fill?: string;
    stroke?: string;
    strokeWidth?: number | string;
    skewY?: number | string;
    skewX?: number | string
};

export type SVGAnimateAttributes = {
    id?: string;
    attributeName: string;
    to?: number | string;
    from?: number | string;
    duration?: string;
    fill?: string;
    begin?: string;
    end?: string;
    repeatCount?: string 
}

export type SVGGProps = SVGAttributes & {
};

export type SVGCircleProps = SVGAttributes & {
    cx?: string | number;
    cy?: string | number;
    r?: string | number;
};

export type SVGRectProps = SVGAttributes & {
    x?: string | number;
    y?: string | number;
    width?: string | number;
    height?: string | number;
    rx?: string | number;
    ry?: string | number;
};

export type SVGLineProps = SVGAttributes & {
    x1?: string | number;
    y1?: string | number;
    x2?: string | number;
    y2?: string | number;
};

type animateType = 'scale' | 'rotate' | 'translate' | 'skewX' | 'skewY' | 'skewZ'
export type SVGAnimateTransformProps =  SVGAnimateAttributes & {
    type?: animateType;
    values?: string;
    keyTimes?: string
}