import { TypeStyles } from '../../theme/typeStyles';

export const styles: TypeStyles = {
    root: {
        height: '100vh',
        width: '100%',
        bgcolor: 'appColors.primary',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerLeft: {
        height: 600,
        bgcolor: 'appColors.primaryMedium',
        p: 4,
        borderRadius: '8px 0 0 8px',
        alignContent: 'center',
        gap: 7,
    },
    containerRight: {
        height: 600,
        bgcolor: 'appColors.white',
        p: 2,
        borderRadius: '0 8px 8px 0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    itensForm: {
        justifyContent: 'center',
        flexWrap: 'nowrap',
        '& .MuiTextField-root': {
            maxWidth: 170,
            flex: 1,
        },
    },
    title: {
        color: 'appColors.secondary',
        fontWeight: 700,
        fontSize: 50,
        lineHeight: '66px',
        position: 'relative',
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
