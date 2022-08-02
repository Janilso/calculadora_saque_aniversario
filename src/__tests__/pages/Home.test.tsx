import { ThemeProvider } from '@mui/material';
import { render, screen } from '@testing-library/react';
import Home from '../../pages/Home';
import AppTheme from '../../theme';

describe('test page <Home />', () => {
    it('should work', () => {
        render(
            <ThemeProvider theme={AppTheme}>
                <Home />
            </ThemeProvider>,
        );
        const linkElement = screen.getByText(/Home/i);
        expect(linkElement).toBeInTheDocument();
    });
});
