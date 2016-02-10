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
    var ItemService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            ItemService = (function () {
                function ItemService(_http) {
                    this._http = _http;
                }
                ItemService.prototype.getAllItems = function () {
                    return this._http.get('server/items.json')
                        .map(function (res) { return res.json(); })
                        .toPromise();
                };
                ItemService.prototype.getItems = function (itemset) {
                    return this.getAllItems()
                        .then(function (items) { return items.filter(function (c) { return c.itemsetId === itemset.id; }); });
                };
                ItemService.prototype.getItem = function (id) {
                    return this.getAllItems()
                        .then(function (items) { return items.filter(function (c) { return c.id === id; })[0]; });
                };
                ItemService.prototype.getItemsWithIds = function (ids) {
                    return this.getAllItems()
                        .then(function (items) { return items.filter(function (e) { return ids.indexOf(e.id) > -1; }); });
                };
                ItemService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], ItemService);
                return ItemService;
            })();
            exports_1("ItemService", ItemService);
        }
    }
});
