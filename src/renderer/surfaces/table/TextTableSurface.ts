import Surface from './../Surface';
import Vector2d from './../../../vector/Vector2d';
import TextTableSurfaceCoordinate from './TextTableSurfaceCoordinate';

export default class TextTableSurface extends Surface {
  private table : HTMLTableElement;
  private size : Vector2d;
  /* a map is used for faster lookups over iteration */
  private dataCells : Map<String,HTMLTableDataCellElement>;

  public constructor(table : HTMLTableElement, size : Vector2d) {
    super();
    this.table = table;
    this.size = size;
    this.dataCells = new Map<String,HTMLTableDataCellElement>();
    /*
     * mutations + side effects
     */
    this.buildTable()
  }

  private buildTable() : void {
    for(let y = 0; y < this.size.y.value; y++) {
      /**
       * @TODO this should probably go through a factory
       */
      let tableRow = <HTMLTableRowElement> document.createElement('tr');
      for(let x = 0; x < this.size.x.value; x++) {
        /**
         * @TODO see above
         */
        let tableCell = <HTMLTableDataCellElement> document.createElement('td');
        let coordinate = new TextTableSurfaceCoordinate(
          new Vector2d(x,y)
        );
        this.dataCells.set(coordinate.toString(), tableCell);
        tableRow.appendChild(tableCell);
      }
      this.getRootElement().appendChild(tableRow);
    }
  }

  public getCellAt(coordinate : TextTableSurfaceCoordinate) : HTMLTableDataCellElement {
    let out = null;
    if(this.dataCells.has(coordinate.toString())) {
      out=this.dataCells.get(coordinate.toString());
    } else {
      throw new Error("Coordinate not set exception \
        -> Provisioned coordinate hash, `" + coordinate.toString() + "`, does not exist in the referenced textTableSurface \
        -> In method getCellAt");
    }
    return out;
  }

  public getRootElement() : HTMLTableElement {
    return this.table;
  }

  public getSize(): Vector2d {
    return this.size;
  }
}