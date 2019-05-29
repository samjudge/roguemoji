import HtmlCanvasSurface from "../surfaces/HtmlCanvasSurface";

export default interface HtmlCanvasRenderable {
  renderTo(surface: HtmlCanvasSurface) : void;
}