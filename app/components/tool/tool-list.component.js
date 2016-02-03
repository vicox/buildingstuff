System.register(["angular2/core", "../../services/tool.service"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, tool_service_1;
    var ToolListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (tool_service_1_1) {
                tool_service_1 = tool_service_1_1;
            }],
        execute: function() {
            ToolListComponent = (function () {
                function ToolListComponent(_toolService) {
                    this._toolService = _toolService;
                }
                ToolListComponent.prototype.loadTools = function () {
                    var _this = this;
                    this._toolService.getToolsById(this.tutorial.toolIds).then(function (tools) { return _this.tools = tools; });
                };
                ToolListComponent.prototype.ngOnInit = function () {
                    this.loadTools();
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], ToolListComponent.prototype, "tutorial", void 0);
                ToolListComponent = __decorate([
                    core_1.Component({
                        selector: "tool-list",
                        styles: ["ul {padding: 0}"],
                        template: "\n      <ul class=\"listgroup\">\n        <li *ngFor=\"#tool of tools\" class=\"list-group-item\">{{tool.name}}</li>\n      </ul>",
                        providers: [tool_service_1.ToolService]
                    }), 
                    __metadata('design:paramtypes', [tool_service_1.ToolService])
                ], ToolListComponent);
                return ToolListComponent;
            })();
            exports_1("ToolListComponent", ToolListComponent);
        }
    }
});
