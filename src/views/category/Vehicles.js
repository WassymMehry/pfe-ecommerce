import React, { useState } from 'react';
import { Grid, Button, Container, Stack, Typography } from '@mui/material';
import Iconify from './components/Iconify';
import New_post from './components/New_post';
import Annonces from './components/Annonces';
import './components/New_post.css';
function Vehicles() {
    const [openModal, setOpenModal] = useState(false);
    return (
        <div>
            <Typography variant="h4" gutterBottom>
                Blog
            </Typography>
            <Button
                style={{ left: '90%', bottom: '30px' }}
                variant="contained"
                startIcon={<Iconify icon="eva:plus-fill" />}
                onClick={() => setOpenModal(true)}
            >
                New Post
            </Button>
            <New_post open={openModal} onClose={() => setOpenModal(false)} />
            <Annonces />
        </div>
    );
}

export default Vehicles;
