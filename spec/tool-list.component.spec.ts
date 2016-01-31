import {ToolService} from "../app/services/tool.service";
import {Tool} from "../app/models/tool";
import {Tutorial} from "../app/models/tutorial";
import {ToolListComponent} from "../app/components/tool-list.component";

describe("ToolListComponent", () => {
  let toolService: ToolService;
  let toolListComponent: ToolListComponent;

  beforeEach(() => {
    toolService = jasmine.createSpyObj("toolService", ["getToolsById"]);
    toolListComponent = new ToolListComponent(toolService);
  });

  it("loads tools", done => {
    let tools = <Tool[]>[];
    let tutorial = <Tutorial>{toolIds: [1, 2, 3]};

    let promise: Promise<Tool[]> = Promise.resolve(tools);
    (<jasmine.Spy>toolService.getToolsById).and.callFake(ids => ids === tutorial.toolIds && promise || Promise.resolve());

    toolListComponent.tutorial = tutorial;
    toolListComponent.loadTools();

    promise.then(tools => {
      expect(toolListComponent.tools).toBe(tools);
      done();
    });
  });

  it("loads tools on init", () => {
    spyOn(toolListComponent, "loadTools");
    toolListComponent.ngOnInit();
    expect(toolListComponent.loadTools).toHaveBeenCalled();
  });

});
