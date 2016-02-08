import {Component, Input} from "angular2/core";
import {Tutorial} from "../../models/tutorial";
import {ItemListComponent} from "../item/item-list.component";

@Component({
    selector: "tutorial-detail",
    template: `
      <h1>{{tutorial.title}}</h1>
      <item-list [tutorial]="tutorial"></item-list>
      <p [innerHTML]="tutorial.body"></p>`,
    directives: [ItemListComponent]
})

export class TutorialDetailComponent {
  @Input() tutorial: Tutorial;
}
