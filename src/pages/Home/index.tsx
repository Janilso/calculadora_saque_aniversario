import { Typography } from '@mui/material';
import { styles } from './styles';

function Home() {
    return (
        <div>
            <Typography variant="body2" sx={styles.root}>
                HOme Page
            </Typography>
        </div>
    );
}

export default Home;
