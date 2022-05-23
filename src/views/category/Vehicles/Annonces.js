import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import React, { useState, useEffect } from 'react';

import { useAuthState } from 'react-firebase-hooks/auth';
import LikeArticle from './LikeArticle';
import DeleteArticle from './DeleteArticle';
import { Link } from 'react-router-dom';
import { auth, db } from 'firebase';

import clsx from 'clsx';
import { makeStyles } from '@mui/styles';
import {
    Card,
    Avatar,
    CardActions,
    CardHeader,
    CardMedia,
    CardContent,
    Collapse,
    IconButton,
    Typography,
    Badge,
    Container,
    Grid
} from '@mui/material';
import { red } from '@mui/material/colors';

import Page from '../components/Page';
import { InsertCommentOutlined } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345
    },
    media: {
        height: 0,
        paddingTop: '56.25%' // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest
        })
    },
    expandOpen: {
        transform: 'rotate(180deg)'
    },
    avatar: {
        backgroundColor: red[500]
    }
}));

export default function Annonces() {
    const [articles, setArticles] = useState([]);
    const [user] = useAuthState(auth);
    useEffect(() => {
        const articleRef = collection(db, 'Vehicles');
        const q = query(articleRef, orderBy('createdAt', 'desc'));
        onSnapshot(q, (snapshot) => {
            const articles = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }));
            setArticles(articles);
            console.log(articles);
        });
    }, []);
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    return (
        <Page>
            <Container>
                <Grid container spacing={3}>
                    {articles.length === 0 ? (
                        <p>No articles found!</p>
                    ) : (
                        articles.map(({ id, title, description, imageUrl, createdAt, createdBy, userId, likes, comments }) => (
                            <Grid item xs={12} sm={6} md={3}>
                                <Card className={classes.root}>
                                    <CardHeader
                                        avatar={
                                            <Avatar aria-label="recipe" className={classes.avatar}>
                                                R
                                            </Avatar>
                                        }
                                        title={title}
                                        subheader={createdAt.toDate().toDateString()}
                                    />
                                    <Link to={`/Vehicles/${id}`}>
                                        <CardMedia className={classes.media} image={imageUrl} alt="title" />
                                    </Link>
                                    <CardContent>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            {description}
                                        </Typography>
                                    </CardContent>
                                    <CardActions disableSpacing>
                                        <IconButton aria-label="comment">
                                            <Badge badgeContent={likes?.length} color="primary">
                                                {user && <LikeArticle id={id} likes={likes} />}
                                            </Badge>
                                        </IconButton>
                                        <IconButton aria-label="comment">
                                            <Badge badgeContent={comments?.length} color="primary">
                                                <InsertCommentOutlined fontSize="large" />
                                            </Badge>
                                        </IconButton>
                                        <IconButton
                                            aria-label="show more"
                                            className={clsx(classes.expand, {
                                                [classes.expandOpen]: expanded
                                            })}
                                        >
                                            <div>{user && user.uid === userId && <DeleteArticle id={id} imageUrl={imageUrl} />}</div>
                                        </IconButton>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))
                    )}
                </Grid>
            </Container>
        </Page>
    );
}
