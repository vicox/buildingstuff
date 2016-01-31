import {Field} from "../app/models/field";
import {ResourceService} from "../app/services/resource.service";

describe("ResourceService", () => {
    let resourceService: ResourceService;

    beforeEach(() => {
        resourceService = new ResourceService();
    });

    it("gets resources", done => {
        resourceService.getResources(<Field>{id: 1}).then((resources) => {
            expect(resources).toEqual([
                { "id": 1, "fieldId": 1, "name": "Resource 1" },
                { "id": 2, "fieldId": 1, "name": "Resource 2" },
                { "id": 3, "fieldId": 1, "name": "Resource 3" },
            ]);
            done();
        });
    });

    it("gets resource", done => {
        resourceService.getResource(1).then((resource) => {
            expect(resource).toEqual({ "id": 1, "fieldId": 1, "name": "Resource 1" });
            done();
        });
    });

    it("gets resources by id", done => {
        resourceService.getResourcesById([1, 2]).then((resources) => {
            expect(resources).toEqual([
                { "id": 1, "fieldId": 1, "name": "Resource 1" },
                { "id": 2, "fieldId": 1, "name": "Resource 2" }
            ]);
            done();
        });
    });

});
