import ICollege from '../interfaces/ICollege';

export default class CollegeModel {
  static getInitialValues(): ICollege {
    const college: ICollege = {
      id: 0,
      name: '',
      city: '',
    };
    return college;
  }
}
