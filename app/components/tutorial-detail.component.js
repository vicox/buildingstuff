System.register(["angular2/core", "./tool-list.component", "./resource-list.component"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, tool_list_component_1, resource_list_component_1;
    var TutorialDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (tool_list_component_1_1) {
                tool_list_component_1 = tool_list_component_1_1;
            },
            function (resource_list_component_1_1) {
                resource_list_component_1 = resource_list_component_1_1;
            }],
        execute: function() {
            TutorialDetailComponent = (function () {
                function TutorialDetailComponent() {
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], TutorialDetailComponent.prototype, "tutorial", void 0);
                TutorialDetailComponent = __decorate([
                    core_1.Component({
                        selector: "tutorial-detail",
                        template: "\n      <h2>{{tutorial.title}}</h2>\n      <div class=\"row\">\n        <div class=\"col-sm-6\">\n          <tool-list [tutorial]=\"tutorial\"></tool-list>\n        </div>\n        <div class=\"col-sm-6\">\n          <resource-list [tutorial]=\"tutorial\"></resource-list>\n        </div>\n      </div>\n      <p>{{tutorial.body}}</p>",
                        directives: [tool_list_component_1.ToolListComponent, resource_list_component_1.ResourceListComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], TutorialDetailComponent);
                return TutorialDetailComponent;
            })();
            exports_1("TutorialDetailComponent", TutorialDetailComponent);
        }
    }
});
