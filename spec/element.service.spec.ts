import {Injector, provide} from 'angular2/core';
import {BaseRequestOptions, Http, Response, BaseResponseOptions} from 'angular2/http';
import {MockBackend} from 'angular2/http/testing';
import 'rxjs/Rx';
import {ElementType} from "../app/models/element-type";
import {ElementService} from "../app/services/element.service";

const ELEMENTS = [{
  "typeId": 1,
  "name": "Element 1",
  "id": 1
}, {
  "typeId": 1,
  "name": "Element 2",
  "id": 2
}, {
  "typeId": 2,
  "name": "Element 3",
  "id": 3
}, {
  "typeId": 3,
  "name": "Element 4",
  "id": 4
}, {
  "typeId": 3,
  "name": "Element 5",
  "id": 5
}, {
  "typeId": 3,
  "name": "Element 6",
  "id": 6
}, {
  "typeId": 3,
  "name": "Element 7",
  "id": 7
}, {
  "typeId": 3,
  "name": "Element 8",
  "id": 8
}];

describe("ElementService", () => {
  let http: Http;
  let elementService: ElementService;

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
    elementService = new ElementService(http);
  });

  it("gets all elements", done => {
    elementService.getAllElements().then((elements) => {
      expect(elements).toEqual(ELEMENTS);
      done();
    });
  });

  it("gets elements by type", done => {
    elementService.getElements(<ElementType>{id: 1}).then((elements) => {
      expect(elements).toEqual([
        { "typeId": 1, "name": "Element 1", "id": 1 },
        { "typeId": 1, "name": "Element 2", "id": 2 }
      ]);
      done();
    });
  });

  it("gets element by id", done => {
    elementService.getElement(1).then((element) => {
      expect(element).toEqual({ "typeId": 1, "name": "Element 1", "id": 1 });
      done();
    });
  });

  it("gets elements with ids", done => {
    elementService.getElementsWithIds([1, 2]).then((elements) => {
      expect(elements).toEqual([
        { "typeId": 1, "name": "Element 1", "id": 1 },
        { "typeId": 1, "name": "Element 2", "id": 2 },
      ]);
      done();
    });
  });

});
