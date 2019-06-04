import TextTableSurface from "../surfaces/table/TextTableSurface";

export default interface TextTableRenderable {
  renderTo(surface: TextTableSurface) : void;
}