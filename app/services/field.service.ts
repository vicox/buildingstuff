import {Injectable} from "angular2/core";
import {Field} from "../models/field";

const FIELDS: Field[] = [
  { "id": 1, "name": "Some Field" }
];

@Injectable()
export class FieldService {
  getFields() {
    return Promise.resolve(FIELDS);
  }

  getField(id: number) {
    return Promise.resolve(FIELDS)
      .then(fields => fields.filter(f => f.id === id)[0]);
  }
}