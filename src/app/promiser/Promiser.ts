export type fnCallBack = (arg1: string, arg2: string) => string;

export class MissingInfo extends Error {}

export class Promiser {
  public callBackGreeter(
    fName: string,
    lName: string,
    callback: fnCallBack
  ): string {
    if (fName.length == 0 || lName.length == 0) {
      throw new MissingInfo("Firstname and lastname is missing");
    }
    return callback(fName, lName);
  }

  public promisedGreeter(fName: string, lName: string): Promise<string> {
    let _promise = new Promise<string>((resolve, reject) => {
      if (fName.length == 0 || lName.length == 0) {
        reject("Firstname and lastname is missing");
      }
      let fullName = fName + lName;
      resolve( fullName );
    });

    return _promise;
  }
}
