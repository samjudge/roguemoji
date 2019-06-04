import DomSurface from "../surfaces/dom/DomSurface";

export default interface DomRenderable {
  renderTo(surface: DomSurface) : void;
}