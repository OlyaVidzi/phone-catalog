import { createTheme } from '@mui/material/styles';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { ReactNode, useContext } from 'react';
import { ThemeContext } from './ThemeContext';

export const getMuiTheme = (mode: 'light' | 'dark') =>
  createTheme({
    palette: { mode },
  });

  type Props = {
    children: ReactNode;
  };

export const MUIThemeProvider = ({ children }: Props) => {
  const { theme } = useContext(ThemeContext);

  const muiTheme = getMuiTheme(theme);

  return <MuiThemeProvider theme={muiTheme}>{children}</MuiThemeProvider>;
};
