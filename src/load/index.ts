/**
 * core code
 */
import { createCircleElement, createSvg } from './tool';

interface Options {
    duration: number,
    name: string,
    parent: string
}
class Loading {
    name: string = 'svg';
    duration: number = 300;
    parent: string = 'body';
    private container: HTMLElement;
    private loader: HTMLElement;
    private svgLoader: SVGElement;
    private svgLoaderIcon: SVGElement;
    private parentDom?: HTMLElement;
    constructor(Opt: Options) {
        this.name = Opt?.name
        this.duration = Opt?.duration
        this.parent = Opt?.parent || 'body'
        this.container = document.createElement('DIV')
        this.container.classList.add('esay-loading-wrap')
        this.svgLoaderIcon = createCircleElement({r: 0 })
        this.loader = document.createElement('DIV')
        this.svgLoader = createSvg('svg')
    }
    public start () {
        this.container.appendChild(this.svgLoader)
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
        console.log(this.parent, 11111);
        const arr = this.svgLoader.getAttribute('viewBox')?.split(' ').map(el => +el)
        this.svgLoaderIcon = createCircleElement({
            r: 20,
            cy: arr?arr[2]/2: 100,
            cx: arr?arr[2]/2:100
        })
        
        this.svgLoader.appendChild(this.svgLoaderIcon)
    }
    public close () {
        if (this.parentDom && this.parent !== 'body') {
            this.parentDom.removeChild(this.container)
        } else {
            document.body.removeChild(this.container);
        }
    }
}

export default Loading;
