System.register(["angular2/core", "angular2/router", "../../services/field.service"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, field_service_1;
    var FieldListComponent;
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
            }],
        execute: function() {
            FieldListComponent = (function () {
                function FieldListComponent(_fieldService, _router) {
                    this._fieldService = _fieldService;
                    this._router = _router;
                }
                FieldListComponent.prototype.loadFields = function () {
                    var _this = this;
                    this.fields = [];
                    this._fieldService.getFields().then(function (fields) { return _this.fields = fields; });
                };
                FieldListComponent.prototype.gotoField = function (field) {
                    this._router.navigate(["Field", { id: field.id }]);
                };
                FieldListComponent.prototype.ngOnInit = function () {
                    this.loadFields();
                };
                FieldListComponent = __decorate([
                    core_1.Component({
                        selector: "field-list",
                        styles: [".card {cursor: pointer}"],
                        template: "\n      <div class=\"row\">\n        <div *ngFor=\"#field of fields\" class=\"col-xs-12\" [ngClass]=\"{'col-sm-6': fields.length > 1, 'col-md-4': fields.length > 2, 'col-lg-3': fields.length > 3, 'col-xl-2': fields.length > 5}\">\n          <div class=\"card text-xs-center card-buildingstuff-field\" (click)=\"gotoField(field)\">\n            <div class=\"card-block\">\n              <h4 class=\"card-title\">{{field.name}}</h4>\n            </div>\n          </div>\n        </div>\n      </div>",
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [field_service_1.FieldService]
                    }), 
                    __metadata('design:paramtypes', [field_service_1.FieldService, router_1.Router])
                ], FieldListComponent);
                return FieldListComponent;
            })();
            exports_1("FieldListComponent", FieldListComponent);
        }
    }
});
