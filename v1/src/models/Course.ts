import ICourse from '../interfaces/ICourse';

export default class CourseModel {
  static getInitialValues(): ICourse {
    const course: ICourse = {
      id: 0,
      name: '',
      semesters: 0,
      period: '',
      modality: '',
      category: '',
    };
    return course;
  }
}
