import Surface from './Surface';

export default class HtmlCanvasSurface extends Surface {
  private domNode : HTMLCanvasElement;

  public constructor(domNode : HTMLCanvasElement) {
    super();
    this.domNode = domNode;
  }

  public getCanvasElement() : HTMLCanvasElement {
    return this.domNode;
  }
}