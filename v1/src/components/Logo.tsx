import React from 'react';
import Typography from '@mui/material/Typography';

import ILogo from '../interfaces/props/ILogo';

const Logo = (props: ILogo): JSX.Element => {
  const { height, width, typographyStyles, alt, imageUrl, textLogo } = props;
  return (
    <>
      <img
        src={imageUrl}
        key={`${textLogo}-avatar`}
        id={`${textLogo}-avatar`}
        alt={alt}
        width={width}
        height={height}
      />
      <Typography id={`${textLogo}-typo`} component="div" sx={typographyStyles}>
        {textLogo}
      </Typography>
    </>
  );
};

export default Logo;
