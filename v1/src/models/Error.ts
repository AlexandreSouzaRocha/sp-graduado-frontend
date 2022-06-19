import CONSTANTS from '../commons/Constants';

const { BACKEND, MESSAGES }: any = CONSTANTS;

export default class ErrorModel {
  static parseByMessage(
    errorMessage: string,
    statusCode: number,
    currentContext: string,
    method: string,
    resolveByCode = false,
  ): string {
    try {
      const fromToList = BACKEND.ERROR_MESSAGES[currentContext];
      const currMethod = method.toUpperCase();

      if (resolveByCode) {
        return this.parseByStatusCode(statusCode);
      }

      if (fromToList && fromToList[currMethod]) {
        for (const fromTo of fromToList[currMethod].fromTo) {
          if (fromTo.from === errorMessage) {
            return fromTo.to;
          }

          return CONSTANTS.MESSAGES.DEFAULT[500];
        }
        return fromToList[currMethod].default;
      }

      return this.parseByStatusCode(statusCode);
    } catch (error) {
      return this.parseByStatusCode(statusCode);
    }
  }

  private static parseByStatusCode(statusCode: number): string {
    return MESSAGES.DEFAULT[statusCode] || MESSAGES.DEFAULT[500];
  }
}
