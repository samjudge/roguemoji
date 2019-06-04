import Vector2d from './src/vector/Vector2d';
import DomSurface from './src/renderer/surfaces/dom/DomSurface';
import Placeholder from  './src/game/actors/domRenderableActors/Placeholder';

window.addEventListener('load',() => {

  /* get a htmlcanvas */
  const divElementRoot = <HTMLDivElement> document.getElementById('root');

  /* create a surface */
  const surface = new DomSurface(
    divElementRoot,
    new Vector2d(100,100)
  );

  /**
   * testbox
   */
  const mrFrog = new Placeholder(
    new Vector2d(0,0),
    '🐸'
  );
  const mrDragon = new Placeholder(
    new Vector2d(50,50),
    '🐉'
  );
  const mrRatboi = new Placeholder(
    new Vector2d(100,100),
    '🐀'
  );

  mrFrog.renderTo(surface);
  mrDragon.renderTo(surface);
  mrRatboi.renderTo(surface);
})