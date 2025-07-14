import Home from './pages/Home'
import NavBar from './components/nav-bar/NavBar'
import { ThemeProvider } from '@mui/material/styles';
import theme from './assets/themes/Theme';
import './styles/App.css'

function App() {
  return (
      <ThemeProvider theme={theme}>
        <NavBar />
        <Home />
      </ThemeProvider>
  );
}

export default App;
