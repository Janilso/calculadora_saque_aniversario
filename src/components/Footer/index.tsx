/* eslint-disable jsx-a11y/anchor-is-valid */
import { Box, ButtonBase, Link, Typography } from '@mui/material';
import { useMemo } from 'react';
import { styles } from './styles';

function Footer() {
    const year = useMemo(() => new Date().getFullYear(), []);
    return (
        <Box sx={styles.root}>
            <Typography>
                @{year} - Desenvolvido por <a href="//www.janilso.com.br">www.janilso.com.br</a>
            </Typography>
        </Box>
    );
}

export default Footer;
