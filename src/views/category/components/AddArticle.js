import React, { useState } from 'react';
import { Timestamp, collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { toast } from 'react-toastify';
import { useAuthState } from 'react-firebase-hooks/auth';

import { auth, db, storage } from 'firebase';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';

import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { TextField } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';

import Button from '@mui/material/Button';

import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

//select category//
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250
        }
    }
};
const names = [
    'Cars',
    'Vehicles',
    'Real estate',
    'Phones',
    'Computers & Accessories',
    'Clothings',
    'Cosmetics & Beauty',
    'Travel',
    'Materials & Equipment'
];

function getStyles(name, personName, theme) {
    return {
        fontWeight: personName.indexOf(name) === -1 ? theme.typography.fontWeightRegular : theme.typography.fontWeightMedium
    };
}
//final//
const Edit = styled.div`
    padding: 80px;
`;
export default function AddArticle() {
    const [user] = useAuthState(auth);
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        image: '',
        createdAt: Timestamp.now().toDate()
    });

    const [progress, setProgress] = useState(0);
    //select categ //
    const theme = useTheme();
    const [personName, setPersonName] = React.useState([]);

    const handleChangee = (event) => {
        const {
            target: { value }
        } = event;
        setPersonName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value
        );
    };

    // final //

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
                    const articleRef = collection(db, 'Articles');
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
                        })
                        .catch((err) => {
                            toast('Error adding article', { type: 'error' });
                        });
                });
            }
        );
    };

    return (
        <div className="border p-3 mt-3 bg-light" style={{ position: 'fixed' }}>
            {!user ? (
                <>
                    <h2>
                        <Link to="/pages/login">Login to create article</Link>
                    </h2>
                    Don't have an account? <Link to="/pages/register">Signup</Link>
                </>
            ) : (
                <>
                    <h2>Create article</h2>
                    <div className="form-group">
                        <div htmlFor="">Title</div>
                        <input type="text" name="title" className="form-control" value={formData.title} onChange={(e) => handleChange(e)} />
                    </div>

                    {/* description */}
                    <div htmlFor="">Description</div>
                    <textarea name="description" className="form-control" value={formData.description} onChange={(e) => handleChange(e)} />

                    {/* image */}
                    <div htmlFor="">Image</div>
                    <input type="file" name="image" accept="image/*" className="form-control" onChange={(e) => handleImageChange(e)} />

                    {progress === 0 ? null : (
                        <div className="progress">
                            <div className="progress-bar progress-bar-striped mt-2" style={{ width: `${progress}%` }}>
                                {`uploading image ${progress}%`}
                            </div>
                        </div>
                    )}
                    <button className="form-control btn-primary mt-2" onClick={handlePublish}>
                        Publish
                    </button>
                </>
            )}
        </div>
    );
}
