System.register(["angular2/core", "angular2/router", "./components/fields-page.component", "./components/field-page.component", "./components/tutorial-page.component"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, fields_page_component_1, field_page_component_1, tutorial_page_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (fields_page_component_1_1) {
                fields_page_component_1 = fields_page_component_1_1;
            },
            function (field_page_component_1_1) {
                field_page_component_1 = field_page_component_1_1;
            },
            function (tutorial_page_component_1_1) {
                tutorial_page_component_1 = tutorial_page_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: "app",
                        styles: [".alert {margin-bottom: 0}"],
                        template: "\n      <div class=\"alert alert-warning alert-dismissible\" role=\"alert\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n        <strong>This website is work in progress!</strong> Check out my <a href=\"https://www.youtube.com/user/vicox1000\">Youtube channel</a> to see the videos where this website is being build.\n      </div>\n      <router-outlet></router-outlet>",
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [router_1.ROUTER_PROVIDERS]
                    }),
                    router_1.RouteConfig([
                        { path: "/fields", name: "Fields", component: fields_page_component_1.FieldsPageComponent, useAsDefault: true },
                        { path: "/field/:id", name: "Field", component: field_page_component_1.FieldPageComponent },
                        { path: "/tutorial/:id", name: "Tutorial", component: tutorial_page_component_1.TutorialPageComponent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=app.component.js.map
