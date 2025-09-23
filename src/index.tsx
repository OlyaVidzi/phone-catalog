import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter as Router } from 'react-router-dom';
import App from './App';
import { Provider } from 'react-redux';
import { store } from "./store/store";
import { ThemeProvider } from './contexts/ThemeContext';
import { MUIThemeProvider } from './contexts/muiContext';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <MUIThemeProvider>
          <Router>
            <App />
          </Router>
        </MUIThemeProvider>
      </ThemeProvider>
    </Provider>
  </StrictMode>,
);
