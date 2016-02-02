import {Component, Input} from "angular2/core";
import {Tutorial} from "../../models/tutorial";
import {ToolListComponent} from "../tool/tool-list.component";
import {ResourceListComponent} from "../resource/resource-list.component";

@Component({
    selector: "tutorial-detail",
    template: `
      <h2>{{tutorial.title}}</h2>
      <div class="row">
        <div class="col-sm-6">
          <tool-list [tutorial]="tutorial"></tool-list>
        </div>
        <div class="col-sm-6">
          <resource-list [tutorial]="tutorial"></resource-list>
        </div>
      </div>
      <p [innerHTML]="tutorial.body"></p>`,
    directives: [ToolListComponent, ResourceListComponent]
})

export class TutorialDetailComponent {
  @Input() tutorial: Tutorial;
}
