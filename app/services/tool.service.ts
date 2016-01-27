import {Injectable} from "angular2/core";
import {Field} from "../models/field";
import {Tool} from "../models/tool";

const TOOLS: Tool[] = [
  { "id": 1, "fieldId": 1, "name": "Tool 1" },
  { "id": 2, "fieldId": 1, "name": "Tool 2" },
  { "id": 3, "fieldId": 1, "name": "Tool 3" },
];

@Injectable()
export class ToolService {
  getTools(field: Field) {
    return Promise.resolve(TOOLS)
        .then(tools => tools.filter(t => t.fieldId === field.id));
  }

  getTool(id: number) {
    return Promise.resolve(TOOLS)
      .then(tools => tools.filter(t => t.id === id)[0]);
  }

  getToolsById(ids: number[]) {
    return Promise.resolve(TOOLS)
      .then(tools => tools.filter(t => ids.indexOf(t.id) > -1));
  }
}