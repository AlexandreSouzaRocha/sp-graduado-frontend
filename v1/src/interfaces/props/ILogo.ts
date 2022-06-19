import { SxProps, Theme } from '@mui/material';

export default interface ILogo {
  width: number;
  height: number;
  typographyStyles: SxProps<Theme>;
  imageUrl: string;
  alt: string;
  textLogo: string;
}
