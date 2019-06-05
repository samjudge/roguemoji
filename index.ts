import Vector2d from './src/vector/Vector2d';
import DomSurface from './src/renderer/surfaces/dom/DomSurface';
import Placeholder from  './src/game/actors/domRenderableActors/Placeholder';
import KeyboardAdapter from './src/input/adapters/KeyboardAdapter';

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

  const worPosition = new Vector2d(0.5, 0.5);

  const mrFrog = new Placeholder(
    new Vector2d(0,0),
    '🐸'
  );
  const mrDragon = new Placeholder(
    new Vector2d(0.5,0.5),
    '🐉'
  );
  const mrRatboi = new Placeholder(
    new Vector2d(1,1),
    '🐀'
  );

  const keyboardInputAdapter = new KeyboardAdapter(window);

  const timeInit = Date.now();
  let timeNow = timeInit;
  let timeLast = timeNow;
  let timeDelta = 0;

  let timerDelta = 0;
  let timerUpper = 0.1;

  const loop = () => {
    window.setTimeout(() => {
      timeNow = Date.now();
      timeDelta = timeNow - timeLast;
      timeLast = timeNow;
      timerDelta += timeDelta;
      if(timerDelta>=timerUpper) {
        timerDelta = 0;
        if(keyboardInputAdapter.isKeyDown("ArrowUp")) {
          let currentPosition = mrDragon.getPosition();
          let newPosition = new Vector2d(
            currentPosition.x.value,
            currentPosition.y.value - 0.01
          );
          mrDragon.setPosition(newPosition);
          mrDragon.renderTo(surface);
        }
        if(keyboardInputAdapter.isKeyDown("ArrowDown")) {
          let currentPosition = mrDragon.getPosition();
          let newPosition = new Vector2d(
            currentPosition.x.value,
            currentPosition.y.value + 0.01
          );
          mrDragon.setPosition(newPosition);
          mrDragon.renderTo(surface);
        }
        if(keyboardInputAdapter.isKeyDown("ArrowLeft")) {
          let currentPosition = mrDragon.getPosition();
          let newPosition = new Vector2d(
            currentPosition.x.value - 0.01,
            currentPosition.y.value
          );
          mrDragon.setPosition(newPosition);
          mrDragon.renderTo(surface);
        }
        if(keyboardInputAdapter.isKeyDown("ArrowRight")) {
          let currentPosition = mrDragon.getPosition();
          let newPosition = new Vector2d(
            currentPosition.x.value + 0.01,
            currentPosition.y.value
          );
          mrDragon.setPosition(newPosition);
          mrDragon.renderTo(surface);
        }
      }
      surface.clear();
      mrFrog.renderTo(surface);
      mrDragon.renderTo(surface);
      mrRatboi.renderTo(surface);
      loop();
    }, 0);
  }

  loop();

})