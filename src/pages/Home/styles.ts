import { TypeStyles } from '../../theme/typeStyles';

export const styles: TypeStyles = {
    root: {
        height: { xs: 'inital', md: 'calc(100vh - 165px)' },
        minHeight: { xs: 'calc(100vh - 244px)', md: '100%' },
        width: '100%',
        bgcolor: 'appColors.primary',
        display: 'flex',
        justifyContent: { xs: 'flex-start', md: 'center' },
        alignItems: 'center',
        flexDirection: { xs: 'column', md: 'row' },
        mt: { xs: 2, md: 0 },
        mb: { xs: 8, md: 0 },
    },
    containerLeft: {
        height: { xs: 'inital', md: 600 },
        bgcolor: {
            xs: 'transparent',
            md: 'appColors.primaryMedium',
        },
        p: { xs: 0, md: 4 },
        borderRadius: '8px 0 0 8px',
        alignContent: { xs: 'flex-start', md: 'center' },
        gap: { xs: 1, sm: 3, md: 7 },
        my: { xs: 2, md: 0 },
    },
    containerRight: {
        height: { sx: 'inital', md: 600 },
        bgcolor: 'appColors.white',
        p: 2,
        borderRadius: { xs: '8px', md: '0 8px 8px 0' },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',

        '& #icon-fgts': {
            minHeight: 21,
        },
    },
    itensForm: {
        justifyContent: 'center',
        flexWrap: 'nowrap',
        flexDirection: { xs: 'column', sm: 'row' },
        gap: { xs: 2, sm: 1 },
        '& .MuiTextField-root': {
            maxWidth: { xs: '100%', sm: 170 },
            width: { xs: '100%', sm: 'auto' },
            flex: 1,
        },
    },
    title: (theme) => ({
        color: 'appColors.secondary',
        fontWeight: 700,
        fontSize: { xs: 28, sm: 40, md: 50 },
        lineHeight: { xs: '34px', sm: '50px', md: '66px' },
        position: 'relative',
        br: {
            display: { xs: 'none', sm: 'block' },
        },
        '&:after': {
            content: "''",
            display: 'block',
            position: 'absolute',
            bottom: { xs: -5, lg: 0 },
            right: 0,
            width: 80,
            height: { xs: 5, sm: 7 },
            bgcolor: 'appColors.primaryLight',
            animation: 'animation-line 7s cubic-bezier(0, 0, 0.03, 0.9) infinite',
        },
        '@keyframes animation-line': {
            '0%, 44%, 88.1%, 100%': {
                transformOrigin: 'left',
            },
            '0%, 100%, 88%': {
                transform: 'scaleX(0)',
            },
            '44.1%, 88%': {
                transformOrigin: 'right',
            },
            '33%, 44%': {
                transform: 'scaleX(1)',
            },
        },
        [theme.breakpoints.between(901, 1024)]: {
            '&:after': {
                left: 183,
            },
        },
        [theme.breakpoints.down(431)]: {
            '&:after': {
                left: 68,
            },
        },
    }),
    subtitle: {
        maxWidth: { xs: 'initial', md: 370 },
        mt: { xs: 2, md: 0 },
    },
    formContainer: {
        mt: 6,
        width: { xs: '100%', sm: 'fit-content' },
    },
    actions: {
        justifyContent: 'center',
        mt: 3,
    },
    result: {
        mt: 5.5,
    },
};
