import { ThemeProvider } from '@mui/material';
import AppRoutes from './routers';
import AppTheme from './theme';

function App() {
    return (
        <ThemeProvider theme={AppTheme}>
            <AppRoutes />
        </ThemeProvider>
    );
}

export default App;
