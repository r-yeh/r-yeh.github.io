import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import NavBar from './components/nav-bar/NavBar';
import { ThemeProvider } from '@mui/material/styles';
import theme from './assets/themes/Theme';
import './styles/App.css'

function App() {
  return (
      <HashRouter>
          <ThemeProvider theme={theme}>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/about" element={<About />} />
            </Routes>
          </ThemeProvider>
      </HashRouter>
  );
}

export default App;
