//trying to write a Unit test with JEST
import * as _ from "lodash";
import * as Utils from "../app/Utils";

import type {funcUpperize }   from  "../app/Utils";

describe("My First test", () => {
  it("should work correctly with Lodash library", () => {
    //GIVEN
    const expected = [12, 24];

    //WHEN
    let result = _.concat(12, 24);

    //THEN
    expect(result).toStrictEqual(expected);

 
    let g:funcUpperize;
  
  });
});
