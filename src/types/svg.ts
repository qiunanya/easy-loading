export type IsBoolean = true | false;

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
    skewX?: number | string;
    opacity?: number | string;
    duration?: number | string;
    isEnableGradient?: IsBoolean;
    isMix?: IsBoolean,
};

type RepeatCount = "indefinite" | 'freeze'
export type SVGAnimateAttributes = {
    id?: string;
    attributeName?: string;
    to?: number | string;
    from?: number | string;
    duration?: number | string;
    fill?: string;
    begin?: number | string;
    end?: string;
    repeatCount?: RepeatCount; 
}

export type SVGGProps = SVGAttributes & {
};

export type SVGDefsProps = {
};

export type SVGLinearGradientProps = SVGAttributes & {

};

export type SVGStopProps = {
    offset?: number | string;
    stopColor?: string
}

export type SVGCircleProps = SVGAttributes & {
    cx?: string | number;
    cy?: string | number;
    r?: string | number;
    strokeLinecap?: string;
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

export type SVGAnimateMotionProps =  SVGAnimateAttributes & {
    path?: string,
    rotate?: number | string;
}

export type SVGPathProps = {
    d: string;
    fill?: string;
    opacity?: number | string;
    strokeWidth?: number |string;
    stroke?: string;
    strokeLinecap?: string;
    strokeLinejoin?: string;
    strokeMiterlimit?: number | string;
}