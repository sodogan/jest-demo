export type FuncType = (arg:string)=>boolean;

export interface Callable{
  callback(args:string):boolean;
}

export class PasswordChecker {
  private static _self: PasswordChecker;

  private constructor() {}

  public static getInstance() {
    if (!this._self) {
      return new PasswordChecker();
    }
    return this._self;
  }

  public isLengthValid(password: string): boolean {
    if (password.length > 8) return true;
    else return false;
  }

  public validate(password: string, iCall: Callable):boolean {
    if (this.isLengthValid(password)) {
      return iCall.callback(password);
    } else {
      return false; 
    }
  }
}
