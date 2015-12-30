import {Component, OnInit} from "angular2/core";
import {Router, RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from "angular2/router";
import {FieldService} from "./field.service";
import {Field} from "./field";
import {FieldComponent} from "./field.component";

@Component({
    selector: "fields",
    template: `
         <h1 class="text-xs-center">Choose your field</h1>
         <div *ngFor="#field of fields" class="card text-xs-center card-buildingstuff-field">
          <div class="card-block">
            <h4 class="card-title"><a [routerLink]="['Field', {id: field.id}]">{{field.name}}</a></h4>
          </div>
        </div>`,
    directives: [ROUTER_DIRECTIVES],
    providers: [FieldService]
})

export class FieldsComponent implements OnInit {
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
}