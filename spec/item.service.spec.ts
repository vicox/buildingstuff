import {Injector, provide} from 'angular2/core';
import {BaseRequestOptions, Http, Response, BaseResponseOptions} from 'angular2/http';
import {MockBackend} from 'angular2/http/testing';
import 'rxjs/Rx';
import {Itemset} from "../app/models/itemset";
import {ItemService} from "../app/services/item.service";

const ELEMENTS = [{
  "itemsetId": 1,
  "name": "Item 1",
  "id": 1
}, {
  "itemsetId": 1,
  "name": "Item 2",
  "id": 2
}, {
  "itemsetId": 2,
  "name": "Item 3",
  "id": 3
}, {
  "itemsetId": 3,
  "name": "Item 4",
  "id": 4
}, {
  "itemsetId": 3,
  "name": "Item 5",
  "id": 5
}, {
  "itemsetId": 3,
  "name": "Item 6",
  "id": 6
}, {
  "itemsetId": 3,
  "name": "Item 7",
  "id": 7
}, {
  "itemsetId": 3,
  "name": "Item 8",
  "id": 8
}];

describe("ItemService", () => {
  let http: Http;
  let itemService: ItemService;

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
      responseOptions.body = JSON.stringify(ELEMENTS);
      connection.mockRespond(new Response(responseOptions));
    });

    http = injector.get(Http);
  });

  beforeEach(() => {
    itemService = new ItemService(http);
  });

  it("gets all items", done => {
    itemService.getAllItems().then((items) => {
      expect(items).toEqual(ELEMENTS);
      done();
    });
  });

  it("gets items by itemset", done => {
    itemService.getItems(<Itemset>{id: 1}).then((items) => {
      expect(items).toEqual([
        { "itemsetId": 1, "name": "Item 1", "id": 1 },
        { "itemsetId": 1, "name": "Item 2", "id": 2 }
      ]);
      done();
    });
  });

  it("gets item by id", done => {
    itemService.getItem(1).then((item) => {
      expect(item).toEqual({ "itemsetId": 1, "name": "Item 1", "id": 1 });
      done();
    });
  });

  it("gets items with ids", done => {
    itemService.getItemsWithIds([1, 2]).then((items) => {
      expect(items).toEqual([
        { "itemsetId": 1, "name": "Item 1", "id": 1 },
        { "itemsetId": 1, "name": "Item 2", "id": 2 },
      ]);
      done();
    });
  });

});
