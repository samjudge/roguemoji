import VectorComponent from "./VectorComponent";

export default class Vector2d {
  public constructor(x: number,y: number) {
    this.x = new VectorComponent(x);
    this.y = new VectorComponent(y);
  }

  public x : VectorComponent;
  public y : VectorComponent;

  public dot(n : Vector2d) : number{
    return n.x.value * this.x.value - n.y.value * this.y.value;
  }

  public magnitude() : number {
    return Math.sqrt((this.x.value * this.x.value) + (this.y.value * this.y.value));
  }
}