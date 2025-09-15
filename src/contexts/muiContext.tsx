import { createTheme } from '@mui/material/styles';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { ReactNode, useContext } from 'react';
import { ThemeContext } from './ThemeContext';

export const getMuiTheme = (mode: 'light' | 'dark') =>
  createTheme({
    palette: { mode },
    components: {
      MuiSelect: {
        styleOverrides: {
          root: {
            minWidth: '160px',
            height: '46px',
            backgroundColor: mode === 'dark' ? '#161827' : '#fff',
            color: mode === 'dark' ? '#F1F2F9' : '#313237',
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: mode === 'dark' ? '#3B3E4A' : '#E2E6E9',
              transition: 'border-color 0.3s ease',
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: mode === 'dark' ? '#A378FF' : '#777d82',
            },
          },
          icon: {
            color: mode === 'dark' ? '#F1F2F9' : '#313237',
          },
        },
      },
      MuiMenuItem: {
        styleOverrides: {
          root: {
            '&:hover': {
              backgroundColor: mode === 'dark' ? '#3B3E4A' : '#E2E6E9',
            },
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundColor: mode === 'dark' ? '#161827' : '#f5f5f5',
          },
        },
      },
    },
  });

  type Props = {
    children: ReactNode;
  };

export const MUIThemeProviderWrapper = ({ children }: Props) => {
  const { theme } = useContext(ThemeContext);

  const muiTheme = getMuiTheme(theme);

  return <MuiThemeProvider theme={muiTheme}>{children}</MuiThemeProvider>;
};
