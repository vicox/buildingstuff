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
    var ItemsetService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            ItemsetService = (function () {
                function ItemsetService(_http) {
                    this._http = _http;
                }
                ItemsetService.prototype.getAllItemsets = function () {
                    return this._http.get('server/itemsets.json')
                        .map(function (res) { return res.json(); })
                        .toPromise();
                };
                ItemsetService.prototype.getItemset = function (id) {
                    return this.getAllItemsets()
                        .then(function (itemset) { return itemset.filter(function (cp) { return cp.id === id; })[0]; });
                };
                ItemsetService.prototype.getItemsetsWithIds = function (ids) {
                    return this.getAllItemsets()
                        .then(function (itemsets) { return itemsets.filter(function (et) { return ids.indexOf(et.id) > -1; }); });
                };
                ItemsetService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], ItemsetService);
                return ItemsetService;
            })();
            exports_1("ItemsetService", ItemsetService);
        }
    }
});
