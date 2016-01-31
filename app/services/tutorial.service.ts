import {Injectable} from "angular2/core";
import {Http} from "angular2/http";
import {Field} from "../models/field";
import {Tutorial} from "../models/tutorial";
import 'rxjs/Rx';

@Injectable()
export class TutorialService {

  constructor(private _http:Http) {
  }

  getTutorials(field: Field) {
    return this._http.get('server/tutorials.json')
    .map(res => res.json())
    .toPromise()
    .then(tutorials => tutorials.filter(t => t.fieldId === field.id));
  }

  getTutorial(id: number) {
    return this._http.get('server/tutorials.json')
    .map(res => res.json())
    .toPromise()
    .then(tutorials => tutorials.filter(t => t.id === id)[0]);
  }
}
