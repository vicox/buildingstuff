import {Component} from "angular2/core";
import {Router, RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from "angular2/router";
import {Field} from "./field";
import {FieldsComponent} from "./fields.component";
import {FieldComponent} from "./field.component";
import {TutorialComponent} from "./tutorial.component";

@Component({
    selector: "app",
    template: `
      <nav class="navbar navbar-light bg-faded">
        <a *ngIf="field" class="navbar-buildingstuff-field" [routerLink]="['Field', {id: field.id}]">{{field.name}}</a>
        <a class="navbar-brand" [routerLink]="['Fields']"><img alt="Brand" src="buildingstuff_logo.png"></a>
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
      </nav>
      <div class="alert alert-warning alert-dismissible" role="alert">
        <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <strong>This website is work in progress!</strong> Check out my <a href="https://www.youtube.com/user/vicox1000">Youtube channel</a> to see the videos where this website is being build.
      </div>
      <router-outlet></router-outlet>`,
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS]
})
@RouteConfig([
    { path: "/fields", name: "Fields", component: FieldsComponent, useAsDefault: true },
    { path: "/field/:id", name: "Field", component: FieldComponent },
    { path: "/tutorial/:id", name: "Tutorial", component: TutorialComponent }
])

export class AppComponent { }