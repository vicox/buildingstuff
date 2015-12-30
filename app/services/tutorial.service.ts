import {Injectable} from "angular2/core";
import {Field} from "../models/field";
import {Tutorial} from "../models/tutorial";

const TUTORIALS: Tutorial[] = [
  { "id": 1, "title": "Tutorial 1", "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean faucibus tincidunt mauris eget mattis. Cras nec fermentum ex. Aenean maximus dictum ligula non vulputate. Vivamus eget diam ac justo imperdiet aliquet. Proin et sagittis lectus, ut eleifend purus. Duis eget venenatis libero. Cras gravida pulvinar enim, a ultrices turpis fermentum non. Phasellus fermentum bibendum pellentesque. Mauris aliquam auctor augue, vitae lobortis mi luctus sed. Curabitur in tempor lectus, at suscipit augue. Etiam ullamcorper elementum nisi." },
  { "id": 2, "title": "Tutorial 2", "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean faucibus tincidunt mauris eget mattis. Cras nec fermentum ex. Aenean maximus dictum ligula non vulputate. Vivamus eget diam ac justo imperdiet aliquet. Proin et sagittis lectus, ut eleifend purus. Duis eget venenatis libero. Cras gravida pulvinar enim, a ultrices turpis fermentum non. Phasellus fermentum bibendum pellentesque. Mauris aliquam auctor augue, vitae lobortis mi luctus sed. Curabitur in tempor lectus, at suscipit augue. Etiam ullamcorper elementum nisi." },
  { "id": 3, "title": "Tutorial 3", "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean faucibus tincidunt mauris eget mattis. Cras nec fermentum ex. Aenean maximus dictum ligula non vulputate. Vivamus eget diam ac justo imperdiet aliquet. Proin et sagittis lectus, ut eleifend purus. Duis eget venenatis libero. Cras gravida pulvinar enim, a ultrices turpis fermentum non. Phasellus fermentum bibendum pellentesque. Mauris aliquam auctor augue, vitae lobortis mi luctus sed. Curabitur in tempor lectus, at suscipit augue. Etiam ullamcorper elementum nisi." }
];

@Injectable()
export class TutorialService {
  getTutorials(field: Field) {
    return Promise.resolve(TUTORIALS);
  }

  getTutorial(id: number) {
    return Promise.resolve(TUTORIALS)
      .then(tutorials => tutorials.filter(t => t.id === id)[0]);
  }
}