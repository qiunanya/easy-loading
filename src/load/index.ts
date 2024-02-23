/**
 * core code
 */
import { createSvg, createDivElement } from './create-element';
import { buildLoadingShape } from '../utils/index';

interface Options {
    duration: number,
    name: string,
    parent: string,
    stroke?: string,
    strokeWidth?: number | string,
    shape?: string,
    backgroundColor?: string
    fill?: string
    opacity?: number | string
}
class Loading {
    name: string = 'svg';
    duration: number = 1500;
    parent: string = 'body';
    public shape?: string = 'circle';
    private container: HTMLElement;
    private svg: SVGElement;
    private svgLoaderIcon?: SVGElement;
    private parentDom?: HTMLElement;
    private strokeWidth?: number | string;
    private stroke?: string;
    private fill?: string;
    private backgroundColor?: string;
    private opacity?: number | string;
    constructor(Opt: Options) {
        this.name = Opt?.name
        this.duration = Opt?.duration
        this.parent = Opt?.parent || 'body'
        this.stroke = Opt?.stroke
        this.strokeWidth = Opt?.strokeWidth
        this.shape = Opt?.shape
        this.fill = Opt?.fill
        this.opacity = Opt?.opacity
        this.container = createDivElement()
        this.backgroundColor = this.container.style.background = Opt?.backgroundColor as string || 'rgba(0, 0, 0, 0.4)';
        this.svg = createSvg('svg')
    }
    public start () {
        this.container.appendChild(this.svg)
        try {
            if (this.parent !== 'body') {
                this.parentDom = document.querySelector(`.${this.parent}`) as HTMLElement;
                this.parentDom?.appendChild(this.container)
            } else {
                this.container.style.position = 'fixed'
                document.body.appendChild(this.container)
            }
        } catch (error) {
            console.log(error);
        }

        this.svgLoaderIcon = buildLoadingShape(this.shape as string, {
            stroke: this.stroke,
            strokeWidth: this.strokeWidth,
            fill: this.fill,
            duration: this.duration,
            opacity: this.opacity
        })
        this.svg.appendChild(this.svgLoaderIcon)
    }
    public close () {
        if (this.parentDom && this.parent !== 'body') {
            this.parentDom.removeChild(this.container)
        } else {
            document.body.removeChild(this.container)
        }
    }
}

export default Loading;
