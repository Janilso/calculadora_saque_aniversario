import { ptBR } from '@mui/material/locale';
import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
    interface Palette {
        appColors: Record<string, string>;
    }
    interface PaletteOptions {
        appColors?: Record<string, string>;
    }
}

const appColors = {
    primaryColor: '#5A6FFF',
    secondaryColor: '#FCFC30',
    primaryTextColor: 'rgba(255,255,255,.9)',
    secondaryLightTextColor: '#ccc',
    secondaryColorContrastText: '#2e2e2e',
    primaryHeaderColor: '#edf0f4',
    primaryYellow: '#FCEE4F',
    secondaryYellow: '#FFFA72',
    primaryBlue: '#5A6FFF',
    secondaryBlue: '#5A6FFF',
    terciaryBlue: '#95B9D9',
    white: '#ffff',
    darkBlue: '#3A4ABA',
    black: '#000000',
    lightBlack: 'rgba(0, 0, 0, 0.85)',
};

const AppTheme = createTheme(
    {
        palette: {
            mode: 'dark',
            primary: {
                main: appColors.primaryColor,
                contrastText: appColors.primaryTextColor,
            },
            secondary: {
                main: appColors.secondaryColor,
                contrastText: appColors.secondaryColorContrastText,
            },
            text: {
                primary: appColors.secondaryColorContrastText,
                secondary: appColors.primaryColor,
                disabled: appColors.secondaryLightTextColor,
            },
            appColors,
        },
    },
    ptBR,
);

export default AppTheme;
