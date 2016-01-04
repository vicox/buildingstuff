System.register(["angular2/core", "angular2/router", "../services/tutorial.service"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, tutorial_service_1;
    var TutorialListComponent;
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
            }],
        execute: function() {
            TutorialListComponent = (function () {
                function TutorialListComponent(_tutorialService) {
                    this._tutorialService = _tutorialService;
                }
                TutorialListComponent.prototype.loadTutorials = function () {
                    var _this = this;
                    this.tutorials = [];
                    if (this.field) {
                        this._tutorialService.getTutorials(this.field).then(function (tutorials) { return _this.tutorials = tutorials; });
                    }
                };
                TutorialListComponent.prototype.ngOnInit = function () {
                    this.loadTutorials();
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], TutorialListComponent.prototype, "field", void 0);
                TutorialListComponent = __decorate([
                    core_1.Component({
                        selector: "tutorial-list",
                        template: "\n      <h4>Newest Tutorials</h4>\n      <div class=\"list-group\">\n        <a *ngFor=\"#tutorial of tutorials\" [routerLink]=\"['Tutorial', {id: tutorial.id}]\" class=\"list-group-item\">{{tutorial.title}}</a>\n      </div>",
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [tutorial_service_1.TutorialService]
                    }), 
                    __metadata('design:paramtypes', [tutorial_service_1.TutorialService])
                ], TutorialListComponent);
                return TutorialListComponent;
            })();
            exports_1("TutorialListComponent", TutorialListComponent);
        }
    }
});
