import {Component, Input} from "angular2/core";
import {Tutorial} from "../models/tutorial";

@Component({
    selector: "tutorial-detail",
    template: `
      <h2>{{tutorial.title}}</h2>
      <p>{{tutorial.body}}</p>`,
})

export class TutorialDetailComponent {
  @Input() tutorial: Tutorial;
}