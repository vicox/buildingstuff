import {TutorialService} from "../services/tutorial.service";
import {Field} from "../models/field";
import {Tutorial} from "../models/tutorial";
import {TutorialListComponent} from "./tutorial-list.component";

describe("TutorialListComponent", () => {
  let tutorialService: TutorialService;
  let tutorialListComponent: TutorialListComponent;

  beforeEach(() => {
    tutorialService = jasmine.createSpyObj("tutorialService", ["getTutorials"]);
    tutorialListComponent = new TutorialListComponent(tutorialService);
  });

  it("loads tutorials", done => {
    let promise: Promise<Tutorial[]> = Promise.resolve([{ id: 1 }]);
    (<jasmine.Spy>tutorialService.getTutorials).and.callFake(field => field.id === 1 && promise || Promise.resolve());

    tutorialListComponent.field = <Field>{ id: 1 };
    tutorialListComponent.loadTutorials();

    promise.then(() => {
        expect(tutorialListComponent.tutorials).toEqual([{ id: 1 }]);
      done();
    });
  });

  it("loads tutorials on init", () => {
    spyOn(tutorialListComponent, "loadTutorials");
    tutorialListComponent.ngOnInit();
    expect(tutorialListComponent.loadTutorials).toHaveBeenCalled();
  });

});