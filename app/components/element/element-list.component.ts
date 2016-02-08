import {Component, Input} from "angular2/core";
import {Tutorial} from "../../models/tutorial";
import {Element} from "../../models/element";
import {ElementType} from "../../models/element-type";
import {ElementService} from "../../services/element.service";
import {ElementTypeService} from "../../services/element-type.service";

@Component({
    selector: "element-list",
    styles: ["ul {margin-bottom: 1.5rem}"],
    template: `
      <ul class="list-group">
        <li class="list-group-item" *ngFor="#groupedElement of groupedElements">
          <h5>{{groupedElement.type.name}}</h5>
          <span *ngFor="#element of groupedElement.elements">
            <span class="label label-default">{{element.name}}</span>
          </span>
        </li>
      </ul>`,
    providers: [ElementService, ElementTypeService]
})

export class ElementListComponent {
  @Input() tutorial: Tutorial;

  public groupedElements;

  constructor(private _elementService: ElementService, private _elementTypeService: ElementTypeService) {
  }

  loadElements() {
    this._elementService.getElementsWithIds(this.tutorial.elementIds)
      .then(elements => {
        let elementsByTypeId = {};
        for (let i = 0; i < elements.length; i++) {
          let element = elements[i];
          if (!elementsByTypeId.hasOwnProperty(element.typeId)) {
              elementsByTypeId[element.typeId] = [];
          }
          elementsByTypeId[element.typeId].push(element);
        }
        this._elementTypeService.getElementTypesWithIds(Object.keys(elementsByTypeId).map(id => parseInt(id)))
          .then(elementTypes => {
            this.groupedElements = [];
            for (let i = 0; i < elementTypes.length; i++) {
              let elementType = elementTypes[i];
              this.groupedElements.push({ type: elementType, elements: elementsByTypeId[elementType.id] });
            }
          });
      });
  }

  ngOnInit() {
    this.loadElements();
  }
}
