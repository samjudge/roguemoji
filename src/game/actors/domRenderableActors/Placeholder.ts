import Actor from "./../Actor";
import Vector2d from "./../../../vector/Vector2d";
import DomRenderable from "./../../../renderer/interfaces/DomRenderable";
import DomSurface from "../../../renderer/surfaces/dom/DomSurface";

export default class Placeholder implements Actor, DomRenderable {
  private relativePosition: Vector2d;
  private symbol : String;

  public constructor(relativePosition: Vector2d, symbol : String) {
    this.relativePosition = relativePosition;
    this.symbol = symbol;
  }

  public renderTo(surface: DomSurface) : void {
    const newNode = <HTMLDivElement> document.createElement('div');
    newNode.innerHTML = <string> this.symbol;
    surface.drawElement(newNode, this.getPosition());
  }

  public getPosition(): Vector2d {
    return this.relativePosition;
  }

  /** @TODO move to actor interface */
  public setPosition(newPosition : Vector2d): Vector2d {
    return this.relativePosition = newPosition;
  }
}