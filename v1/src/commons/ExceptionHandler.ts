import CONSTANTS from './Constants';
import Exception from './Exception';
import ErrorModel from '../models/Error';

export default class ExceptionHandler {
  static throw(
    error: Error | any,
    currentContext: string,
    method: string,
    message = CONSTANTS.MESSAGES.DEFAULT[500],
    statusCode = CONSTANTS.HTTP.STATUS.INTERNAL_SERVER_ERROR,
    type = CONSTANTS.EXCEPTIONS.DEFAULT,
  ): never {
    if (type === CONSTANTS.EXCEPTIONS.BACKEND) {
      const errorMessage = ErrorModel.parseByMessage(message, statusCode, currentContext, method);
      throw new Exception({
        error,
        message: errorMessage,
        statusCode,
        type,
      });
    }

    const errorMessage = ErrorModel.parseByMessage(message, statusCode, currentContext, method, true);
    throw new Exception({
      error,
      message: errorMessage,
      statusCode,
      type,
    });
  }
}
