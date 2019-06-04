import Actor from "./../Actor";
import Vector2d from "./../../../vector/Vector2d";
import DomRenderable from "./../../../renderer/interfaces/TextRenderable";
import DomSurface from "../../../renderer/surfaces/dom/DomSurface";

export default class Placeholder implements Actor, DomRenderable {
  private position: Vector2d;
  private symbol : String;

  public constructor(position: Vector2d, symbol : String) {
    this.position = position;
    this.symbol = symbol;
  }

  public renderTo(surface: DomSurface) : void {
    const root = <HTMLDivElement> surface.getRootElement();
    const newNode = <HTMLDivElement> document.createElement('div');
    newNode.style.position = 'absolute';
    newNode.style.left = this.getPosition().x.value.toString();
    newNode.style.top = this.getPosition().y.value.toString();
    newNode.innerHTML = <string> this.symbol;
    root.appendChild(newNode);
  }

  public getPosition(): Vector2d {
    return this.position;
  }
}