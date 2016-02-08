import {Injectable} from "angular2/core";
import {Http} from "angular2/http";

@Injectable()
export class ItemsetService {

  constructor(private _http:Http) {
  }

  getAllItemsets() {
    return this._http.get('server/itemsets.json')
      .map(res => res.json())
      .toPromise();
  }

  getItemset(id: number) {
    return this.getAllItemsets()
      .then(itemset => itemset.filter(cp => cp.id === id)[0]);
  }

  getItemsetsWithIds(ids: number[]) {
    return this.getAllItemsets()
      .then(itemsets => itemsets.filter(et => ids.indexOf(et.id) > -1));
  }
}
