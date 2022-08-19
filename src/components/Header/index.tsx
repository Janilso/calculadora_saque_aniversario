import {
    AppBar,
    Box,
    Button,
    Container,
    Toolbar,
    Typography,
    useScrollTrigger,
} from '@mui/material';
import { cloneElement, useEffect, useRef, useState } from 'react';
import { getParamsLocation } from '../../utils/functions';
import { styles } from './styles';

interface ElevationScrollProps {
    window?: () => Window;
    children: React.ReactElement;
}

function ElevationScroll(props: ElevationScrollProps) {
    const { children, window } = props;

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });

    return cloneElement(children, {
        sx: trigger ? [styles.appBar, styles.appBarScroll] : styles.appBar,
    });
}

function Header() {
    const refAppBar = useRef<HTMLDivElement>();
    const [height, setHeight] = useState(0);
    const { fromMain } = getParamsLocation();

    useEffect(() => {
        setHeight(refAppBar?.current?.offsetHeight ?? 0);
    }, [refAppBar]);

    return (
        <>
            <ElevationScroll>
                <AppBar
                    position="fixed"
                    elevation={0}
                    sx={styles.appBar}
                    ref={(r: HTMLDivElement) => {
                        refAppBar.current = r;
                    }}
                >
                    <Container>
                        <Toolbar disableGutters sx={styles.toolbar}>
                            <Button
                                onClick={() => window.location.assign('//www.janilso.com.br')}
                                size="medium"
                                variant="text"
                                color="inherit"
                            >
                                <Typography>
                                    {fromMain ? 'Voltar' : 'Ir'} para o site principal
                                </Typography>
                            </Button>
                        </Toolbar>
                    </Container>
                </AppBar>
            </ElevationScroll>
            <Box sx={{ height }} />
        </>
    );
}

export default Header;
