import {Injector, provide} from 'angular2/core';
import {BaseRequestOptions, Http, Response, BaseResponseOptions} from 'angular2/http';
import {MockBackend} from 'angular2/http/testing';
import 'rxjs/Rx';
import {Field} from "../app/models/field";
import {ResourceService} from "../app/services/resource.service";

const RESOURCES = [{
  "id": 1,
  "fieldId": 1,
  "name": "Resource 1"
}, {
    "id": 2,
    "fieldId": 1,
    "name": "Resource 2"
  }, {
    "id": 3,
    "fieldId": 1,
    "name": "Resource 3"
  }]

describe("ResourceService", () => {
  let http: Http;
  let resourceService: ResourceService;

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
      responseOptions.body = JSON.stringify(RESOURCES);
      connection.mockRespond(new Response(responseOptions));
    });

    http = injector.get(Http);
  });

  beforeEach(() => {
    resourceService = new ResourceService(http);
  });

  it("gets resources", done => {
    resourceService.getResources(<Field>{ id: 1 }).then((resources) => {
      expect(resources).toEqual([
        { "id": 1, "fieldId": 1, "name": "Resource 1" },
        { "id": 2, "fieldId": 1, "name": "Resource 2" },
        { "id": 3, "fieldId": 1, "name": "Resource 3" },
      ]);
      done();
    });
  });

  it("gets resource", done => {
    resourceService.getResource(1).then((resource) => {
      expect(resource).toEqual({ "id": 1, "fieldId": 1, "name": "Resource 1" });
      done();
    });
  });

  it("gets resources by id", done => {
    resourceService.getResourcesById([1, 2]).then((resources) => {
      expect(resources).toEqual([
        { "id": 1, "fieldId": 1, "name": "Resource 1" },
        { "id": 2, "fieldId": 1, "name": "Resource 2" }
      ]);
      done();
    });
  });

});
