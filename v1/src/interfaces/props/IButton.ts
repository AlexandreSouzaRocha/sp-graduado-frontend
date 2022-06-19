import { Theme } from '@emotion/react';
import { SxProps } from '@mui/material';
import React from 'react';

export default interface IPrimaryButtonProps {
  size: 'small' | 'medium' | 'large' | undefined;
  variantType: 'text' | 'contained' | 'outlined' | undefined;
  color: 'primary' | 'secondary';
  config: SxProps<Theme>;
  disabled?: boolean;
  materialHref?: string;
  text?: string;
  classes?: any;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}
