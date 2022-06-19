import ICadastro from '../interfaces/ICadastro';

export default class CadastroModel {
  static getInitialValues(): ICadastro {
    const values: ICadastro = {
      email: '',
      name: '',
    };
    return values;
  }

  static normalizeToBackendBody(Cadastro: ICadastro): any {
    return {
      email: Cadastro.email,
      name: Cadastro.name,
    };
  }
}
