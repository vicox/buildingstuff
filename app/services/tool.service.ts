import {Injectable} from "angular2/core";
import {Http} from "angular2/http";
import {Field} from "../models/field";
import {Tool} from "../models/tool";

@Injectable()
export class ToolService {

  constructor(private _http:Http) {
  }

  getAllTools() {
    return this._http.get('server/tools.json')
      .map(res => res.json())
      .toPromise();
  }

  getTools(field: Field) {
    return this.getAllTools()
      .then(tools => tools.filter(t => t.fieldId === field.id));
  }

  getTool(id: number) {
    return this.getAllTools()
      .then(tools => tools.filter(t => t.id === id)[0]);
  }

  getToolsById(ids: number[]) {
    return this.getAllTools()
      .then(tools => tools.filter(t => ids.indexOf(t.id) > -1));
  }
}
