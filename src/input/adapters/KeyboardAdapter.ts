export default class KeyboardAdapter {

  private handle : EventTarget;

  private keyDownStates : Map<string, boolean>;
  private keyPressedStates : Map<string, boolean>;
  private keyUpStates : Map<string, boolean>;
  private keyReleasedStates : Map<string, boolean>;

  public constructor(handle: EventTarget) {
    this.handle = handle;
    //handle keydown, keypressed states on keydown event
    this.handle.addEventListener('keydown', (e : KeyboardEvent) => {
      if(this.keyUpStates.has(e.key)) {
        this.keyUpStates.set(e.key, false);
      }
      this.keyDownStates.set(e.key, true);      
      this.keyPressedStates.set(e.key, true);
      //mark to unset keydown on next cycle
      (() => {
        return new Promise<void>((done) => {
          this.keyPressedStates.set(e.key, false);
          done();
        });
      })();
    });
    //handle keyup, keyrelease states on keyup event
    this.handle.addEventListener('keyup', (e : KeyboardEvent) => {
      if(this.keyDownStates.has(e.key)) {
        this.keyDownStates.set(e.key, false);
      }
      this.keyUpStates.set(e.key, true);
      this.keyReleasedStates.set(e.key, true);
      //mark to unset keyup on next cycle
      (() => {
        return new Promise<void>((done) => {
          this.keyReleasedStates.set(e.key, false);
          done();
        });
      })();
    });
  }

  /**
   * is given key down
   * @param key
   */
  public isKeyDown(key: string) : boolean {
    if(!this.keyDownStates.has(key)) {
      return false;
    }
    return this.keyDownStates.get(key);
  }

  /**
   * is given key up
   * @param key
   */
  public isKeyUp(key: string) : boolean {
    if(!this.keyPressedStates.has(key)) {
      return false;
    }
    return this.keyPressedStates.get(key);
  }

  /**
   * has given key been pressed down this cycle
   * @param key
   */
  public isKeyPressed(key: string) : boolean {
    if(!this.keyPressedStates.has(key)) {
      return false;
    }
    return this.keyPressedStates.get(key);
  }

  /**
   * has given key been released this cycle
   * @param key
   */
  public isKeyReleased(key: string) : boolean {
    if(!this.keyDownStates.has(key)) {
      return false;
    }
    return this.keyDownStates.get(key);
  }
}