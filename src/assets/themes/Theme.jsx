import {createTheme} from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: '#1D1A2F'
        },
        secondary: {
            main: '#734F9A',
            light: '#965FD4'
        },
        tertiary: {
            main: '#8BD450'
        },
        background: {
            default: '#333333',
            paper: '#333333'
        }
    },
    typography: {
        fontFamily: 'Segoe UI',
        allVariants: {
            color: 'white'
        },
        h1: {
            fontSize: '4.5rem',
        },
        h2: {
            fontSize: '3rem',
        },
        h3: {
            fontSize: '2rem',
        },
        h6: {
            fontSize: '1.5rem',
        },
        body1: {
            fontSize: '1.3rem',
        },
        body2: {
            fontSize: '1.1rem',
        }
    }
});

export default theme;