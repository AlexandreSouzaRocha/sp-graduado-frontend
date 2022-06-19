import { SxProps, Theme } from '@mui/material';

export default interface ITextField {
  id: string;
  label: string;
  variantType: 'outlined' | 'filled' | 'standard' | undefined;
  isRequired?: boolean;
  disabled?: boolean;
  materialHref?: string;
  hasError?: boolean;
  errorMessage?: string;
  hasSelect?: boolean;
  selectData?: Array<any>;
  multiline?: boolean;
  maxRows?: number;
  config: SxProps<Theme>;
  classes?: any;
}
