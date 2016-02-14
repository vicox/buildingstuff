import {Component, Input} from "angular2/core";
import {ROUTER_DIRECTIVES} from "angular2/router";
import {Field} from "../models/field";

@Component({
    selector: "navigation",
    styles:[
      ".navbar-brand {font-weight: bold}",
      ".buildingstuff {color: #3581B8}",
      ".rocks {color: #FCB07E}",
      ".field {color: #777777}",
      "a {text-decoration: none}"
    ],
    template: `
      <nav class="navbar navbar-light bg-faded">
        <span class="navbar-brand"><a [routerLink]="['Fields']"><span class="buildingstuff">BuildingStuff</span><span class="rocks">.rocks</span></a> <a *ngIf="field" class="field" [routerLink]="['Field', {id: field.id}]">/{{field.name}}</a></span>
        <!--
        <ul class="nav navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Features</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Pricing</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">About</a>
          </li>
        </ul>
        <form class="form-inline pull-xs-right">
          <input class="form-control" type="text" placeholder="Search">
          <button class="btn btn-success-outline" type="submit">Search</button>
        </form>
        -->
      </nav>`,
    directives: [ROUTER_DIRECTIVES]
})

export class NavigationComponent {
    @Input() field: Field;
}
