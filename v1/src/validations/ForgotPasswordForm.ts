import * as YUP from 'yup';

import CONSTANTS from '../commons/Constants';

export default class ForgotPasswordFormValidation {
  static getValidationSchema(): any {
    const schema = YUP.object({
      email: YUP.string().email(CONSTANTS.MESSAGES.VALIDATION.EMAIL).required(CONSTANTS.MESSAGES.VALIDATION.EMAIL),
    });

    return schema;
  }
}
