import {TutorialService} from "../app/services/tutorial.service";
import {Field} from "../app/models/field";
import {Tutorial} from "../app/models/tutorial";
import {TutorialListComponent} from "../app/components/tutorial/tutorial-list.component";

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
