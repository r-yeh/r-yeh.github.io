import { createTheme } from "@mui/material/styles";

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
            default: '#333333'
        }
    },
    typography: {
        fontFamily: 'Segoe UI',
        h1: {
            fontFamily: 'Segoe UI',
            fontSize: '4rem',
        },
        h2: {
            fontFamily: 'Segoe UI',
            fontSize: '3rem',
        },
        h3: {
            fontFamily: 'Segoe UI',
            fontSize: '2rem',
        },
        h6: {
            fontFamily: 'Segoe UI',
            fontSize: '1.5rem',
        },
        p: {
            fontFamily: 'Segoe UI',
            fontSize: '1.3rem',
        }

    }
});

export default theme;