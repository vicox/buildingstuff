System.register(["angular2/core", "angular2/router", "../services/tutorial.service", "../services/field.service", "./navigation.component", "./tutorial-detail.component"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, tutorial_service_1, field_service_1, navigation_component_1, tutorial_detail_component_1;
    var TutorialPageComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (tutorial_service_1_1) {
                tutorial_service_1 = tutorial_service_1_1;
            },
            function (field_service_1_1) {
                field_service_1 = field_service_1_1;
            },
            function (navigation_component_1_1) {
                navigation_component_1 = navigation_component_1_1;
            },
            function (tutorial_detail_component_1_1) {
                tutorial_detail_component_1 = tutorial_detail_component_1_1;
            }],
        execute: function() {
            TutorialPageComponent = (function () {
                function TutorialPageComponent(_tutorialService, _fieldService, _routeParams) {
                    this._tutorialService = _tutorialService;
                    this._fieldService = _fieldService;
                    this._routeParams = _routeParams;
                }
                TutorialPageComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    if (!this.tutorial) {
                        var id = +this._routeParams.get("id");
                        this._tutorialService.getTutorial(id)
                            .then(function (tutorial) { return _this.tutorial = tutorial; })
                            .then(function (tutorial) { return _this._fieldService.getField(tutorial.fieldId).then(function (field) { return _this.field = field; }); });
                    }
                };
                TutorialPageComponent = __decorate([
                    core_1.Component({
                        selector: "tutorial",
                        template: "\n      <navigation [field]=\"field\"></navigation>\n      <div class=\"container-fluid\">\n        <div class=\"row\">\n          <div class=\"col-md-8\">\n            <tutorial-detail *ngIf=\"tutorial\" [tutorial]=\"tutorial\"></tutorial-detail>\n          </div>\n        </div>\n      </div>",
                        directives: [navigation_component_1.NavigationComponent, tutorial_detail_component_1.TutorialDetailComponent],
                        providers: [tutorial_service_1.TutorialService, field_service_1.FieldService]
                    }), 
                    __metadata('design:paramtypes', [tutorial_service_1.TutorialService, field_service_1.FieldService, router_1.RouteParams])
                ], TutorialPageComponent);
                return TutorialPageComponent;
            })();
            exports_1("TutorialPageComponent", TutorialPageComponent);
        }
    }
});

//# sourceMappingURL=tutorial-page.component.js.map
