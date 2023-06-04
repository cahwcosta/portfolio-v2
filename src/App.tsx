import { ThemeProvider } from 'styled-components';
import Home from './pages/home';
import { GlobalStyle } from './styles/global';
import theme from './styles/theme';
import GSAPPlugins from './components/GSAPPlugins';

function App() {
  return (
    <div>
      <GSAPPlugins/>
      <ThemeProvider theme={theme}>
        <Home/>
        <GlobalStyle/>
      </ThemeProvider>
    </div>
  );
}

export default App;
