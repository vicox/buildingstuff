import {Component, OnInit} from "angular2/core";
import {RouteParams, ROUTER_DIRECTIVES} from "angular2/router";
import {FieldService} from "./field.service";
import {TutorialService} from "./tutorial.service";
import {Field} from "./field";
import {Tutorial} from "./tutorial";

@Component({
    selector: "tutorial",
    template: `
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-8">
            <div *ngIf="tutorial">
              <h2>{{tutorial.title}}</h2>
              <p>{{tutorial.body}}</p>
            </div>
          </div>
        </div>
      </div>`,
  providers: [FieldService, TutorialService]
})

export class TutorialComponent implements OnInit {
  public tutorial: Tutorial;

  constructor(private _tutorialService: TutorialService,
    private _routeParams: RouteParams) {
  }

  ngOnInit() {
    if (!this.tutorial) {
      let id = +this._routeParams.get("id");
      this._tutorialService.getTutorial(id).then(tutorial => this.tutorial = tutorial);
    }
  }
}