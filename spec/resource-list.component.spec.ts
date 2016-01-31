import {ResourceService} from "../app/services/resource.service";
import {Resource} from "../app/models/resource";
import {Tutorial} from "../app/models/tutorial";
import {ResourceListComponent} from "../app/components/resource-list.component";

describe("ResourceListComponent", () => {
  let resourceService: ResourceService;
  let resourceListComponent: ResourceListComponent;

  beforeEach(() => {
    resourceService = jasmine.createSpyObj("resourceService", ["getResourcesById"]);
    resourceListComponent = new ResourceListComponent(resourceService);
  });

  it("loads resources", done => {
    let resources = <Resource[]>[];
    let tutorial = <Tutorial>{resourceIds: [1, 2, 3]};

    let promise: Promise<Resource[]> = Promise.resolve(resources);
    (<jasmine.Spy>resourceService.getResourcesById).and.callFake(ids => ids === tutorial.resourceIds && promise || Promise.resolve());

    resourceListComponent.tutorial = tutorial;
    resourceListComponent.loadResources();

    promise.then(resources => {
      expect(resourceListComponent.resources).toBe(resources);
      done();
    });
  });

  it("loads resources on init", () => {
    spyOn(resourceListComponent, "loadResources");
    resourceListComponent.ngOnInit();
    expect(resourceListComponent.loadResources).toHaveBeenCalled();
  });

});
