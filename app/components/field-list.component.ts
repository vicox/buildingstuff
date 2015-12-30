import {Component, OnInit} from "angular2/core";
import {Router, ROUTER_DIRECTIVES} from "angular2/router";
import {FieldService} from "../services/field.service";
import {Field} from "../models/field";

@Component({
    selector: "field-list",
    styles: [".card {cursor: pointer}"],
    template: `
      <div *ngFor="#field of fields" class="card text-xs-center card-buildingstuff-field" (click)="gotoField(field)">
        <div class="card-block">
          <h4 class="card-title">{{field.name}}</h4>
        </div>
      </div>`,
    directives: [ROUTER_DIRECTIVES],
    providers: [FieldService]
})

export class FieldListComponent implements OnInit {
  public fields: Field[];

  constructor(private _fieldService: FieldService, private _router: Router) {
  }

  getFields() {
    this.fields = [];

    this._fieldService.getFields().then(fields => this.fields = fields);

    return this.fields;
  }

  ngOnInit() {
    this.fields = this.getFields();
  }

  gotoField(field: Field) {
    this._router.navigate(["Field", { id: field.id }]);
  }
}