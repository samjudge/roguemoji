import HtmlCanvasRenderable from "./../../../renderer/interfaces/HtmlCanvasRenderable";
import HtmlCanvasSurface from "./../../../renderer/surfaces/HtmlCanvasSurface";
import Actor from "./../Actor";
import Vector2d from "./../../../vector/Vector2d";

export default class Quad implements Actor, HtmlCanvasRenderable {
  private position: Vector2d;
  private radius: number;

  public constructor(position: Vector2d, radius: number) {
    this.position = position;
    this.radius = radius;
  }

  public renderTo(Surface: HtmlCanvasSurface): void {
    const canvas = Surface.getCanvasElement();
    const ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.ellipse(
      this.position.x.value,
      this.position.y.value,
      this.radius,
      this.radius,
      0, 0, Math.PI * 2
    );
    ctx.stroke();
  }

  public getPosition(): Vector2d {
    return this.position;
  }
}