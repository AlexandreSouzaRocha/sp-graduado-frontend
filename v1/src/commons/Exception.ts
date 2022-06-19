type ExceptionParams = {
  message: string;
  statusCode: number;
  type: string;
  error: Error | any;
};

export default class Exception extends Error {
  public message: string;

  public statusCode: number;

  public type: string;

  public error: Error | any;

  constructor(errorParams: ExceptionParams) {
    super(errorParams.message);
    this.message = errorParams.message;
    this.statusCode = errorParams.statusCode;
    this.type = errorParams.type;
    this.error = errorParams.error;
  }
}
