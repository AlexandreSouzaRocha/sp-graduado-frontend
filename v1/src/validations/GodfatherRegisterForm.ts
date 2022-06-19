import { DateTime } from 'luxon';
import * as YUP from 'yup';

import CONSTANTS from '../commons/Constants';

export default class GodfatherRegisterFormValidation {
  static getValidationSchema(): any[] {
    const schemaSteps = [
      YUP.object({
        type: YUP.string()
          .required(CONSTANTS.MESSAGES.VALIDATION.TYPE)
          .oneOf(['GODFATHER', 'GRADUATE'], CONSTANTS.MESSAGES.VALIDATION.TYPE),
      }),
      YUP.object({
        name: YUP.string().min(10).required(CONSTANTS.MESSAGES.VALIDATION.NAME),
        documentNumber: YUP.string()
          .min(11, CONSTANTS.MESSAGES.VALIDATION.DOCUMENT_NUMBER.CPF_CNPJ)
          .max(14, CONSTANTS.MESSAGES.VALIDATION.DOCUMENT_NUMBER.CPF_CNPJ)
          .required(CONSTANTS.MESSAGES.VALIDATION.DOCUMENT_NUMBER.CPF_CNPJ),
        birthDate: YUP.date()
          .required(CONSTANTS.MESSAGES.VALIDATION.BIRTH_DATE)
          .test('minAge', CONSTANTS.MESSAGES.VALIDATION.BIRTH_DATE, (value) => {
            if (value) {
              const currentAge: number =
                DateTime.now().setZone(CONSTANTS.DATE.SP_TIMEZONE).year - DateTime.fromJSDate(value).year;
              return currentAge >= CONSTANTS.MINIMUM_AGE;
            }
            return false;
          }),
        monthlyIncome: YUP.number()
          .min(CONSTANTS.GODFATHER.MIN_INCOME_MONTHLY, CONSTANTS.MESSAGES.VALIDATION.MONTHLY_INCOME)
          .required(CONSTANTS.MESSAGES.VALIDATION.MONTHLY_INCOME),
        contacts: YUP.object({
          phoneNumber: YUP.string()
            .min(10, CONSTANTS.MESSAGES.VALIDATION.CONTACTS.PHONE_NUMBER)
            .max(11, CONSTANTS.MESSAGES.VALIDATION.CONTACTS.PHONE_NUMBER)
            .matches(CONSTANTS.REGEX.PHONE, CONSTANTS.MESSAGES.VALIDATION.CONTACTS.PHONE_NUMBER)
            .required(CONSTANTS.MESSAGES.VALIDATION.CONTACTS.PHONE_NUMBER),
          email: YUP.string().email(CONSTANTS.MESSAGES.VALIDATION.EMAIL).required(CONSTANTS.MESSAGES.VALIDATION.EMAIL),
        }),
        reasonWhy: YUP.string()
          .required(CONSTANTS.MESSAGES.VALIDATION.ABOUT)
          .max(200, CONSTANTS.MESSAGES.VALIDATION.ABOUT),
        password: YUP.string()
          .matches(CONSTANTS.REGEX.PASSWORD, CONSTANTS.MESSAGES.VALIDATION.PASSWORD)
          .required(CONSTANTS.MESSAGES.VALIDATION.PASSWORD),
        confirmPassword: YUP.string().oneOf(
          [YUP.ref('password'), null],
          CONSTANTS.MESSAGES.VALIDATION.CONFIRMATION_PASSWORD,
        ),
        type: YUP.string().required(CONSTANTS.MESSAGES.VALIDATION.TYPE).oneOf(['GODFATHER', 'GRADUATE']),
        termsAndCoditionsAccepted: YUP.boolean()
          .default(false)
          .required(CONSTANTS.MESSAGES.VALIDATION.TERMS_AND_CONDITIONS),
      }),
      YUP.object({
        termsAndCoditionsAccepted: YUP.boolean()
          .default(false)
          .required(CONSTANTS.MESSAGES.VALIDATION.TERMS_AND_CONDITIONS),
      }),
    ];
    return schemaSteps;
  }
}
