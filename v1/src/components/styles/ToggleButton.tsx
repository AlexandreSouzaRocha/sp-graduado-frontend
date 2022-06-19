import ToggleButton from '@mui/material/ToggleButton';
import { styled } from '@mui/material';

const StyledToggleButton = styled(ToggleButton)(({ theme }) => ({
  border: 0,
  padding: 10,
  '&.Mui-selected': {
    background: theme.palette.primary.main,
    borderRadius: 5,
    transition: 'box-shadow .3s',
    boxShadow: '0 0 6px #000',
    float: 'left',
  },
  '&:hover': {
    background: theme.palette.mode === 'dark' ? '#B765FF' : theme.palette.background.paper,
    borderRadius: 5,
    transition: 'box-shadow .3s',
    boxShadow: '0 0 11px #B765FF',
    float: 'left',
    filter: theme.palette.mode === 'dark' ? 'saturate(1.4)' : 'saturate(1)',
    '&.Mui-selected': {
      background: '#B765FF',
      borderRadius: 5,
      transition: 'box-shadow .5s',
      boxShadow: '0 0 6px #B765FF',
      float: 'left',
    },
  },
}));

export default StyledToggleButton;
