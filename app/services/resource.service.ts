import {Injectable} from "angular2/core";
import {Field} from "../models/field";
import {Resource} from "../models/resource";

const RESOURCES: Resource[] = [
  { "id": 1, "fieldId": 1, "name": "Resource 1" },
  { "id": 2, "fieldId": 1, "name": "Resource 2" },
  { "id": 3, "fieldId": 1, "name": "Resource 3" },
];

@Injectable()
export class ResourceService {
  getResources(field: Field) {
      return Promise.resolve(RESOURCES)
        .then(resources => resources.filter(r => r.fieldId === field.id));
  }

  getResource(id: number) {
      return Promise.resolve(RESOURCES)
      .then(resources => resources.filter(r => r.id === id)[0]);
  }

  getResourcesById(ids: number[]) {
      return Promise.resolve(RESOURCES)
          .then(resources => resources.filter(r => ids.indexOf(r.id) > -1));
  }
}