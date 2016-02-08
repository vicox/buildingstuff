import {Injectable} from "angular2/core";
import {Http} from "angular2/http";

@Injectable()
export class ElementTypeService {

  constructor(private _http:Http) {
  }

  getAllElementTypes() {
    return this._http.get('server/element-types.json')
      .map(res => res.json())
      .toPromise();
  }

  getElementType(id: number) {
    return this.getAllElementTypes()
      .then(elementType => elementType.filter(cp => cp.id === id)[0]);
  }

  getElementTypesWithIds(ids: number[]) {
    return this.getAllElementTypes()
      .then(elementTypes => elementTypes.filter(et => ids.indexOf(et.id) > -1));
  }
}
