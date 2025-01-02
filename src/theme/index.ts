import { ptBR } from '@mui/material/locale';
import { alpha, createTheme } from '@mui/material/styles';
import { CSSProperties } from 'react';

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
        appColors?: Record<string, string>;
    }

    interface TypographyVariants {
        h2semibold: CSSProperties;
    }
    interface TypographyVariantsOptions {
        h2semibold?: CSSProperties;
    }
}

declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
        h2semibold: true;
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
                fontFamily: ['"Exo"', 'sans-serif'].join(','),
            },
            h2: {
                fontSize: 28,
                fontWeight: 400,
            },
            h3: {
                fontSize: 20,
                fontWeight: 400,
            },
            h2semibold: {
                fontFamily: ['"Exo"', 'sans-serif'].join(','),
                color: appColors.white,
                fontSize: 28,
                fontWeight: 600,
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
            MuiTypography: {
                defaultProps: {
                    variant: 'body2',
                },
            },
            MuiTextField: {
                defaultProps: {
                    variant: 'outlined',
                },
                styleOverrides: {
                    root: {
                        '&:hover .MuiFormLabel-root': {
                            color: appColors.primary,
                        },
                    },
                },
            },
            MuiOutlinedInput: {
                styleOverrides: {
                    notchedOutline: {
                        borderColor: appColors.primaryLight,
                        '& legend': {
                            fontSize: '0.65rem',
                        },
                    },
                },
            },
            MuiFormLabel: {
                styleOverrides: {
                    root: {
                        fontSize: 14,
                        color: appColors.primaryLight,
                    },
                },
            },
            MuiInputBase: {
                styleOverrides: {
                    input: {
                        fontSize: 14,
                    },
                },
            },
            MuiSelect: {
                styleOverrides: {
                    outlined: {
                        lineHeight: 'initial',
                    },
                    iconOutlined: {
                        color: appColors.primaryMedium,
                    },
                },
            },
            MuiMenuItem: {
                styleOverrides: {
                    root: {
                        fontSize: 14,
                    },
                    gutters: {
                        backgroundColor: appColors.primary,
                        '&.Mui-selected': {
                            backgroundColor: appColors.primaryMedium,
                            '&:hover': {
                                backgroundColor: alpha(appColors.primaryLight, 0.2),
                            },
                        },
                    },
                },
            },
            MuiList: {
                styleOverrides: {
                    root: {
                        backgroundColor: appColors.primary,
                    },
                },
            },
            MuiButton: {
                defaultProps: {
                    variant: 'contained',
                    size: 'large',
                    disableElevation: true,
                },
                variants: [
                    {
                        props: { size: 'large' },
                        style: {
                            padding: 13,
                        },
                    },
                    {
                        props: { color: 'primary' },
                        style: {
                            background: appColors.primaryMedium,
                            color: appColors.secondary,
                        },
                    },
                    {
                        props: { variant: 'text' },
                        style: {
                            color: appColors.white,
                        },
                    },
                ],
                styleOverrides: {
                    root: {
                        minWidth: 136,
                        fontSize: 14,
                        textTransform: 'none',
                    },
                },
            },
            MuiTooltip: {
                defaultProps: {
                    arrow: true,
                    placement: 'top-start',
                },
                styleOverrides: {
                    tooltip: {
                        maxWidth: 175,
                        background: appColors.primaryMedium,
                        border: '1px solid',
                        borderColor: appColors.primary,
                        padding: '8px',
                        marginBottom: '8px !important',
                    },
                    arrow: {
                        color: appColors.primaryMedium,
                        '&:before': {
                            border: '1px solid',
                            borderColor: appColors.primary,
                        },
                    },
                },
            },
            MuiSkeleton: {
                defaultProps: {
                    variant: 'rectangular',
                    animation: 'wave',
                },
                styleOverrides: {
                    root: {
                        backgroundColor: alpha(appColors.primary, 0.2),
                        '&:after': {
                            background:
                                'linear-gradient( 90deg, transparent, rgba(255, 255, 255, 0.25), transparent )',
                        },
                    },
                },
            },
            MuiLink: {
                variants: [
                    {
                        props: { underline: 'always' },
                        style: {
                            textDecoration: 'none',
                            position: 'relative',
                            cursor: 'pointer',
                            '&:after': {
                                background: 'none repeat scroll 0 0 transparent',
                                bottom: 0,
                                content: "''",
                                display: 'block',
                                height: '1px',
                                left: '50%',
                                position: 'absolute',
                                backgroundColor: appColors.secondary,
                                transition: 'width 0.3s ease 0s, left 0.3s ease 0s',
                                width: 0,
                            },
                            '&:hover:after': {
                                width: '100%',
                                left: 0,
                            },
                        },
                    },
                ],
                styleOverrides: {
                    root: {
                        color: appColors.secondary,
                    },
                },
            },
            MuiDialog: {
                styleOverrides: {
                    container: {
                        '@media only screen and (max-width: 600px)': {
                            alignItems: 'flex-end',
                        },
                    },
                    paper: {
                        backgroundColor: 'white',
                        padding: '52px 48px',
                        borderRadius: 8,

                        '@media only screen and (max-width: 600px)': {
                            margin: 0,
                            maxHeight: '75vh',
                            padding: '24px 16px',
                        },
                    },
                },
            },
            MuiDialogActions: {
                styleOverrides: {
                    root: {
                        '@media only screen and (max-width: 600px)': {
                            justifyContent: 'center',
                        },
                    },
                    spacing: {
                        padding: 0,
                        paddingTop: 32,
                    },
                },
            },
            MuiDialogTitle: {
                styleOverrides: {
                    root: { padding: 0 },
                },
            },
            MuiDialogContent: {
                styleOverrides: {
                    root: {
                        padding: 0,
                    },
                },
            },
        },
    },
    ptBR,
);

export default AppTheme;
