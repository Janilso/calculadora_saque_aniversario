import { Route, Routes, BrowserRouter } from 'react-router-dom';
import routes from './routes';

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                {routes.map((route) => (
                    <Route
                        key={route.path}
                        path={route.path}
                        caseSensitive={route.caseSensitive}
                        element={<route.component />}
                    />
                ))}
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;
