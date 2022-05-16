import React from 'react';
import AddArticle from './AddArticle';
import './New_post.css';

const New_post = ({ open, onClose }) => {
    if (!open) return null;
    return (
        <div aria-hidden className="overlay" onClick={onClose}>
            <div
                aria-hidden
                className="modalContainer"
                onClick={(e) => {
                    e.stopPropagation();
                }}
            >
                <div className="modalRight">
                    <p aria-hidden className="closeBtn" onClick={onClose}>
                        X
                    </p>
                    <div className="content">
                        <AddArticle />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default New_post;
