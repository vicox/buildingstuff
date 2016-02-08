import {Component, Input} from "angular2/core";
import {Tutorial} from "../../models/tutorial";
import {ElementListComponent} from "../element/element-list.component";

@Component({
    selector: "tutorial-detail",
    template: `
      <h1>{{tutorial.title}}</h1>
      <element-list [tutorial]="tutorial"></element-list>
      <p [innerHTML]="tutorial.body"></p>`,
    directives: [ElementListComponent]
})

export class TutorialDetailComponent {
  @Input() tutorial: Tutorial;
}
