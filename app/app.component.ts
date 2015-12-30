import {Component, OnInit} from "angular2/core";
import {Router, RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from "angular2/router";
import {FieldsComponent} from "./fields.component";
import {FieldComponent} from "./field.component";
import {TutorialComponent} from "./tutorial.component";

@Component({
    selector: "app",
    template: `
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