import { alpha, Theme } from '@mui/material';
import { TypeStyles } from '../../theme/typeStyles';

export const styles: TypeStyles = {
    line: {
        display: 'flex',
        justifyContent: 'space-between',
        p: 1.5,
        border: '1px solid',
        borderColor: (theme: Theme) => alpha(theme.appColors.primaryLight, 0.5),
        '&:not(:first-of-type)': {
            mt: '-1px',
        },
        '&:first-of-type': {
            borderRadius: '8px 8px 0 0',
        },
    },
    itemLabel: {
        color: 'appColors.primaryLight',
        fontWeight: 600,
        display: 'flex',
        gap: 0.5,
        '& svg': {
            width: 15,
            height: 15,
        },
    },
    itemValue: {
        color: 'appColors.primaryLight',
    },
    linePrev: {
        bgcolor: 'appColors.primaryMedium',
        borderRadius: '0 0 8px 8px',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: 2,
    },
    itemLabelPrev: {
        color: 'appColors.secondary',
    },
    itemValuePrev: {
        color: 'appColors.secondary',
        fontWeight: 700,
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        width: '100%',
        // transition: 'all 0.5s cubic-bezier(0.55, 0.13, 0.4, 1.15)',
        // overflow: 'hidden',
        // opacity: 0.3,
    },
};
