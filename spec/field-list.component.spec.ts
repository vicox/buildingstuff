import {Router} from "angular2/router";
import {FieldService} from "../app/services/field.service";
import {Field} from "../app/models/field";
import {FieldListComponent} from "../app/components/field/field-list.component";

describe("FieldListComponent", () => {
  let fieldService: FieldService;
  let router: Router;
  let fieldListComponent: FieldListComponent;

  beforeEach(() => {
    fieldService = jasmine.createSpyObj("fieldService", ["getFields"]);
    router = jasmine.createSpyObj("router", ["navigate"]);
    fieldListComponent = new FieldListComponent(fieldService, router);
  });

  it("loads fields", done => {
    let promise: Promise<Field[]> = Promise.resolve([{ id: 1 }]);
    (<jasmine.Spy>fieldService.getFields).and.returnValue(promise);

    fieldListComponent.loadFields();

    promise.then(() => {
      expect(fieldListComponent.fields).toEqual([{ id: 1 }]);
      done();
    });
  });

  it("navigates to field url", () => {
    fieldListComponent.gotoField(<Field>{ id: 1 });
    expect(router.navigate).toHaveBeenCalledWith(
      ["Field", jasmine.objectContaining({ id: 1 })]
    );
  });

  it("loads fields on init", () => {
    spyOn(fieldListComponent, "loadFields");
    fieldListComponent.ngOnInit();
    expect(fieldListComponent.loadFields).toHaveBeenCalled();
  });

});
