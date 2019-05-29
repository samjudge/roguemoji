import HtmlCanvasSurface from './src/renderer/surfaces/HtmlCanvasSurface';
import Renderer from './src/renderer/Renderer';
import Quad from './src/game/actors/htmlCanvasRenderableActors/Quad';
import Vector2d from './src/vector/Vector2d';

window.addEventListener('load',() => {

  /* get a htmlcanvas */
  const htmlCanvasSurface = document.getElementsByTagName('canvas')[0];

  /* create a surface */
  const surface = new HtmlCanvasSurface(htmlCanvasSurface);

  /**
   * testbox
   */
  let quad = new Quad(
    new Vector2d(10,10),
    new Vector2d(20,20)
  );

  quad.renderTo(surface);

})