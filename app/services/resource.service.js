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
    var ResourceService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            ResourceService = (function () {
                function ResourceService(_http) {
                    this._http = _http;
                }
                ResourceService.prototype.getAllResources = function () {
                    return this._http.get('server/resources.json')
                        .map(function (res) { return res.json(); })
                        .toPromise();
                };
                ResourceService.prototype.getResources = function (field) {
                    return this.getAllResources()
                        .then(function (resources) { return resources.filter(function (r) { return r.fieldId === field.id; }); });
                };
                ResourceService.prototype.getResource = function (id) {
                    return this.getAllResources()
                        .then(function (resources) { return resources.filter(function (r) { return r.id === id; })[0]; });
                };
                ResourceService.prototype.getResourcesById = function (ids) {
                    return this.getAllResources()
                        .then(function (resources) { return resources.filter(function (r) { return ids.indexOf(r.id) > -1; }); });
                };
                ResourceService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], ResourceService);
                return ResourceService;
            })();
            exports_1("ResourceService", ResourceService);
        }
    }
});
