import {Injector, provide} from 'angular2/core';
import {BaseRequestOptions, Http, Response, BaseResponseOptions} from 'angular2/http';
import {MockBackend} from 'angular2/http/testing';
import 'rxjs/Rx';
import {Field} from "../app/models/field";
import {ToolService} from "../app/services/tool.service";

const TOOLS = [{
  "id": 1,
  "fieldId": 1,
  "name": "Tool 1"
}, {
  "id": 2,
  "fieldId": 1,
  "name": "Tool 2"
}, {
  "id": 3,
  "fieldId": 1,
  "name": "Tool 3"
}]

describe("ToolService", () => {
  let http: Http;
  let toolService: ToolService;

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
      responseOptions.body = JSON.stringify(TOOLS);
      connection.mockRespond(new Response(responseOptions));
    });

    http = injector.get(Http);
  });

  beforeEach(() => {
    toolService = new ToolService(http);
  });

  it("gets tools", done => {
    toolService.getTools(<Field>{ id: 1 }).then((tools) => {
      expect(tools).toEqual([
        { "id": 1, "fieldId": 1, "name": "Tool 1" },
        { "id": 2, "fieldId": 1, "name": "Tool 2" },
        { "id": 3, "fieldId": 1, "name": "Tool 3" },
      ]);
      done();
    });
  });

  it("gets tool", done => {
    toolService.getTool(1).then((tool) => {
      expect(tool).toEqual({ "id": 1, "fieldId": 1, "name": "Tool 1" });
      done();
    });
  });

  it("gets tool by id", done => {
    toolService.getToolsById([1, 2]).then((tools) => {
      expect(tools).toEqual([
        { "id": 1, "fieldId": 1, "name": "Tool 1" },
        { "id": 2, "fieldId": 1, "name": "Tool 2" }
      ]);
      done();
    });
  });

});
