import IGraduate from '../interfaces/IGraduate';
import CollegeModel from './College';
import CourseModel from './Course';
import DateTime from '../commons/DateTime';
import CONSTANTS from '../commons/Constants';

export default class GraduateModel {
  static getInitialValues(): IGraduate {
    const initialValues: IGraduate = {
      name: '',
      documentNumber: '',
      birthDate: new Date().toISOString(),
      incomeFamily: 0,
      contacts: {
        phoneNumber: '',
        email: '',
      },
      password: '',
      confirmPassword: '',
      about: '',
      course: CourseModel.getInitialValues(),
      college: CollegeModel.getInitialValues(),
      termsAndCoditionsAccepted: false,
      type: '',
    };
    return initialValues;
  }

  static normalizeToBackendBody(graduate: IGraduate): any {
    return {
      name: graduate.name,
      email: graduate.contacts.email,
      password: graduate.password,
      phone: graduate.contacts.phoneNumber,
      income: graduate.incomeFamily,
      document: graduate.documentNumber,
      birth_date: DateTime.fromJsToFormat(graduate.birthDate, CONSTANTS.DATE.US),
      description: graduate.about,
    };
  }
}
