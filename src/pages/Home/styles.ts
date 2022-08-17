import { TypeStyles } from '../../theme/typeStyles';

export const styles: TypeStyles = {
    root: {
        height: { xs: 'initial', md: '100vh' },
        minHeight: '100vh',
        width: '100%',
        bgcolor: 'appColors.primary',
        display: 'flex',
        justifyContent: { xs: 'flex-start', md: 'center' },
        alignItems: 'center',
        flexDirection: { xs: 'column', md: 'row' },
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
        height: 600,
        bgcolor: 'appColors.white',
        p: 2,
        borderRadius: { xs: '8px 8px 0 0', md: '0 8px 8px 0' },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    itensForm: {
        justifyContent: 'center',
        flexWrap: 'nowrap',
        flexDirection: { xs: 'column', sm: 'row' },
        '& .MuiTextField-root': {
            maxWidth: { xs: '100%', sm: 170 },
            width: { xs: '100%', sm: 'auto' },
            flex: 1,
        },
    },
    title: {
        color: 'appColors.secondary',
        fontWeight: 700,
        fontSize: { xs: 28, sm: 40, md: 50 },
        lineHeight: { xs: '34px', sm: '50px', md: '66px' },
        position: 'relative',
        br: {
            display: { xs: 'none', sm: 'block' },
        },
    },
    formContainer: {
        mt: 6,
    },
    actions: {
        justifyContent: 'center',
        mt: 3,
    },
    result: {
        mt: 5.5,
    },
};
