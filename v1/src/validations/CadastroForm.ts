import * as YUP from 'yup';

import CONSTANTS from '../commons/Constants';

export default class CadastroFormValidation {
  static getValidationSchema(): any {
    const schema = YUP.object({
      email: YUP.string().email(CONSTANTS.MESSAGES.VALIDATION.EMAIL).required(CONSTANTS.MESSAGES.VALIDATION.EMAIL),
      name: YUP.string().min(10).required(CONSTANTS.MESSAGES.VALIDATION.NAME),
    });

    return schema;
  }
}
