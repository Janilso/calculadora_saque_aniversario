import { Navigate, Route, Routes, BrowserRouter } from 'react-router-dom';
import routes from './routes';
import ROUTES_NAME from './routesName';

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to={ROUTES_NAME.INICIO} replace />} />
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
