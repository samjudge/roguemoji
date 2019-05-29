import HtmlCanvasRenderable from "./../../../renderer/interfaces/HtmlCanvasRenderable";
import HtmlCanvasSurface from "./../../../renderer/surfaces/HtmlCanvasSurface";
import Actor from "./../Actor";
import Vector2d from "./../../../vector/Vector2d";

export default class Quad implements Actor, HtmlCanvasRenderable {
  private position: Vector2d;
  private size: Vector2d;

  public constructor(position: Vector2d, size: Vector2d) {
    this.position = position;
    this.size = size;
  }

  public renderTo(Surface: HtmlCanvasSurface): void {
    const canvas = Surface.getCanvasElement();
    const ctx = canvas.getContext("2d");
    ctx.fillRect(
      this.position.x.value,
      this.position.y.value,
      this.size.x.value,
      this.size.y.value
    );
  }

  public getPosition(): Vector2d {
    return this.position;
  }
}