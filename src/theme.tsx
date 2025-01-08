import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
  cssVariables: true,
  palette: {
    primary: {
      main: '#008C28',
      dark: '#005418',
    },
    secondary: {
      main: '#E6F8EB',
    },
    error: {
      main: '#BF3A3B',
    },
  },
  typography: {
    fontFamily: `"Inter", serif`,
  },
  components: {
    MuiTableHead: {
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundColor: theme.palette.primary.dark,
          height: 56,
        }),
      },
    },
    MuiTableContainer: {
      styleOverrides: {
        root: {
          borderRadius: 14,
          border: `1px solid #00000026`,
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          textAlign: 'center',
          color: '#262626',
          fontSize: 14,
          fontWeight: 400,
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: ({ theme }) => ({
          '&:hover': {
            backgroundColor: theme.palette.secondary.main,
          },
          borderRadius: 14,
          fontSize: 14,
          height: 40,
        }),
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          '&:hover': {
            backgroundColor: theme.palette.secondary.main,
          },
        }),
      },
    },
  },
});

export default theme;
