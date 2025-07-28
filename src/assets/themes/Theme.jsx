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
        allVariants: {
            color: 'white'
        },
        h1: {
            fontSize: '4.5rem',
            fontWeight: '600',
            fontFamily: 'Work Sans, sans-serif',
        },
        h2: {
            fontSize: '3rem',
            fontWeight: '400',
            fontFamily: 'Work Sans, sans-serif',
        },
        h3: {
            fontSize: '2rem',
            fontWeight: '600',
            fontFamily: 'Work Sans, sans-serif',
        },
        h6: {
            fontSize: '1.5rem',
            fontWeight: '400',
            fontFamily: 'Work Sans, sans-serif',
        },
        body1: {
            fontSize: '1.3rem',
            fontFamily: 'Roboto, sans-serif'
        },
        body2: {
            fontSize: '1.1rem',
            fontFamily: 'Roboto, sans-serif'
        }
    }
});

export default theme;