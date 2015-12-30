import {Component, OnInit} from "angular2/core";
import {ROUTER_DIRECTIVES} from "angular2/router";
import {FieldService} from "../services/field.service";
import {Field} from "../models/field";

@Component({
    selector: "field-list",
    template: `
      <div *ngFor="#field of fields" class="card text-xs-center card-buildingstuff-field">
        <div class="card-block">
          <h4 class="card-title"><a [routerLink]="['Field', {id: field.id}]">{{field.name}}</a></h4>
        </div>
      </div>`,
    directives: [ROUTER_DIRECTIVES],
    providers: [FieldService]
})

export class FieldListComponent implements OnInit {
  public fields: Field[];

  constructor(private _fieldService: FieldService) {
  }

  getFields() {
    this.fields = [];

    this._fieldService.getFields().then(fields => this.fields = fields);

    return this.fields;
  }

  ngOnInit() {
    this.fields = this.getFields();
  }
}