System.register(["angular2/core", "angular2/http"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1;
    var TutorialService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            TutorialService = (function () {
                function TutorialService(_http) {
                    this._http = _http;
                }
                TutorialService.prototype.getAllTutorials = function () {
                    return this._http.get('server/tutorials.json')
                        .map(function (res) { return res.json(); })
                        .toPromise();
                };
                TutorialService.prototype.getTutorials = function (field) {
                    return this.getAllTutorials()
                        .then(function (tutorials) { return tutorials.filter(function (t) { return t.fieldId === field.id; }); });
                };
                TutorialService.prototype.getTutorial = function (id) {
                    return this.getAllTutorials()
                        .then(function (tutorials) { return tutorials.filter(function (t) { return t.id === id; })[0]; });
                };
                TutorialService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], TutorialService);
                return TutorialService;
            })();
            exports_1("TutorialService", TutorialService);
        }
    }
});