import IResponseParams from '../interfaces/commons/IResponseParamas';
import IRequestAdapter from '../interfaces/adapters/IRequestAdapter';
import AxiosService from '../services/Axios';
import IGraduate from '../interfaces/IGraduate';
import GraduateModel from '../models/Graduate';
import CONFIG from '../config';
import CONSTANTS from '../commons/Constants';
import Exception from '../commons/Exception';
import Utils from '../commons/Utils';
import ExceptionHandler from '../commons/ExceptionHandler';

class GraduateEntity {
  private readonly requestService: IRequestAdapter;

  constructor() {
    this.requestService = AxiosService;
  }

  async create(graduate: IGraduate): Promise<IResponseParams> {
    try {
      const requestBody = GraduateModel.normalizeToBackendBody(graduate);
      const { data: graduateResponse }: IResponseParams = await this.requestService.execute({
        baseUrl: String(CONFIG.BACKEND.URL),
        path: CONSTANTS.PATH.STUDENDS.POST,
        body: requestBody,
        headers: Utils.defaultHeaders(),
        method: CONSTANTS.METHOD.POST,
      });

      const associationResponse: IResponseParams = await this.associateToCourse(
        graduateResponse.id,
        graduate.course.id,
      );

      return {
        data: { ...associationResponse.data, ...graduateResponse.data },
        statusCode: associationResponse.statusCode,
        statusText: associationResponse.statusText,
      };
    } catch (error) {
      if (error instanceof Exception) {
        ExceptionHandler.throw(
          error,
          CONSTANTS.PATH.STUDENDS.POST,
          CONSTANTS.METHOD.POST,
          error.message,
          error.statusCode,
          error.type,
        );
      }

      return ExceptionHandler.throw(
        error,
        CONSTANTS.PATH.STUDENDS.POST,
        CONSTANTS.METHOD.POST,
        CONSTANTS.MESSAGES.DEFAULT[500],
        CONSTANTS.HTTP.STATUS.INTERNAL_SERVER_ERROR,
        CONSTANTS.EXCEPTIONS.UNEXPECTED,
      );
    }
  }

  async getById(graduateId: number): Promise<IResponseParams> {
    try {
      const graduateResponse: IResponseParams = await this.requestService.execute({
        baseUrl: String(CONFIG.BACKEND.URL),
        path: CONSTANTS.PATH.STUDENDS.GET_BY_ID.replace('{studentId}', String(graduateId)),
        headers: Utils.defaultHeaders(),
        method: CONSTANTS.METHOD.GET,
      });
      return graduateResponse;
    } catch (error) {
      if (error instanceof Exception) {
        ExceptionHandler.throw(
          error,
          CONSTANTS.PATH.STUDENDS.POST,
          CONSTANTS.METHOD.GET_BY_ID,
          error.message,
          error.statusCode,
          error.type,
        );
      }

      return ExceptionHandler.throw(
        error,
        CONSTANTS.PATH.STUDENDS.POST,
        CONSTANTS.METHOD.GET_BY_ID,
        CONSTANTS.MESSAGES.DEFAULT[500],
        CONSTANTS.HTTP.STATUS.INTERNAL_SERVER_ERROR,
        CONSTANTS.EXCEPTIONS.UNEXPECTED,
      );
    }
  }

  async getAllUnpatronized(page = 1): Promise<IResponseParams> {
    try {
      const graduateResponse: IResponseParams = await this.requestService.execute({
        baseUrl: String(CONFIG.BACKEND.URL),
        path: CONSTANTS.PATH.STUDENDS.GET,
        headers: Utils.defaultHeaders(),
        method: CONSTANTS.METHOD.GET,
        queryString: { sponsor_id: CONSTANTS.DEFAULT_SPONSOR_ID, page },
      });
      return graduateResponse;
    } catch (error) {
      if (error instanceof Exception) {
        throw error;
      }

      throw new Exception({
        error,
        message: CONSTANTS.MESSAGES.DEFAULT[500],
        statusCode: CONSTANTS.HTTP.STATUS.INTERNAL_SERVER_ERROR,
        type: CONSTANTS.EXCEPTIONS.UNEXPECTED,
      });
    }
  }

  async getAllPatronized(godfatherId: number, page = 1): Promise<IResponseParams> {
    try {
      const graduateResponse: IResponseParams = await this.requestService.execute({
        baseUrl: String(CONFIG.BACKEND.URL),
        path: CONSTANTS.PATH.STUDENDS.GET,
        headers: Utils.defaultHeaders(),
        method: CONSTANTS.METHOD.GET,
        queryString: { sponsor_id: godfatherId, page },
      });
      return graduateResponse;
    } catch (error) {
      if (error instanceof Exception) {
        throw error;
      }

      throw new Exception({
        error,
        message: CONSTANTS.MESSAGES.DEFAULT[500],
        statusCode: CONSTANTS.HTTP.STATUS.INTERNAL_SERVER_ERROR,
        type: CONSTANTS.EXCEPTIONS.UNEXPECTED,
      });
    }
  }

  async deleteAccount(graduateId: number): Promise<IResponseParams> {
    try {
      const graduateResponse: IResponseParams = await this.requestService.execute({
        baseUrl: String(CONFIG.BACKEND.URL),
        path: CONSTANTS.PATH.STUDENDS.DELETE.replace('{studentId}', String(graduateId)),
        headers: Utils.defaultHeaders(),
        method: CONSTANTS.METHOD.DELETE,
      });
      return graduateResponse;
    } catch (error) {
      if (error instanceof Exception) {
        ExceptionHandler.throw(
          error,
          CONSTANTS.PATH.STUDENDS.POST,
          CONSTANTS.METHOD.DELETE,
          error.message,
          error.statusCode,
          error.type,
        );
      }

      return ExceptionHandler.throw(
        error,
        CONSTANTS.PATH.STUDENDS.POST,
        CONSTANTS.METHOD.DELETE,
        CONSTANTS.MESSAGES.DEFAULT[500],
        CONSTANTS.HTTP.STATUS.INTERNAL_SERVER_ERROR,
        CONSTANTS.EXCEPTIONS.UNEXPECTED,
      );
    }
  }

  private async associateToCourse(graduateId: number, courseId: number): Promise<IResponseParams> {
    return this.requestService.execute({
      baseUrl: String(CONFIG.BACKEND.URL),
      path: CONSTANTS.PATH.STUDENDS.PUT.replace('{studentId}', String(graduateId)),
      headers: Utils.defaultHeaders(),
      method: CONSTANTS.METHOD.PUT,
      queryString: { courseId },
    });
  }
}

export default new GraduateEntity();
