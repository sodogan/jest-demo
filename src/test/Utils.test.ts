import { StringInfo, getStringInfo } from "../app/Utils";

describe("GetStringInfo should return right values", () => {

      //GIVEN
      const result =  {
        "length": 5,
        "toLower": "hello",
        "toUpper": "HELLO",
      };

  it("should return the right uppercase", () => {

    //WHEN
    let actual:StringInfo = getStringInfo("hello");

    //THEN
    expect(actual.toLower).toBe(result.toLower); 


  });
 
  it("should return the right object", () => {

    //GIVEN
    const result =  {
         "length": 5,
         "toLower": "hello",
         "toUpper": "HELLO",
       };
    //WHEN
    let actual:StringInfo = getStringInfo("hello");

    //THEN
    expect(actual).toStrictEqual(result); 

  });
});
