import {ItemService} from "../app/services/item.service";
import {ItemsetService} from "../app/services/itemset.service";
import {Item} from "../app/models/item";
import {Itemset} from "../app/models/itemset";
import {Tutorial} from "../app/models/tutorial";
import {ItemListComponent} from "../app/components/item/item-list.component";

describe("ItemListComponent", () => {
  let itemService: ItemService;
  let itemsetService: ItemsetService;
  let itemListComponent: ItemListComponent;

  beforeEach(() => {
    itemService = jasmine.createSpyObj("itemService", ["getItemsWithIds"]);
    itemsetService = jasmine.createSpyObj("itemsetService", ["getItemsetsWithIds"]);
    itemListComponent = new ItemListComponent(itemService, itemsetService);
  });

  it("loads items", done => {
    let items = [
      { "itemsetId": 1, "name": "Item 1", "id": 1 },
      { "itemsetId": 1, "name": "Item 2", "id": 2 },
      { "itemsetId": 2, "name": "Item 3", "id": 3 }
    ];
    let itemsets = [
      { "name": "Itemset 1", "id": 1 },
      { "name": "Itemset 2", "id": 2 }
    ];

    let tutorial = <Tutorial>{itemIds: [1, 2, 3]};

    let itemPromise: Promise<Item[]> = Promise.resolve(items);
    let itemsetPromise: Promise<Itemset[]> = Promise.resolve(itemsets);
    (<jasmine.Spy>itemService.getItemsWithIds).and.callFake(ids => ids === tutorial.itemIds && itemPromise || Promise.resolve());
    (<jasmine.Spy>itemsetService.getItemsetsWithIds).and.callFake(ids => ids[0] === 1 && ids[1] == 2 && itemsetPromise || Promise.resolve());

    itemListComponent.tutorial = tutorial;
    itemListComponent.loadItems();

    itemPromise.then(() => {
      itemsetPromise.then(() => {
        expect(itemListComponent.groupedItems).toEqual([
          {
            itemset: {"name": "Itemset 1", "id": 1 },
            items: [
              { "itemsetId": 1, "name": "Item 1", "id": 1 },
              { "itemsetId": 1, "name": "Item 2", "id": 2 }
            ]
          },
          {
            itemset: { "name": "Itemset 2", "id": 2 },
            items: [
              { "itemsetId": 2, "name": "Item 3", "id": 3 }
            ]
          }
        ]);
        done();
      })
    });
  });

  it("loads items on init", () => {
    spyOn(itemListComponent, "loadItems");
    itemListComponent.ngOnInit();
    expect(itemListComponent.loadItems).toHaveBeenCalled();
  });

});
