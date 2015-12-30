import {Component, OnInit} from "angular2/core";
import {RouteParams} from "angular2/router";
import {TutorialService} from "../services/tutorial.service";
import {Tutorial} from "../models/tutorial";
import {NavigationComponent} from "./navigation.component";
import {TutorialDetailComponent} from "./tutorial-detail.component";

@Component({
    selector: "tutorial",
    template: `
      <navigation></navigation>
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-8">
            <tutorial-detail *ngIf="tutorial" [tutorial]="tutorial"></tutorial-detail>
          </div>
        </div>
      </div>`,
    directives: [NavigationComponent, TutorialDetailComponent],
    providers: [TutorialService]
})

export class TutorialPageComponent implements OnInit {
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