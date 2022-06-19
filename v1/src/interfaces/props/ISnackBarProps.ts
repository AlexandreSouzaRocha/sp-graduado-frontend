import { AlertColor } from '@mui/material/Alert';

export default interface ISnackBarProps {
  hasOpen: boolean;
  text: string;
  severity: AlertColor;
  closeSnackbar?: () => void;
}
