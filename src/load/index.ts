/**
 * core code
 */
import { createCircleElement, createSvg } from './tool';

interface Options {
    duration: number,
    name: string
}
class Loading {
    name: string = 'svg';
    duration: number = 300;
    private container: HTMLElement;
    private loader: HTMLElement;
    private svgLoader: SVGElement;
    private svgLoaderIcon: SVGElement;
    constructor(Opt: Options) {
        this.name = Opt?.name
        this.duration = Opt?.duration
        this.container = document.createElement('DIV')
        this.container.classList.add('esay-loading-wrap')
        this.svgLoaderIcon = createCircleElement({r: 0 })
        this.loader = document.createElement('DIV')
        this.svgLoader = createSvg('svg')
    }
    public start () {
        this.container.appendChild(this.svgLoader)
        document.body.appendChild(this.container);
        const { height, width, x, y } = this.svgLoader.getBoundingClientRect()
        this.svgLoaderIcon = createCircleElement({
            r: 20,
            cy: height / 2,
            cx: width / 2
        })
        this.svgLoader.appendChild(this.svgLoaderIcon)
        console.log(height, width, x, y, 1111);
        
    }
    public close () {
        document.body.removeChild(this.container);
    }
}

export default Loading;
