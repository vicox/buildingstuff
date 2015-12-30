import {Component, OnInit} from "angular2/core";
import {RouteParams, ROUTER_DIRECTIVES} from "angular2/router";
import {FieldService} from "./field.service";
import {TutorialService} from "./tutorial.service";
import {Field} from "./field";
import {Tutorial} from "./tutorial";

@Component({
    selector: "field",
    template: `<h4>Newest Tutorials</h4>
        <div class="list-group">
          <a *ngFor="#tutorial of tutorials" [routerLink]="['Tutorial', {id: tutorial.id}]" class="list-group-item">{{tutorial.title}}</a>
        </div>`,
    directives: [ROUTER_DIRECTIVES],
    providers: [FieldService, TutorialService]
})

export class FieldComponent implements OnInit {
  public field: Field;
  public tutorials: Tutorial[];

  constructor(private _tutorialService: TutorialService,
    private _fieldService: FieldService,
    private _routeParams: RouteParams) {
  }

  getTutorials() {
    this.tutorials = [];

    this._tutorialService.getTutorials(this.field).then(tutorials => this.tutorials = tutorials);

    return this.tutorials;
  }

  ngOnInit() {
    if (!this.field) {
      let id = +this._routeParams.get("id");
      this._fieldService.getField(id).then(field => this.field = field);
    }
    this.tutorials = this.getTutorials();
  }
}