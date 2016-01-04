System.register(["angular2/core", "angular2/router", "..//services/field.service", "./navigation.component", "./tutorial-list.component"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, field_service_1, navigation_component_1, tutorial_list_component_1;
    var FieldPageComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (field_service_1_1) {
                field_service_1 = field_service_1_1;
            },
            function (navigation_component_1_1) {
                navigation_component_1 = navigation_component_1_1;
            },
            function (tutorial_list_component_1_1) {
                tutorial_list_component_1 = tutorial_list_component_1_1;
            }],
        execute: function() {
            FieldPageComponent = (function () {
                function FieldPageComponent(_fieldService, _routeParams) {
                    this._fieldService = _fieldService;
                    this._routeParams = _routeParams;
                }
                FieldPageComponent.prototype.loadField = function () {
                    var _this = this;
                    var id = +this._routeParams.get("id");
                    this._fieldService.getField(id).then(function (field) { return _this.field = field; });
                };
                FieldPageComponent.prototype.ngOnInit = function () {
                    this.loadField();
                };
                FieldPageComponent = __decorate([
                    core_1.Component({
                        selector: "field",
                        template: "\n      <navigation [field]=\"field\"></navigation>\n      <div class=\"container-fluid\">\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <tutorial-list *ngIf=\"field\" [field]=\"field\"></tutorial-list>\n          </div>\n          <div class=\"col-md-6\"></div>\n        </div>\n      </div>",
                        directives: [router_1.ROUTER_DIRECTIVES, navigation_component_1.NavigationComponent, tutorial_list_component_1.TutorialListComponent],
                        providers: [field_service_1.FieldService]
                    }), 
                    __metadata('design:paramtypes', [field_service_1.FieldService, router_1.RouteParams])
                ], FieldPageComponent);
                return FieldPageComponent;
            })();
            exports_1("FieldPageComponent", FieldPageComponent);
        }
    }
});
