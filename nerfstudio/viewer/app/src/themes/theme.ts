import { createTheme } from '@mui/material/styles';

export const appTheme = createTheme({
  palette: {
    primary: { main: '#137191' },
    secondary: { main: '#4a94b5' },
    text: {
      primary: '#137191',
      secondary: '#4a94b5',
      disabled: '#555555',
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: '#222831',
        },
      },
    },
    MuiIcon: {
      styleOverrides: {
        root: {
          color: '#137191',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& label': {
            color: '#999999',
          },
          '& label.Mui-focused': {
            color: '#FFD369',
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#555555',
            },
            '&:hover fieldset': {
              borderColor: '#dddddd',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#FFD369',
            },
          },
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          '&.Mui-disabled': {
            color: '#137191',
            backgroundColor: '#dae9ec',
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: '#137191',
          backgroundColor: '#dae9ec',
          '&:hover': {
            color: '#dae9ec',
            backgroundColor: '#137191',
          },
        },
      },
    },

    MuiTab: {
      styleOverrides: {
        root: {
          fontSize: '.8rem',
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          backgroundColor: '#555555',
        },
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          backgroundColor: '#dae9ec',
          '&:hover': {
            color: '#137191',
            backgroundColor: '#555555',
          },
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        root: {
          '&:before': {
            borderBottom: '2px solid #555555',
          },
          '&:after': {
            borderBottom: '2px solid #FFD369',
          },
        },
      },
    },
    MuiToggleButtonGroup: {
      styleOverrides: {
        root: {
          color: '#137191',
          backgroundColor: '#dae9ec',
          '&.Mui-disabled': {
            color: '#137191',
            backgroundColor: '#dae9ec',
          },
        },
      },
    },
    MuiToggleButton: {
      styleOverrides: {
        root: {
          color: '#137191',
          backgroundColor: '#dae9ec',
          '&.Mui-selected': {
            color: '#dae9ec',
            backgroundColor: '#137191',
          },
          '&.Mui-disabled': {
            color: '#137191',
            backgroundColor: '#ebeff0',
          },
        },
      },
    },
    MuiList: {
      styleOverrides: {
        padding: {
          paddingTop: 4,
          paddingBottom: 4,
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          '& .MuiAccordionSummary-content': {
            margin: '0px',
          },
          '& .MuiAccordionSummary-content.Mui-expanded': {
            margin: '0px',
          },
        },
      },
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          paddingTop: '4px',
          paddingBottom: '8px',
        },
      },
    },
  },
});
