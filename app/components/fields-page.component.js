System.register(["angular2/core", "./field/field-list.component", "./navigation.component"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, field_list_component_1, navigation_component_1;
    var FieldsPageComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (field_list_component_1_1) {
                field_list_component_1 = field_list_component_1_1;
            },
            function (navigation_component_1_1) {
                navigation_component_1 = navigation_component_1_1;
            }],
        execute: function() {
            FieldsPageComponent = (function () {
                function FieldsPageComponent() {
                }
                FieldsPageComponent = __decorate([
                    core_1.Component({
                        selector: "fields",
                        styles: ["h1 {margin-bottom: 24px}"],
                        template: "\n      <navigation></navigation>\n      <div class=\"container-fluid\">\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <h1 class=\"text-xs-center\">Choose your field</h1>\n            <field-list></field-list>\n          </div>\n        </div>\n      </div>",
                        directives: [field_list_component_1.FieldListComponent, navigation_component_1.NavigationComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], FieldsPageComponent);
                return FieldsPageComponent;
            })();
            exports_1("FieldsPageComponent", FieldsPageComponent);
        }
    }
});
