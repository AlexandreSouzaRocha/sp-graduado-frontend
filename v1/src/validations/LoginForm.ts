import * as YUP from 'yup';

import CONSTANTS from '../commons/Constants';

export default class LoginFormValidation {
  static getValidationSchema(): any {
    const schema = YUP.object({
      email: YUP.string().email(CONSTANTS.MESSAGES.VALIDATION.EMAIL).required(CONSTANTS.MESSAGES.VALIDATION.EMAIL),
      password: YUP.string()
        .min(8, CONSTANTS.MESSAGES.VALIDATION.PASSWORD)
        .required(CONSTANTS.MESSAGES.VALIDATION.PASSWORD)
        .matches(CONSTANTS.REGEX.PASSWORD, CONSTANTS.MESSAGES.VALIDATION.PASSWORD),
    });

    return schema;
  }
}
