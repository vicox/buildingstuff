import {Component} from "angular2/core";
import {FieldListComponent} from "./field-list.component";
import {NavigationComponent} from "./navigation.component";

@Component({
    selector: "fields",
    template: `
      <navigation></navigation>
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-12">
            <h1 class="text-xs-center">Choose your field</h1>
            <field-list></field-list>
          </div>
        </div>
      </div>`,
      directives: [FieldListComponent, NavigationComponent]
})

export class FieldsPageComponent { }