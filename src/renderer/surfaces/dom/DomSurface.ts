import Surface from './../Surface';
import Vector2d from './../../../vector/Vector2d';
import Actor from '../../../game/actors/Actor';

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
    this.root.style.overflow = 'hidden';
  }

  private normalToAbsolutePosition(position: Vector2d) : Vector2d {
    return new Vector2d(
      position.x.value * this.size.x.value,
      position.y.value * this.size.y.value
    );
  }

  private absoluteToNormalPosition(position: Vector2d): Vector2d {
    return new Vector2d(
      position.x.value / this.size.x.value,
      position.y.value / this.size.y.value
    );
  }

  public drawElement(domNode : HTMLElement, relativePosition : Vector2d) {
    domNode.style.position = 'absolute';
    domNode.style.left = this.normalToAbsolutePosition(relativePosition).x.value.toString();
    domNode.style.top = this.normalToAbsolutePosition(relativePosition).y.value.toString();
    this.getRootElement().appendChild(domNode);
  }

  public clear(): void {
    while (
      this.getRootElement().firstChild
    ) {
      this.getRootElement().removeChild(
        this.getRootElement().firstChild
      );
    }
  }

  public getSize(): Vector2d {
    return this.size;
  }

  public getRootElement(): HTMLDivElement {
    return this.root;
  }
}