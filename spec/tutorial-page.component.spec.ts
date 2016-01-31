import {RouteParams} from "angular2/router";
import {TutorialService} from "../app/services/tutorial.service";
import {FieldService} from "../app/services/field.service";
import {Tutorial} from "../app/models/tutorial";
import {Field} from "../app/models/field";
import {TutorialPageComponent} from "../app/components/tutorial-page.component";

describe("TutorialPageComponent", () => {
  let routeParams: RouteParams;
  let tutorialService: TutorialService;
  let fieldService: FieldService;
  let tutorialPageComponent: TutorialPageComponent;

  beforeEach(() => {
    routeParams = jasmine.createSpyObj("routeParams", ["get"]);
    fieldService = jasmine.createSpyObj("fieldService", ["getField"]);
    tutorialService = jasmine.createSpyObj("tutorialService", ["getTutorial"]);
    tutorialPageComponent = new TutorialPageComponent(tutorialService, fieldService, routeParams);
  });

  it("loads tutorial with field", done => {
    let tutorialPromise: Promise<Tutorial> = Promise.resolve({ id: 1, fieldId: 2 });
    let fieldPromise: Promise<Field> = Promise.resolve({ id: 2 });

    (<jasmine.Spy>routeParams.get).and.callFake(param => param === "id" && 1);
    (<jasmine.Spy>tutorialService.getTutorial).and.callFake(id => id === 1 && tutorialPromise || Promise.resolve());
    (<jasmine.Spy>fieldService.getField).and.callFake(id => id === 2 && fieldPromise || Promise.resolve());

    tutorialPageComponent.loadTutorialWithField();

    tutorialPromise.then(() => {
      fieldPromise.then(() => {
          expect(tutorialPageComponent.tutorial).toEqual({ id: 1, fieldId: 2 });
          expect(tutorialPageComponent.field).toEqual({ id: 2 });
          done();
      });
    });
  });

  it("loads tutorial with field on init", () => {
    spyOn(tutorialPageComponent, "loadTutorialWithField");
    tutorialPageComponent.ngOnInit();
    expect(tutorialPageComponent.loadTutorialWithField).toHaveBeenCalled();
  });

});
