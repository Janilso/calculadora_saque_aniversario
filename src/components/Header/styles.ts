import { Theme } from '@mui/material';
import { TypeStyles } from '../../theme/typeStyles';

export const styles: TypeStyles = {
    toolbar: {
        justifyContent: 'flex-end',
        gap: 2,
    },
    appBar: (theme: Theme) => ({
        bgcolor: 'appColors.primary',
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin', 'box-shadow'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    }),
    appBarScroll: {
        boxShadow: `0 10px 35px rgba(0, 0, 0, 0.2)`,
    },
};
