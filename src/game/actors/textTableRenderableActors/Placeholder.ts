import Actor from "./../Actor";
import Vector2d from "./../../../vector/Vector2d";
import TextTableRenderable from "./../../../renderer/interfaces/TextTableRenderable";
import TextTableSurface from "../../../renderer/surfaces/table/TextTableSurface";
import TextTableSurfaceCoordinate from "../../../renderer/surfaces/table/TextTableSurfaceCoordinate";

export default class Placeholder implements Actor, TextTableRenderable {
  
  private position: Vector2d;

  public constructor(position: Vector2d) {
    this.position = position;
  }

  public renderTo(surface: TextTableSurface) : void {
    const cell = surface.getCellAt(
      new TextTableSurfaceCoordinate(this.getPosition())
    );
    cell.innerText = '🐉';
  }

  public getPosition(): Vector2d {
    return this.position;
  }
}