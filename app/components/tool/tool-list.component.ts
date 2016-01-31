import {Component, Input} from "angular2/core";
import {Tutorial} from "../../models/tutorial";
import {Tool} from "../../models/tool";
import {ToolService} from "../../services/tool.service";

@Component({
    selector: "tool-list",
    styles: ["ul {padding: 0}"],
    template: `
      <ul class="listgroup">
        <li *ngFor="#tool of tools" class="list-group-item">{{tool.name}}</li>
      </ul>`,
    providers: [ToolService]
})

export class ToolListComponent {
  @Input() tutorial: Tutorial;

  public tools: Tool[];

  constructor(private _toolService: ToolService) {
  }

  loadTools() {
    this._toolService.getToolsById(this.tutorial.toolIds).then(tools => this.tools = tools);
  }

  ngOnInit() {
    this.loadTools();
  }
}
