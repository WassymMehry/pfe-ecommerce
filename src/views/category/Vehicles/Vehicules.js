import { Container, Stack, Typography } from '@mui/material';
import AddAd from './AddAd';
import Annonces from './Annonces';
import Page from '../components/Page';

function Vehicles() {
    return (
        <Page>
            <Container>
                <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
                    <Typography variant="h4" gutterBottom>
                        Vehicules
                    </Typography>
                    <AddAd />
                </Stack>
            </Container>
            <Annonces />
        </Page>
    );
}

export default Vehicles;
