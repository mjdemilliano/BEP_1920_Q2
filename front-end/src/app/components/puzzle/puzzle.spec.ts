import { Puzzle } from "./puzzle";
import { PuzzleComponent } from "./puzzle.component";

describe("PuzzleComponent", () => {
  let puzzle: Puzzle;

  beforeEach(() => {
    const jsonData = JSON.parse(`{
          "id": "Door open",
          "status": false,
           "description": "The door opens"
        }
    `);
    puzzle = new Puzzle(jsonData);
  });

  it("should create", () => {
    expect(puzzle).toBeTruthy();
  });

  it("should set status", () => {
    expect(puzzle.status).toBe(false);
    puzzle.updateStatus(true);
    expect(puzzle.status).toBe(true);
  });
});