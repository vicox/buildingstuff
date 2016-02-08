import {Injector, provide} from 'angular2/core';
import {BaseRequestOptions, Http, Response, BaseResponseOptions} from 'angular2/http';
import {MockBackend} from 'angular2/http/testing';
import 'rxjs/Rx';
import {ElementTypeService} from "../app/services/element-type.service";

const ELEMENT_TYPES = [{
  "name": "Element Type 1",
  "id": 1
}, {
  "name": "Element Type 2",
  "id": 2
}, {
  "name": "Element Type 3",
  "id": 3
}];

describe("ElementTypeService", () => {
  let http: Http;
  let elementTypeService: ElementTypeService;

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
    elementTypeService = new ElementTypeService(http);
  });

  it("gets all element types", done => {
    elementTypeService.getAllElementTypes().then((elementTypes) => {
      expect(elementTypes).toEqual(ELEMENT_TYPES);
      done();
    });
  });

  it("gets element type by id", done => {
    elementTypeService.getElementType(1).then((elementType) => {
      expect(elementType).toEqual({ "id": 1, "name": "Element Type 1" });
      done();
    });
  });

  it("gets element types with ids", done => {
    elementTypeService.getElementTypesWithIds([1, 2]).then((elementTypes) => {
      expect(elementTypes).toEqual([
        { "id": 1, "name": "Element Type 1" },
        { "id": 2, "name": "Element Type 2" },
      ]);
      done();
    });
  });

});
