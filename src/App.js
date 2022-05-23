import { useSelector } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, StyledEngineProvider } from '@mui/material';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// routing
import Routes from 'routes';

// defaultTheme
import themes from 'themes';

// project imports

import React from 'react';

// ==============================|| APP ||============================== //

const App = () => {
    const customization = useSelector((state) => state.customization);

    return (
        <React.Fragment>
            <StyledEngineProvider injectFirst>
                <ThemeProvider theme={themes(customization)}>
                    <CssBaseline />

                    <Routes />
                </ThemeProvider>
            </StyledEngineProvider>
            <ToastContainer />
        </React.Fragment>
    );
};

export default App;
