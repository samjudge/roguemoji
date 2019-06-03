import TextTableSurface from "../surfaces/table/TextTableSurface";

export default interface TextRenderable {
  renderTo(surface: TextTableSurface) : void;
}