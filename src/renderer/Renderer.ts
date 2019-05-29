import Surface from './surfaces/Surface';

export default class Renderer {
  private surface: Surface;

  public constructor(surface: Surface) {
    this.surface = surface;
  }
}