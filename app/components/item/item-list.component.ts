import {Component, Input} from "angular2/core";
import {Tutorial} from "../../models/tutorial";
import {Item} from "../../models/item";
import {Itemset} from "../../models/itemset";
import {ItemService} from "../../services/item.service";
import {ItemsetService} from "../../services/itemset.service";

@Component({
    selector: "item-list",
    styles: ["ul {margin-bottom: 1.5rem}"],
    template: `
      <ul class="list-group">
        <li class="list-group-item" *ngFor="#groupedItem of groupedItems">
          <h5>{{groupedItem.itemset.name}}</h5>
          <span *ngFor="#item of groupedItem.items">
            <span class="label label-default">{{item.name}}</span>
          </span>
        </li>
      </ul>`,
    providers: [ItemService, ItemsetService]
})

export class ItemListComponent {
  @Input() tutorial: Tutorial;

  public groupedItems;

  constructor(private _itemService: ItemService, private _itemsetService: ItemsetService) {
  }

  loadItems() {
    this._itemService.getItemsWithIds(this.tutorial.itemIds)
      .then(items => {
        let itemsBySetId = {};
        for (let i = 0; i < items.length; i++) {
          let item = items[i];
          if (!itemsBySetId.hasOwnProperty(item.itemsetId)) {
              itemsBySetId[item.itemsetId] = [];
          }
          itemsBySetId[item.itemsetId].push(item);
        }
        this._itemsetService.getItemsetsWithIds(Object.keys(itemsBySetId).map(id => parseInt(id)))
          .then(itemsets => {
            this.groupedItems = [];
            for (let i = 0; i < itemsets.length; i++) {
              let itemset = itemsets[i];
              this.groupedItems.push({ itemset: itemset, items: itemsBySetId[itemset.id] });
            }
          });
      });
  }

  ngOnInit() {
    this.loadItems();
  }
}
