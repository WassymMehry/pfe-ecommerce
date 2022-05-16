import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
// material
import { Grid, Button, Container, Stack, Typography } from '@mui/material';
// components
import Page from './components/Page';
import Iconify from './components/Iconify';
import { BlogPostCard, BlogPostsSearch, BlogPostsSort } from './sections/blog';
// mock
import POSTS from './_mock/blog';
import New_post from './components/New_post';
// ----------------------------------------------------------------------

const SORT_OPTIONS = [
    { value: 'latest', label: 'Latest' },
    { value: 'popular', label: 'Popular' },
    { value: 'oldest', label: 'Oldest' }
];

// ----------------------------------------------------------------------

export default function Blog() {
    const [openModal, setOpenModal] = useState(false);
    return (
        <Page>
            <Container>
                <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
                    <Typography variant="h4" gutterBottom>
                        Blog
                    </Typography>
                    <Button variant="contained" startIcon={<Iconify icon="eva:plus-fill" />} onClick={() => setOpenModal(true)}>
                        New Post
                    </Button>
                    <New_post open={openModal} onClose={() => setOpenModal(false)} />
                </Stack>

                <Stack mb={5} direction="row" alignItems="center" justifyContent="space-between">
                    <BlogPostsSearch posts={POSTS} />
                    <BlogPostsSort options={SORT_OPTIONS} />
                </Stack>

                <Grid container spacing={2}>
                    {POSTS.map((post, index) => (
                        <BlogPostCard key={post.id} post={post} index={index} />
                    ))}
                </Grid>
            </Container>
        </Page>
    );
}
