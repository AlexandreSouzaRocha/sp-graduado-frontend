import IResponseParams from '../interfaces/commons/IResponseParamas';
import IRequestAdapter from '../interfaces/adapters/IRequestAdapter';
import AxiosService from '../services/Axios';
import CONSTANTS from '../commons/Constants';
import CONFIG from '../config';
import LoginModel from '../models/Login';
import ILogin from '../interfaces/ILogin';
import Exception from '../commons/Exception';
import Utils from '../commons/Utils';
import ExceptionHandler from '../commons/ExceptionHandler';

class LoginEntity {
  private readonly requestService: IRequestAdapter;

  constructor() {
    this.requestService = AxiosService;
  }

  async singIn(login: ILogin): Promise<IResponseParams> {
    try {
      const requestBody = LoginModel.normalizeToBackendBody(login);
      const loginResponse: IResponseParams = await this.requestService.execute({
        baseUrl: String(CONFIG.BACKEND.URL),
        path: CONSTANTS.PATH.LOGIN.POST,
        body: requestBody,
        headers: Utils.defaultHeaders(),
        method: CONSTANTS.METHOD.POST,
      });

      return loginResponse;
    } catch (error) {
      if (error instanceof Exception) {
        ExceptionHandler.throw(
          error,
          CONSTANTS.PATH.LOGIN.POST,
          CONSTANTS.METHOD.POST,
          error.message,
          error.statusCode,
          error.type,
        );
      }

      return ExceptionHandler.throw(
        error,
        CONSTANTS.PATH.LOGIN.POST,
        CONSTANTS.METHOD.POST,
        CONSTANTS.MESSAGES.DEFAULT[500],
        CONSTANTS.HTTP.STATUS.INTERNAL_SERVER_ERROR,
        CONSTANTS.EXCEPTIONS.UNEXPECTED,
      );
    }
  }
}

export default new LoginEntity();
