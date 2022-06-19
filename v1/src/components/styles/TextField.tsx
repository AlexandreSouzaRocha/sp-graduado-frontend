import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';

const StyledTextField = styled(TextField)(({ theme }) => ({
  input: {
    color: theme.palette.mode === 'dark' ? '#FFF' : '#000',
  },
  boxShadow: 'inherit',
  '&:hover': {
    border: 2,
    borderRadius: 10,
    transition: 'box-shadow .3s',
    boxShadow: '0 0 6px #B765FF',
    borderColor: theme.palette.primary.main,
    float: 'left',
  },
}));

export default StyledTextField;
