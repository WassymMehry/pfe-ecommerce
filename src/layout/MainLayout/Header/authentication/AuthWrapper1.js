// material-ui
import { styled } from '@mui/material/styles';
import colors from 'assets/scss/_themes-vars.module.scss';
// ==============================|| AUTHENTICATION 1 WRAPPER ||============================== //
const color = colors;
const AuthWrapper1 = styled('div')(({ theme }) => ({
    backgroundColor: color.grey100,
    minHeight: '100vh'
}));

export default AuthWrapper1;
