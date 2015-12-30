import {Component, OnInit} from "angular2/core";
import {RouteParams, ROUTER_DIRECTIVES} from "angular2/router";
import {FieldService} from "./services/field.service";
import {Field} from "./field";
import {TutorialListComponent} from "./components/tutorial-list.component";

@Component({
    selector: "field",
    template: `
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-6">
            <tutorial-list *ngIf="field" [field]="field"></tutorial-list>
          </div>
          <div class="col-md-6"></div>
        </div>
      </div>`,
    directives: [ROUTER_DIRECTIVES, TutorialListComponent],
    providers: [FieldService]
})

export class FieldComponent implements OnInit {
  public field: Field;

  constructor(private _fieldService: FieldService,
    private _routeParams: RouteParams) {
  }

  ngOnInit() {
    if (!this.field) {
      let id = +this._routeParams.get("id");
      this._fieldService.getField(id).then(field => this.field = field);
    }
  }
}