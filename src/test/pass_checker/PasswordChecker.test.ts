import { Callable, PasswordChecker } from "../../app/pass_checker/PasswordChecker";

describe("TDD approach test suite ", () => {
  describe.only("Test Validate ", () => {
    let _sut: PasswordChecker;

    beforeEach(() => {
      _sut = PasswordChecker.getInstance();
    });

    it("should fail as contain less then 8 chars", () => {
      let _stub = {
        callback:(arg: string) => {
        return false;
      }
    }


      let actual = _sut.validate("hello", _stub);
      expect(actual).toBe(false);
    });

    it("should pass as contain more then 8 chars", () => {
        let _stub:Callable = {
            callback:(arg: string) => {
            return true;
          }
        }
    
     let actual = _sut.validate("helloyouuu", _stub  );
      expect(actual).toBe(true);
    });
  });

  describe("Test isValidLength ", () => {
    let _passwordChecker: PasswordChecker;

    beforeEach(() => {
      _passwordChecker = PasswordChecker.getInstance();
    });

    it("should fail as contain less then 8 chars", () => {
      let actual = _passwordChecker.isLengthValid("hello");
      expect(actual).toBe(false);
    });

    it("should pass as contain more then 8 chars", () => {
      let actual = _passwordChecker.isLengthValid("helloyouuu");
      expect(actual).toBe(true);
    });
  });
});
