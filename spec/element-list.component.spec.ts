import {ElementService} from "../app/services/element.service";
import {ElementTypeService} from "../app/services/element-type.service";
import {Element} from "../app/models/element";
import {ElementType} from "../app/models/element-type";
import {Tutorial} from "../app/models/tutorial";
import {ElementListComponent} from "../app/components/element/element-list.component";

describe("ElementListComponent", () => {
  let elementService: ElementService;
  let elementTypeService: ElementTypeService;
  let elementListComponent: ElementListComponent;

  beforeEach(() => {
    elementService = jasmine.createSpyObj("elementService", ["getElementsWithIds"]);
    elementTypeService = jasmine.createSpyObj("elementTypeService", ["getElementTypesWithIds"]);
    elementListComponent = new ElementListComponent(elementService, elementTypeService);
  });

  it("loads elements", done => {
    let elements = [
      { "typeId": 1, "name": "Element 1", "id": 1 },
      { "typeId": 1, "name": "Element 2", "id": 2 },
      { "typeId": 2, "name": "Element 3", "id": 3 }
    ];
    let elementsTypes = [
      { "name": "Element Type 1", "id": 1 },
      { "name": "Element Type 2", "id": 2 }
    ];

    let tutorial = <Tutorial>{elementIds: [1, 2, 3]};

    let elementPromise: Promise<Element[]> = Promise.resolve(elements);
    let elementTypePromise: Promise<ElementType[]> = Promise.resolve(elementsTypes);
    (<jasmine.Spy>elementService.getElementsWithIds).and.callFake(ids => ids === tutorial.elementIds && elementPromise || Promise.resolve());
    (<jasmine.Spy>elementTypeService.getElementTypesWithIds).and.callFake(ids => ids[0] === 1 && ids[1] == 2 && elementTypePromise || Promise.resolve());

    elementListComponent.tutorial = tutorial;
    elementListComponent.loadElements();

    elementPromise.then(() => {
      elementTypePromise.then(() => {
        expect(elementListComponent.groupedElements).toEqual([
          {
            type: {"name": "Element Type 1", "id": 1 },
            elements: [
              { "typeId": 1, "name": "Element 1", "id": 1 },
              { "typeId": 1, "name": "Element 2", "id": 2 }
            ]
          },
          {
            type: { "name": "Element Type 2", "id": 2 },
            elements: [
              { "typeId": 2, "name": "Element 3", "id": 3 }
            ]
          }
        ]);
        done();
      })
    });
  });

  it("loads elements on init", () => {
    spyOn(elementListComponent, "loadElements");
    elementListComponent.ngOnInit();
    expect(elementListComponent.loadElements).toHaveBeenCalled();
  });

});
