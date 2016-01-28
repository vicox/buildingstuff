System.register(["angular2/core", "../services/resource.service"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, resource_service_1;
    var ResourceListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (resource_service_1_1) {
                resource_service_1 = resource_service_1_1;
            }],
        execute: function() {
            ResourceListComponent = (function () {
                function ResourceListComponent(_resourceService) {
                    this._resourceService = _resourceService;
                }
                ResourceListComponent.prototype.loadResources = function () {
                    var _this = this;
                    this._resourceService.getResourcesById(this.tutorial.resourceIds).then(function (resources) { return _this.resources = resources; });
                };
                ResourceListComponent.prototype.ngOnInit = function () {
                    this.loadResources();
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], ResourceListComponent.prototype, "tutorial", void 0);
                ResourceListComponent = __decorate([
                    core_1.Component({
                        selector: "resource-list",
                        styles: ["ul {padding: 0}"],
                        template: "\n      <ul class=\"listgroup\">\n        <li *ngFor=\"#resource of resources\" class=\"list-group-item\">{{resource.name}}</li>\n      </ul>",
                        providers: [resource_service_1.ResourceService]
                    }), 
                    __metadata('design:paramtypes', [resource_service_1.ResourceService])
                ], ResourceListComponent);
                return ResourceListComponent;
            })();
            exports_1("ResourceListComponent", ResourceListComponent);
        }
    }
});
