// material-ui

import { CardContent, Grid, Typography } from '@mui/material';

import MainCard from 'ui-component/cards/MainCard';

import { gridSpacing } from 'store/constant';

// ==============================|| DASHBOARD DEFAULT - POPULAR CARD ||============================== //

const Description = () => {
    return (
        <>
            <MainCard content={false}>
                <CardContent>
                    <Grid container spacing={gridSpacing}>
                        <Grid item xs={12}>
                            <Grid container alignContent="center" justifyContent="space-between">
                                <Grid item>
                                    <Typography variant="h4">POST YOUR AD FOR FREE !</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    A few pictures, a good description and the price of your choice, that's all you have to do to get started!
                </CardContent>
            </MainCard>
        </>
    );
};

export default Description;
