import {Component, OnInit} from "angular2/core";
import {Router, ROUTER_DIRECTIVES} from "angular2/router";
import {FieldService} from "../../services/field.service";
import {Field} from "../../models/field";

@Component({
    selector: "field-list",
    styles: [".card {cursor: pointer}", "i.fa {font-size: 3em}"],
    template: `
      <div class="row">
        <div *ngFor="#field of fields" class="col-xs-12" [ngClass]="{'col-sm-6': fields.length > 1, 'col-md-4': fields.length > 2, 'col-lg-3': fields.length > 3, 'col-xl-2': fields.length > 5}">
          <div class="card text-xs-center card-buildingstuff-field" (click)="gotoField(field)">
            <div class="card-block">
              <i *ngIf="field.icon" class="fa {{field.icon}}"></i>
              <i *ngIf="!field.icon" class="fa fa-cog"></i>
              <h4 class="card-title">{{field.name}}</h4>
            </div>
          </div>
        </div>
      </div>`,
    directives: [ROUTER_DIRECTIVES],
    providers: [FieldService]
})

export class FieldListComponent implements OnInit {
  public fields: Field[];

  constructor(private _fieldService: FieldService, private _router: Router) {
  }

  loadFields() {
    this.fields = [];
    this._fieldService.getFields().then(fields => this.fields = fields);
  }

  gotoField(field: Field) {
    this._router.navigate(["Field", { id: field.id }]);
  }

  ngOnInit() {
    this.loadFields();
  }
}
