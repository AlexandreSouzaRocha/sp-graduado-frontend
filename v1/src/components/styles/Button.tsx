import { styled } from '@mui/material';
import Button from '@mui/material/Button';

const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: 5,
  backgroundColor: theme.palette.primary.main,
}));

export default StyledButton;
