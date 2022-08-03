import { ptBR } from '@mui/material/locale';
import { alpha, createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
    interface Theme {
        appColors: Record<string, string>;
    }
    interface ThemeOptions {
        appColors: Record<string, string>;
    }
    interface Palette {
        appColors: Record<string, string>;
    }
    interface PaletteOptions {
        appColors: Record<string, string>;
    }
}

const appColors = {
    primary: '#001F3F',
    primaryMedium: '#083358',
    primaryLight: '#0D63A5',
    secondary: '#FFD717',
    white: '#ffff',
};

const AppTheme = createTheme(
    {
        typography: {
            fontFamily: ['"Exo"', 'sans-serif'].join(','),
            allVariants: {
                color: appColors.white,
            },
        },
        palette: {
            mode: 'dark',
            primary: {
                main: appColors.primary,
                contrastText: appColors.white,
            },
            secondary: {
                main: appColors.secondary,
                contrastText: appColors.white,
            },
            text: {
                primary: appColors.primary,
                secondary: appColors.secondary,
                disabled: alpha(appColors.primary, 0.5),
            },

            appColors,
        },
        appColors,
        components: {
            MuiTypography: {},
        },
    },
    ptBR,
);

export default AppTheme;
