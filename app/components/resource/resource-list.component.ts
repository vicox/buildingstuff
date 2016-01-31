import {Component, Input} from "angular2/core";
import {Tutorial} from "../../models/tutorial";
import {Resource} from "../../models/resource";
import {ResourceService} from "../../services/resource.service";

@Component({
    selector: "resource-list",
    styles: ["ul {padding: 0}"],
    template: `
      <ul class="listgroup">
        <li *ngFor="#resource of resources" class="list-group-item">{{resource.name}}</li>
      </ul>`,
    providers: [ResourceService]
})

export class ResourceListComponent {
  @Input() tutorial: Tutorial;

  public resources: Resource[];

  constructor(private _resourceService: ResourceService) {
  }

  loadResources() {
    this._resourceService.getResourcesById(this.tutorial.resourceIds).then(resources => this.resources = resources);
  }

  ngOnInit() {
    this.loadResources();
  }
}
