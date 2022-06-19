import IForgotPassword from '../interfaces/IForgotPassword';

export default class ForgotPasswordModel {
  static getInitialValues(): IForgotPassword {
    const values: IForgotPassword = {
      email: '',
    };
    return values;
  }
}
