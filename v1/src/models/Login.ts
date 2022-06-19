import ILogin from '../interfaces/ILogin';

export default class LoginModel {
  static getInitialValues(): ILogin {
    const values: ILogin = {
      email: '',
      password: '',
    };
    return values;
  }

  static normalizeToBackendBody(login: ILogin): any {
    return {
      email: login.email,
      password: login.password,
    };
  }
}
