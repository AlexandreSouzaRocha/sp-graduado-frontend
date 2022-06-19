export default interface IPerson {
  type: string;
  name: string;
  documentNumber: string;
  birthDate: string;
  contacts: {
    phoneNumber: string;
    email: string;
  };
  password: string;
  confirmPassword: string;
  termsAndCoditionsAccepted?: boolean;
}
