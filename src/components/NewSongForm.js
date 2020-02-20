// @flow 
import React, { useState, useEffect } from 'react';

export default function NewSongForm(props) {
    const [title, setTitle] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        props.addSong(title )
    }
    return (
        <form onSubmit={handleSubmit} >
            <label>Songs Name:</label>
            <input type="text" required onChange={(e) => setTitle(e.target.value)} value={title}></input>
            <button type="submit">ADD </button>
        </form>
    );
};