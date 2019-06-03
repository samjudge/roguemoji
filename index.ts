import HtmlCanvasSurface from './src/renderer/surfaces/HtmlCanvasSurface';
import Vector2d from './src/vector/Vector2d';
import Circle from './src/game/actors/htmlCanvasRenderableActors/Circle';
import TextTableSurface from './src/renderer/surfaces/table/TextTableSurface';
import Placeholder from './src/game/actors/textRenderableActors/Placeholder';

window.addEventListener('load',() => {

  /* get a htmlcanvas */
  const htmlTableSurfaceRoot = document.getElementsByTagName('table')[0];

  /* create a surface */
  const surface = new TextTableSurface(
    htmlTableSurfaceRoot,
    new Vector2d(10,10)
  );

  /**
   * testbox
   */
  let placeholder1 = new Placeholder(
    new Vector2d(0,0)
  );
  let placeholder2 = new Placeholder(
    new Vector2d(4,4)
  );
  let placeholder3 = new Placeholder(
    new Vector2d(9,9)
  );

  placeholder1.renderTo(surface);
  placeholder2.renderTo(surface);
  placeholder3.renderTo(surface);

})