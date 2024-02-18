/**
 * core code
 */
import { createCircleElement, createSvg } from './create-element';

interface Options {
    duration: number,
    name: string,
    parent: string,
    stroke?: string,
    strokeWidth?: number | string
}
class Loading {
    name: string = 'svg';
    duration: number = 1500;
    parent: string = 'body';
    private container: HTMLElement;
    private svg: SVGElement;
    private svgLoaderIcon: SVGElement;
    private parentDom?: HTMLElement;
    private strokeWidth?: number | string;
    private stroke?: string;
    constructor(Opt: Options) {
        this.name = Opt?.name
        this.duration = Opt?.duration
        this.parent = Opt?.parent || 'body'
        this.stroke = Opt?.stroke
        this.strokeWidth = Opt?.strokeWidth
        this.container = document.createElement('DIV')
        this.container.classList.add('esay-loading-mask')
        this.svgLoaderIcon = createCircleElement({r: 0 })
        this.svg = createSvg('svg')
    }
    public start () {
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
        this.svgLoaderIcon = createCircleElement({
            r: 20,
            cx: '50%',
            cy: '50%',
            stroke: this.stroke || '#3189fc',
            strokeWidth: this.strokeWidth || 5
        })
        
        this.svg.appendChild(this.svgLoaderIcon)
        this.container.appendChild(this.svg)
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
