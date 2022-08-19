import { ThemeProvider } from '@mui/material';
import Footer from './components/Footer';
import Header from './components/Header';
import AppRoutes from './routers';
import AppTheme from './theme';

function App() {
    return (
        <ThemeProvider theme={AppTheme}>
            <Header />
            <AppRoutes />
            <Footer />
        </ThemeProvider>
    );
}

export default App;
