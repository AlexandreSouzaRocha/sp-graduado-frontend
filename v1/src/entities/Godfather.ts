import IResponseParams from '../interfaces/commons/IResponseParamas';
import IRequestAdapter from '../interfaces/adapters/IRequestAdapter';
import AxiosService from '../services/Axios';
import Exception from '../commons/Exception';
import IGodfather from '../interfaces/IGodfather';
import GodfatherModel from '../models/Godfather';
import CONFIG from '../config';
import CONSTANTS from '../commons/Constants';
import Utils from '../commons/Utils';
import ExceptionHandler from '../commons/ExceptionHandler';

class GodfatherEntity {
  private readonly requestService: IRequestAdapter;

  constructor() {
    this.requestService = AxiosService;
  }

  async create(godfather: IGodfather): Promise<IResponseParams> {
    try {
      const requestBody = GodfatherModel.normalizeToBackendBody(godfather);
      const godafatherResponse: IResponseParams = await this.requestService.execute({
        baseUrl: String(CONFIG.BACKEND.URL),
        path: CONSTANTS.PATH.SPONSORS.POST,
        body: requestBody,
        headers: Utils.defaultHeaders(),
        method: CONSTANTS.METHOD.POST,
      });

      return godafatherResponse;
    } catch (error) {
      if (error instanceof Exception) {
        ExceptionHandler.throw(
          error,
          CONSTANTS.PATH.SPONSORS.POST,
          CONSTANTS.METHOD.POST,
          error.message,
          error.statusCode,
          error.type,
        );
      }

      return ExceptionHandler.throw(
        error,
        CONSTANTS.PATH.SPONSORS.POST,
        CONSTANTS.METHOD.POST,
        CONSTANTS.MESSAGES.DEFAULT[500],
        CONSTANTS.HTTP.STATUS.INTERNAL_SERVER_ERROR,
        CONSTANTS.EXCEPTIONS.UNEXPECTED,
      );
    }
  }

  async patronize(godfatherId: number | null, graduateId: number): Promise<IResponseParams> {
    try {
      const patronizeResponse: IResponseParams = await this.requestService.execute({
        baseUrl: String(CONFIG.BACKEND.URL),
        path: CONSTANTS.PATH.SPONSORS.PUT.replace('{sponsorId}', String(godfatherId)),
        queryString: {
          studentId: graduateId,
        },
        headers: Utils.defaultHeaders(),
        method: CONSTANTS.METHOD.PUT,
      });

      return patronizeResponse;
    } catch (error) {
      if (error instanceof Exception) {
        ExceptionHandler.throw(
          error,
          CONSTANTS.PATH.SPONSORS.POST,
          CONSTANTS.METHOD.PUT,
          error.message,
          error.statusCode,
          error.type,
        );
      }

      return ExceptionHandler.throw(
        error,
        CONSTANTS.PATH.SPONSORS.POST,
        CONSTANTS.METHOD.PUT,
        CONSTANTS.MESSAGES.DEFAULT[500],
        CONSTANTS.HTTP.STATUS.INTERNAL_SERVER_ERROR,
        CONSTANTS.EXCEPTIONS.UNEXPECTED,
      );
    }
  }

  async deleteAccount(godfatherId: number): Promise<IResponseParams> {
    try {
      const patronizeResponse: IResponseParams = await this.requestService.execute({
        baseUrl: String(CONFIG.BACKEND.URL),
        path: CONSTANTS.PATH.SPONSORS.DELETE.replace('{sponsorId}', String(godfatherId)),
        headers: Utils.defaultHeaders(),
        method: CONSTANTS.METHOD.DELETE,
      });

      return patronizeResponse;
    } catch (error) {
      if (error instanceof Exception) {
        ExceptionHandler.throw(
          error,
          CONSTANTS.PATH.SPONSORS.POST,
          CONSTANTS.METHOD.DELETE,
          error.message,
          error.statusCode,
          error.type,
        );
      }

      return ExceptionHandler.throw(
        error,
        CONSTANTS.PATH.SPONSORS.POST,
        CONSTANTS.METHOD.DELETE,
        CONSTANTS.MESSAGES.DEFAULT[500],
        CONSTANTS.HTTP.STATUS.INTERNAL_SERVER_ERROR,
        CONSTANTS.EXCEPTIONS.UNEXPECTED,
      );
    }
  }
}

export default new GodfatherEntity();
