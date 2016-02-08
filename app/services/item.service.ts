import {Injectable} from "angular2/core";
import {Http} from "angular2/http";
import {Itemset} from "../models/itemset";

@Injectable()
export class ItemService {

  constructor(private _http:Http) {
  }

  getAllItems() {
    return this._http.get('server/items.json')
      .map(res => res.json())
      .toPromise();
  }

  getItems(itemset: Itemset) {
    return this.getAllItems()
      .then(items => items.filter(c => c.itemsetId === itemset.id));
  }

  getItem(id: number) {
    return this.getAllItems()
      .then(items => items.filter(c => c.id === id)[0]);
  }

  getItemsWithIds(ids: number[]) {
    return this.getAllItems()
      .then(items => items.filter(e => ids.indexOf(e.id) > -1));
  }
}
