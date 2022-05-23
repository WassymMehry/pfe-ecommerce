import { Container, Stack, Typography } from '@mui/material';
import AddAd from './AddAd';
import Annonces from './Annonces';
import Page from '../components/Page';
function Cosmetics_Beauty() {
    return (
        <Page>
            <Container>
                <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
                    <Typography variant="h4" gutterBottom>
                        Cosmetics and Beauty
                    </Typography>
                    <AddAd />
                </Stack>
            </Container>
            <Annonces />
        </Page>
    );
}

export default Cosmetics_Beauty;
