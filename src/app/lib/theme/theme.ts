// app/theme/theme.ts
import { createTheme } from '@mui/material/styles';

// You can customize palette, typography, breakpoints, etc.
const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1586FD',
    },
    secondary: {
      main: '#666f73',
    },
  },
  typography: {
    body1:{
        color:'#0B1134CC'
    },
    fontFamily: ['"Inter"', 'sans-serif'].join(','),
  },

  components:{
     MuiButton:{
        defaultProps: {
            variant:'contained'
        },
        styleOverrides:{
            root:{
                padding:'8px 24px'
            }
        }
     },
     MuiContainer:{
        defaultProps:{
            maxWidth:'lg',
        }
     }
  },
});
theme.shadows[1]="0px 5px 22px lightgray"

export default theme;
