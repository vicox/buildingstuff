System.register(["angular2/core", "../../services/item.service", "../../services/itemset.service"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, item_service_1, itemset_service_1;
    var ItemListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (item_service_1_1) {
                item_service_1 = item_service_1_1;
            },
            function (itemset_service_1_1) {
                itemset_service_1 = itemset_service_1_1;
            }],
        execute: function() {
            ItemListComponent = (function () {
                function ItemListComponent(_itemService, _itemsetService) {
                    this._itemService = _itemService;
                    this._itemsetService = _itemsetService;
                }
                ItemListComponent.prototype.loadItems = function () {
                    var _this = this;
                    this._itemService.getItemsWithIds(this.tutorial.itemIds)
                        .then(function (items) {
                        var itemsBySetId = {};
                        for (var i = 0; i < items.length; i++) {
                            var item = items[i];
                            if (!itemsBySetId.hasOwnProperty(item.itemsetId)) {
                                itemsBySetId[item.itemsetId] = [];
                            }
                            itemsBySetId[item.itemsetId].push(item);
                        }
                        _this._itemsetService.getItemsetsWithIds(Object.keys(itemsBySetId).map(function (id) { return parseInt(id); }))
                            .then(function (itemsets) {
                            _this.groupedItems = [];
                            for (var i = 0; i < itemsets.length; i++) {
                                var itemset = itemsets[i];
                                _this.groupedItems.push({ itemset: itemset, items: itemsBySetId[itemset.id] });
                            }
                        });
                    });
                };
                ItemListComponent.prototype.ngOnInit = function () {
                    this.loadItems();
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], ItemListComponent.prototype, "tutorial", void 0);
                ItemListComponent = __decorate([
                    core_1.Component({
                        selector: "item-list",
                        styles: ["ul {margin-bottom: 1.5rem}"],
                        template: "\n      <ul class=\"list-group\">\n        <li class=\"list-group-item\" *ngFor=\"#groupedItem of groupedItems\">\n          <h5>{{groupedItem.itemset.name}}</h5>\n          <span *ngFor=\"#item of groupedItem.items\">\n            <span class=\"label label-default\">{{item.name}}</span>\n          </span>\n        </li>\n      </ul>",
                        providers: [item_service_1.ItemService, itemset_service_1.ItemsetService]
                    }), 
                    __metadata('design:paramtypes', [item_service_1.ItemService, itemset_service_1.ItemsetService])
                ], ItemListComponent);
                return ItemListComponent;
            })();
            exports_1("ItemListComponent", ItemListComponent);
        }
    }
});
