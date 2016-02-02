import {Injectable} from "angular2/core";
import {Http} from "angular2/http";
import {Field} from "../models/field";
import {Resource} from "../models/resource";

@Injectable()
export class ResourceService {

  constructor(private _http:Http) {
  }

  getAllResources() {
    return this._http.get('server/resources.json')
      .map(res => res.json())
      .toPromise();
  }

  getResources(field: Field) {
    return this.getAllResources()
      .then(resources => resources.filter(r => r.fieldId === field.id));
  }

  getResource(id: number) {
    return this.getAllResources()
      .then(resources => resources.filter(r => r.id === id)[0]);
  }

  getResourcesById(ids: number[]) {
    return this.getAllResources()
      .then(resources => resources.filter(r => ids.indexOf(r.id) > -1));
  }
}
