import { TypeStyles } from '../../theme/typeStyles';

export const styles: TypeStyles = {
    root: {
        p: 5,
        bgcolor: 'appColors.primaryMedium',
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center',

        '& a': {
            color: 'appColors.secondary',
        },
    },
};
