import {Component, OnInit, Input} from "angular2/core";
import {RouteParams, ROUTER_DIRECTIVES} from "angular2/router";
import {TutorialService} from "../services/tutorial.service";
import {Field} from "../field";
import {Tutorial} from "../tutorial";

@Component({
    selector: "tutorial-list",
    template: `
      <h4>Newest Tutorials</h4>
      <div class="list-group">
        <a *ngFor="#tutorial of tutorials" [routerLink]="['Tutorial', {id: tutorial.id}]" class="list-group-item">{{tutorial.title}}</a>
      </div>`,
    directives: [ROUTER_DIRECTIVES],
    providers: [TutorialService]
})

export class TutorialListComponent implements OnInit {
    @Input() field: Field;
    public tutorials: Tutorial[];

    constructor(private _tutorialService: TutorialService) {
    }

    getTutorials() {
        this.tutorials = [];

        if (this.field) {
          this._tutorialService.getTutorials(this.field).then(tutorials => this.tutorials = tutorials);
        }

        return this.tutorials;
    }

    ngOnInit() {
        this.tutorials = this.getTutorials();
    }
}