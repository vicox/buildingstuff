System.register(["angular2/core", "angular2/router"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1;
    var NavigationComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            NavigationComponent = (function () {
                function NavigationComponent() {
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], NavigationComponent.prototype, "field", void 0);
                NavigationComponent = __decorate([
                    core_1.Component({
                        selector: "navigation",
                        template: "\n      <nav class=\"navbar navbar-light bg-faded\">\n        <a *ngIf=\"field\" class=\"navbar-buildingstuff-field\" [routerLink]=\"['Field', {id: field.id}]\">{{field.name}}</a>\n        <a class=\"navbar-brand\" [routerLink]=\"['Fields']\"><img alt=\"Brand\" src=\"/app/assets/images/buildingstuff_logo.png\"></a>\n        <!--\n        <ul class=\"nav navbar-nav\">\n          <li class=\"nav-item active\">\n            <a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#\">Features</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#\">Pricing</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#\">About</a>\n          </li>\n        </ul>\n        <form class=\"form-inline pull-xs-right\">\n          <input class=\"form-control\" type=\"text\" placeholder=\"Search\">\n          <button class=\"btn btn-success-outline\" type=\"submit\">Search</button>\n        </form>\n        -->\n      </nav>",
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], NavigationComponent);
                return NavigationComponent;
            })();
            exports_1("NavigationComponent", NavigationComponent);
        }
    }
});

//# sourceMappingURL=navigation.component.js.map
