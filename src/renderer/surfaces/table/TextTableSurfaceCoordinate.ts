import Vector2d from './../../../vector/Vector2d';

export default class TextTableSurfaceCoordinate {
  public position : Vector2d;

  public constructor(position : Vector2d) {
    this.position = position;
  }

  public toString() : string {
    return this.position.x.value.toString() + '.' + this.position.y.value.toString();
  }
}