import { Button, CircularProgress, Dialog, IconButton, Stack, Typography } from '@mui/material';
import { withStyles } from '@mui/styles';

import TextField from '@material-ui/core/TextField';
import { GridCloseIcon } from '@mui/x-data-grid';
import React, { useState } from 'react';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import MuiDialogTitle from '@material-ui/core/DialogTitle';

import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import { Timestamp, collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { auth, db, storage } from 'firebase';
import { Link } from 'react-router-dom';
import { Create } from '@material-ui/icons';

const styles = (theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(2)
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500]
    }
});

const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                    <GridCloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2)
    }
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(1)
    }
}))(MuiDialogActions);

export default function AddAd() {
    const [user] = useAuthState(auth);
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        image: '',
        createdAt: Timestamp.now().toDate()
    });

    const [progress, setProgress] = useState(0);

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleImageChange = (e) => {
        setFormData({ ...formData, image: e.target.files[0] });
    };

    const handlePublish = () => {
        if (!formData.title || !formData.description || !formData.image) {
            alert('Please fill all the fields');
            return;
        }

        const storageRef = ref(storage, `/images/${Date.now()}${formData.image.name}`);

        const uploadImage = uploadBytesResumable(storageRef, formData.image);

        uploadImage.on(
            'state_changed',
            (snapshot) => {
                const progressPercent = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                setProgress(progressPercent);
            },
            (err) => {
                console.log(err);
            },
            () => {
                setFormData({
                    title: '',
                    description: '',
                    image: ''
                });

                getDownloadURL(uploadImage.snapshot.ref).then((url) => {
                    const articleRef = collection(db, 'Cosmetics & Beauty');
                    addDoc(articleRef, {
                        title: formData.title,
                        description: formData.description,
                        imageUrl: url,
                        createdAt: Timestamp.now().toDate(),
                        createdBy: user.displayName,
                        userId: user.uid,
                        likes: [],
                        comments: []
                    })
                        .then(() => {
                            toast('Article added successfully', { type: 'success' });
                            setProgress(0);
                            handleClose();
                        })
                        .catch((err) => {
                            toast('Error adding article', { type: 'error' });
                        });
                });
            }
        );
    };

    return (
        <div>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                Add post
            </Button>
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    <Stack direction="row" alignItems="center">
                        <Create />
                        <h2 style={{ marginLeft: '10px' }}>Create post</h2>
                    </Stack>
                </DialogTitle>
                <DialogContent dividers>
                    <Typography gutterBottom>
                        <div>
                            {!user ? (
                                <>
                                    <h2>
                                        <Link to="/login">Login to create article</Link>
                                    </h2>
                                    Don't have an account? <Link to="/register">Signup</Link>
                                </>
                            ) : (
                                <>
                                    <Stack
                                        sx={{
                                            alignItems: 'center',
                                            '& .MuiTextField-root': { width: '100%', maxWidth: 500, m: 1 }
                                        }}
                                    >
                                        {/* titre */}

                                        <TextField
                                            label="Title"
                                            variant="outlined"
                                            type="text"
                                            name="title"
                                            value={formData.title}
                                            onChange={(e) => handleChange(e)}
                                        />

                                        {/* description */}
                                        <TextField
                                            variant="outlined"
                                            label="Comment"
                                            type="text"
                                            multiline
                                            name="description"
                                            rows={4}
                                            value={formData.description}
                                            onChange={(e) => handleChange(e)}
                                        />
                                        <br />
                                        <br />
                                        {/* image */}
                                        <div>
                                            <TextField
                                                variant="outlined"
                                                type="file"
                                                name="image"
                                                accept="image/*"
                                                onChange={(e) => handleImageChange(e)}
                                            ></TextField>

                                            {progress == 0 ? null : (
                                                <div>
                                                    <CircularProgress />
                                                </div>
                                            )}
                                        </div>
                                    </Stack>
                                </>
                            )}
                        </div>
                    </Typography>
                </DialogContent>
                {user && (
                    <DialogActions>
                        <Button type="submit" onClick={handlePublish} color="primary">
                            Publish
                        </Button>
                    </DialogActions>
                )}
            </Dialog>
        </div>
    );
}
