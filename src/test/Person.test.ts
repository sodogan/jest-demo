import { IPersonable, Person } from "../app/Person";

//Testing Person object
describe("Person test suite", () => {
  describe("Testing Person object init", () => {
    let person: IPersonable;
    beforeEach(() => {
      person = new Person("solen", "dogan");
    });

    it("should initialize correctly", () => {
      expect(person).not.toBeUndefined();
    });

    it("should initialize firstName correctly", () => {
      expect(person.firstName).toBe("solen");
    });

    it("should initialize lastName correctly", () => {
      expect(person.lastName).toBe("dogan");
    });

    it("should initialize middleName correctly", () => {
      expect(person.middleName).toBeUndefined();
    });
  });

  describe("Testing Person compare", () => {
    let person: IPersonable;
    beforeEach(() => {
      person = new Person("solen", "dogan");
    });
  
    it("should compare right", () => {
      let _compared = {
        firstName: "solen",
        lastName: "dogan",
      };
  
      expect(person).toEqual(_compared);
    });
  });
  

});

