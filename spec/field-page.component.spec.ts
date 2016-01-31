import {RouteParams} from "angular2/router";
import {FieldService} from "../app/services/field.service";
import {Field} from "../app/models/field";
import {FieldPageComponent} from "../app/components/field-page.component";

describe("FieldPageComponent", () => {
  let fieldService: FieldService;
  let routeParams: RouteParams;
  let fieldPageComponent: FieldPageComponent;

  beforeEach(() => {
    fieldService = jasmine.createSpyObj("fieldService", ["getField"]);
    routeParams = jasmine.createSpyObj("routeParams", ["get"]);
    fieldPageComponent = new FieldPageComponent(fieldService, routeParams);
  });

  it("loads field", done => {
    let promise: Promise<Field> = Promise.resolve({ id: 1 });

    (<jasmine.Spy>routeParams.get).and.callFake(param => param === "id" && 1);
    (<jasmine.Spy>fieldService.getField).and.callFake(id => id === 1 && promise || Promise.resolve());

    fieldPageComponent.loadField();

    promise.then(() => {
        expect(fieldPageComponent.field).toEqual({ id: 1 });
      done();
    });
  });

  it("loads field on init", () => {
    spyOn(fieldPageComponent, "loadField");
    fieldPageComponent.ngOnInit();
    expect(fieldPageComponent.loadField).toHaveBeenCalled();
  });

});
