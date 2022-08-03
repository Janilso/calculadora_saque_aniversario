import { Container, Grid, Typography } from '@mui/material';
import { styles } from './styles';

function Home() {
    return (
        <Grid container sx={styles.root}>
            <Container>
                <Grid container>
                    <Grid item container xs={6} sx={styles.containerLeft}>
                        <Typography sx={styles.title}>
                            Calculadora <br /> Saque Aniversário
                        </Typography>
                        <Typography>
                            Tenha uma previsão do valor do Saque Aniversário de seu FGTS
                        </Typography>
                    </Grid>
                    <Grid item xs={6} sx={styles.containerRight}>
                        <Typography>FGTS</Typography>
                    </Grid>
                </Grid>
            </Container>
        </Grid>
    );
}

export default Home;
