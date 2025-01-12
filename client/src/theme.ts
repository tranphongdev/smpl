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
    MuiTextField: {
      styleOverrides: {
        root: {
          // Outlined
          '& .MuiOutlinedInput-root': {
            color: '#262626',
            borderRadius: '14px',
            '& .MuiOutlinedInput-notchedOutline': {
              borderWidth: '1px',
            },
            '&.Mui-focused': {
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: 'primary.main',
                borderWidth: '2px',
              },
            },
            '&:hover:not(.Mui-focused)': {
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: '#262626',
              },
            },
            // Add autofill styling
            '& input:-webkit-autofill': {
              WebkitBoxShadow: '0 0 0 100px #e8f0fe inset',
              WebkitTextFillColor: '#262626',
              caretColor: '#262626',
              fontSize: "16px", 
            },
          },
          '& .MuiInputLabel-outlined': {
            color: '#262626',
            fontWeight: 400,
            '&.Mui-focused': {
              color: 'primary.main',
            },
          },
          '& .MuiOutlinedInput-input ': {
            padding: '16px 12px',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontSize: 16,
          borderRadius: 14,
          height: 48,
        },
        outlined: {
          fontWeight: 400,
          border: "1px solid rgba(0, 0, 0, 0.15)",
          color: "#262626",
        },
      },
    },
    MuiSelect: {
      styleOverrides:{
        root:{
          borderRadius: 14,
          fontSize: 14,
          height: 44
        }
      }
    },
    MuiList:{
      styleOverrides:{
        root:{
          padding: 5,
          color: '#262626',
        }
      }
    },
    MuiPaper:{
      styleOverrides:{
        root:{
          borderRadius: 14,
          marginTop: 6,
          boxShadow: '0px 1px 2px 0px rgba(0, 0, 0, 0.30), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)',
        }
      }
    },
    MuiSvgIcon:{
      styleOverrides:{
        root:{
          color: "#262626"
        }
      }
    }
  },
});

export default theme;
