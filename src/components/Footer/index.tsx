/* eslint-disable jsx-a11y/anchor-is-valid */
import { Box, Link, Typography } from '@mui/material';
import { useMemo } from 'react';
import { styles } from './styles';

function Footer() {
    const year = useMemo(() => new Date().getFullYear(), []);
    return (
        <Box sx={styles.root}>
            <Typography>
                @{year} - Desenvolvido por{' '}
                <Link href="//www.janilso.com.br">www.janilso.com.br</Link>
            </Typography>
        </Box>
    );
}

export default Footer;
