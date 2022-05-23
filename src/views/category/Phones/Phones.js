import { Container, Stack, Typography } from '@mui/material';
import Page from '../components/Page';
import AddAd from './AddAd';
import Annonces from './Annonces';

function TablerIcons() {
    return (
        <Page>
            <Container>
                <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
                    <Typography variant="h4" gutterBottom>
                        Phones
                    </Typography>
                    <AddAd />
                </Stack>
            </Container>
            <Annonces />
        </Page>
    );
}

export default TablerIcons;
