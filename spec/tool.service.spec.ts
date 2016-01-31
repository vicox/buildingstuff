import {Field} from "../app/models/field";
import {ToolService} from "../app/services/tool.service";

describe("ToolService", () => {
    let toolService: ToolService;

    beforeEach(() => {
        toolService = new ToolService();
    });

    it("gets tools", done => {
        toolService.getTools(<Field>{id: 1}).then((tools) => {
            expect(tools).toEqual([
                { "id": 1, "fieldId": 1, "name": "Tool 1" },
                { "id": 2, "fieldId": 1, "name": "Tool 2" },
                { "id": 3, "fieldId": 1, "name": "Tool 3" },
            ]);
            done();
        });
    });

    it("gets tool", done => {
        toolService.getTool(1).then((tool) => {
            expect(tool).toEqual({ "id": 1, "fieldId": 1, "name": "Tool 1" });
            done();
        });
    });

    it("gets tool by id", done => {
        toolService.getToolsById([1, 2]).then((tools) => {
            expect(tools).toEqual([
                { "id": 1, "fieldId": 1, "name": "Tool 1" },
                { "id": 2, "fieldId": 1, "name": "Tool 2" }
            ]);
            done();
        });
    });

});
