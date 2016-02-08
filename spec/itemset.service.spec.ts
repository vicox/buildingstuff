import {Injector, provide} from 'angular2/core';
import {BaseRequestOptions, Http, Response, BaseResponseOptions} from 'angular2/http';
import {MockBackend} from 'angular2/http/testing';
import 'rxjs/Rx';
import {ItemsetService} from "../app/services/itemset.service";

const ELEMENT_TYPES = [{
  "name": "Item Type 1",
  "id": 1
}, {
  "name": "Item Type 2",
  "id": 2
}, {
  "name": "Item Type 3",
  "id": 3
}];

describe("ItemsetService", () => {
  let http: Http;
  let itemsetService: ItemsetService;

  beforeAll(() => {
    let injector = Injector.resolveAndCreate([
      MockBackend,
      BaseRequestOptions,
      provide(Http, {
        useFactory: (backend, defaultOptions) => {
          return new Http(backend, defaultOptions)
        }, deps: [MockBackend, BaseRequestOptions]
      })]);

    let backend = injector.get(MockBackend);
    backend.connections.subscribe(connection => {
      let responseOptions = new BaseResponseOptions();
      responseOptions.body = JSON.stringify(ELEMENT_TYPES);
      connection.mockRespond(new Response(responseOptions));
    });

    http = injector.get(Http);
  });

  beforeEach(() => {
    itemsetService = new ItemsetService(http);
  });

  it("gets all itemsets", done => {
    itemsetService.getAllItemsets().then((itemsets) => {
      expect(itemsets).toEqual(ELEMENT_TYPES);
      done();
    });
  });

  it("gets itemset by id", done => {
    itemsetService.getItemset(1).then((itemset) => {
      expect(itemset).toEqual({ "id": 1, "name": "Item Type 1" });
      done();
    });
  });

  it("gets itemsets with ids", done => {
    itemsetService.getItemsetsWithIds([1, 2]).then((itemsets) => {
      expect(itemsets).toEqual([
        { "id": 1, "name": "Item Type 1" },
        { "id": 2, "name": "Item Type 2" },
      ]);
      done();
    });
  });

});
