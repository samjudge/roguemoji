import Surface from './../Surface';
import Vector2d from './../../../vector/Vector2d';

export default class DomSurface extends Surface {
  private size : Vector2d;
  private root: HTMLDivElement;

  public constructor(
    root : HTMLDivElement,
    size : Vector2d
  ) {
    super();
    this.root = root;
    this.size = size;
    this.root.style.position = 'relative';
    this.root.style.width = this.size.x.value.toString() + 'px';
    this.root.style.height = this.size.y.value.toString() + 'px';
  }

  public getSize(): Vector2d {
    return this.size;
  }

  public getRootElement(): HTMLDivElement {
    return this.root;
  }
}