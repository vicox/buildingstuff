import {Injectable} from "angular2/core";
import {Http} from "angular2/http";
import {Field} from "../models/field";

@Injectable()
export class FieldService {

  constructor(private _http:Http) {
  }

  getFields() {
    return this._http.get('server/fields.json')
      .map(res => res.json())
      .toPromise();
  }

  getField(id: number) {
    return this.getFields()
      .then(fields => fields.filter(f => f.id === id)[0]);
  }
}
