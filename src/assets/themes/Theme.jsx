import {createTheme} from "@mui/material/styles";

const header_font = '"Exo 2", sans-serif';
const body_font = '"Inter", sans-serif';

const theme = createTheme({
    palette: {
        primary: {
            main: '#1D1A2F'
        },
        secondary: {
            main: '#734F9A',
            light: '#965FD4',
            dark: '#3A284D'
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
        fontFamily: body_font,
        allVariants: {
            color: 'white'
        },
        h1: {
            fontSize: '4.5rem',
            fontWeight: '600',
            fontFamily: header_font,
        },
        h2: {
            fontSize: '3rem',
            fontWeight: '400',
            fontFamily: header_font,
        },
        h3: {
            fontSize: '2rem',
            fontWeight: '600',
            fontFamily: header_font,
        },
        h6: {
            fontSize: '1.5rem',
            fontWeight: '400',
            fontFamily: header_font,
        },
        body1: {
            fontSize: '1.3rem',
            fontFamily: body_font,
        },
        body2: {
            fontSize: '1.1rem',
            fontFamily: body_font,
        },
        body3: {
            fontSize: '0.9rem',
            fontFamily: body_font,
        }
    }
});

export default theme;