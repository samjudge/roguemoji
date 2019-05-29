import VectorComponent from "./VectorComponent";

export default class Vector2d {
  public constructor(x: number,y: number) {
    this.x = new VectorComponent(x);
    this.y = new VectorComponent(y);
  }

  public x : VectorComponent;
  public y : VectorComponent;
}