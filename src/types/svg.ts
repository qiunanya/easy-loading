type SVGAttributes = {
    // 共用的 SVG 属性
    id?: string;
    className?: string;
    viewBox?: string;
    width?: string | number;
    height?: string | number;
    fill?: string;
    stroke?: string;
    strokeWidth?: number | string;
    // 其他 SVG 属性根据需要添加
};

// 常用 SVG 标签类型
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

// 更多 SVG 标签类型根据需要添加
