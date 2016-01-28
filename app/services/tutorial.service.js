System.register(["angular2/core"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var TUTORIALS, TutorialService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            TUTORIALS = [
                { "id": 1, "fieldId": 1, "toolIds": [1, 2, 3], "resourceIds": [1, 2, 3], "title": "Tutorial 1", "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean faucibus tincidunt mauris eget mattis. Cras nec fermentum ex. Aenean maximus dictum ligula non vulputate. Vivamus eget diam ac justo imperdiet aliquet. Proin et sagittis lectus, ut eleifend purus. Duis eget venenatis libero. Cras gravida pulvinar enim, a ultrices turpis fermentum non. Phasellus fermentum bibendum pellentesque. Mauris aliquam auctor augue, vitae lobortis mi luctus sed. Curabitur in tempor lectus, at suscipit augue. Etiam ullamcorper elementum nisi." },
                { "id": 2, "fieldId": 1, "toolIds": [], "resourceIds": [], "title": "Tutorial 2", "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean faucibus tincidunt mauris eget mattis. Cras nec fermentum ex. Aenean maximus dictum ligula non vulputate. Vivamus eget diam ac justo imperdiet aliquet. Proin et sagittis lectus, ut eleifend purus. Duis eget venenatis libero. Cras gravida pulvinar enim, a ultrices turpis fermentum non. Phasellus fermentum bibendum pellentesque. Mauris aliquam auctor augue, vitae lobortis mi luctus sed. Curabitur in tempor lectus, at suscipit augue. Etiam ullamcorper elementum nisi." },
                { "id": 3, "fieldId": 1, "toolIds": [], "resourceIds": [], "title": "Tutorial 3", "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean faucibus tincidunt mauris eget mattis. Cras nec fermentum ex. Aenean maximus dictum ligula non vulputate. Vivamus eget diam ac justo imperdiet aliquet. Proin et sagittis lectus, ut eleifend purus. Duis eget venenatis libero. Cras gravida pulvinar enim, a ultrices turpis fermentum non. Phasellus fermentum bibendum pellentesque. Mauris aliquam auctor augue, vitae lobortis mi luctus sed. Curabitur in tempor lectus, at suscipit augue. Etiam ullamcorper elementum nisi." }
            ];
            TutorialService = (function () {
                function TutorialService() {
                }
                TutorialService.prototype.getTutorials = function (field) {
                    return Promise.resolve(TUTORIALS)
                        .then(function (tutorials) { return tutorials.filter(function (t) { return t.fieldId === field.id; }); });
                };
                TutorialService.prototype.getTutorial = function (id) {
                    return Promise.resolve(TUTORIALS)
                        .then(function (tutorials) { return tutorials.filter(function (t) { return t.id === id; })[0]; });
                };
                TutorialService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], TutorialService);
                return TutorialService;
            })();
            exports_1("TutorialService", TutorialService);
        }
    }
});
