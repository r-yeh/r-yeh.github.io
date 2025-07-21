import {HashRouter, Routes, Route} from 'react-router-dom';
import {ThemeProvider} from '@mui/material/styles';

import theme from './assets/themes/Theme';
import './styles/App.css'
import Home from './pages/Home';
import Experience from "./pages/Experience/index.jsx";
import Projects from './pages/Projects';
import About from './pages/About';
import NavBar from './components/nav-bar/NavBar';

function App() {
    return (
        <HashRouter>
            <ThemeProvider theme={theme}>
                <NavBar/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/experience" element={<Experience/>}/>
                    <Route path="/projects" element={<Projects/>}/>
                    <Route path="/about" element={<About/>}/>
                </Routes>
            </ThemeProvider>
        </HashRouter>
    );
}

export default App;
