import { MissingInfo, Promiser } from "../../app/promiser/Promiser";

describe("Promiser test suite", () => {
  describe.only("Test promise", () => {
    it("should fail as emptycontain firstname and lastname otherwise throw an error", (done) => {
      let _sut = new Promiser();

      _sut
        .promisedGreeter("", "")
        .then(() => {
          // done.fail("Failed the test");
        })
        .catch((err) => {
          // done.fail("Failed the test");
        });
    });
  });

  describe("Test callback", () => {
    it("should contain firstname and lastname otherwise throw an error", () => {
      let _sut = new Promiser();
      let _dafaultHandler = (arg1: string, arg2: string) => "noneed";

      try {
        let _test = _sut.callBackGreeter("", "2", _dafaultHandler);
      } catch (error) {
        expect(error).toBeInstanceOf(MissingInfo);
      }
    });

    it("should greet correctly with firstname and lastname with Mr", () => {
      let _sut = new Promiser();
      let PREFIX = "Mr";
      let _dafaultHandler = function (arg1: string, arg2: string) {
        return PREFIX + arg1 + arg2;
      };

      let actual = _sut.callBackGreeter("solen", "dogan", _dafaultHandler);

      expect(actual).toBe("Mrsolendogan");
    });
  });
});
