import { last } from "lodash";


interface IPersonable{
  firstName:string;
  lastName:string;
  middleName?:string;
}

class Person implements IPersonable{
  public  readonly firstName: string;
  public  readonly lastName: string;
  public  readonly middleName?: string;

  constructor(fName: string,lastName:string,middleName?:string) {
     this.firstName = fName;
     this.lastName = lastName;
     this.middleName = middleName;
  }

  


}

export {IPersonable,Person};