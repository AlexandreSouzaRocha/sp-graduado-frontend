import React from 'react';

import ICourseContext from '../../interfaces/ICourseContext';

const courseContextInitialValues: ICourseContext = {
  openDialog: false,
  setOpenDialog: (): void => {},
};

const CourseDialogContext: React.Context<ICourseContext> = React.createContext(
  courseContextInitialValues as ICourseContext,
);

export default CourseDialogContext;
