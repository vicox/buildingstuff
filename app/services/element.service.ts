import {Injectable} from "angular2/core";
import {Http} from "angular2/http";
import {ElementType} from "../models/element-type";

@Injectable()
export class ElementService {

  constructor(private _http:Http) {
  }

  getAllElements() {
    return this._http.get('server/elements.json')
      .map(res => res.json())
      .toPromise();
  }

  getElements(type: ElementType) {
    return this.getAllElements()
      .then(elements => elements.filter(c => c.typeId === type.id));
  }

  getElement(id: number) {
    return this.getAllElements()
      .then(elements => elements.filter(c => c.id === id)[0]);
  }

  getElementsWithIds(ids: number[]) {
    return this.getAllElements()
      .then(elements => elements.filter(e => ids.indexOf(e.id) > -1));
  }
}
