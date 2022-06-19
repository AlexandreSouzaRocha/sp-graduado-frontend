import IResponseParams from '../interfaces/commons/IResponseParamas';
import IRequestAdapter from '../interfaces/adapters/IRequestAdapter';
import AxiosService from '../services/Axios';
import CONFIG from '../config';
import CONSTANTS from '../commons/Constants';
import Exception from '../commons/Exception';
import Utils from '../commons/Utils';

class CollegeEntity {
  private readonly requestService: IRequestAdapter;

  constructor() {
    this.requestService = AxiosService;
  }

  async getAll(): Promise<IResponseParams> {
    try {
      const collegeResponse: IResponseParams = await this.requestService.execute({
        baseUrl: String(CONFIG.BACKEND.URL),
        path: CONSTANTS.PATH.COLLEGES.GET,
        headers: Utils.defaultHeaders(),
        method: CONSTANTS.METHOD.GET,
      });
      return collegeResponse;
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

  async getCoursesByCollegeId(collegeId: number, page = 1): Promise<IResponseParams> {
    try {
      const graduateResponse: IResponseParams = await this.requestService.execute({
        baseUrl: String(CONFIG.BACKEND.URL),
        path: CONSTANTS.PATH.COLLEGES.GET_BY_ID.replace('{collegeId}', String(collegeId)),
        headers: Utils.defaultHeaders(),
        method: CONSTANTS.METHOD.GET,
        queryString: { page },
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
}

export default new CollegeEntity();
