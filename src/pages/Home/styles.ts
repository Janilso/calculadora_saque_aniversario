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
        borderRadius: '8px 0px 0px 8px',
        alignContent: 'center',
    },
    title: {
        color: 'appColors.secondary',
        fontWeight: 700,
        fontSize: 50,
        lineHeight: '66px',
    },
};
