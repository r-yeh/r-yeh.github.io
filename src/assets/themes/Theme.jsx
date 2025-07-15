import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: '#222222'
        },
        secondary: {
            main: '#7180AC'
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