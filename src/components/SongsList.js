import React, { Component, useState, useEffect } from 'react';
import NewSongForm from './NewSongForm';

const SongsList = () => {
    const [songs, setsongs] = useState([
        {
            title: "title 1", id: "1"
        }, {
            title: "title 1", id: "1"
        }, {
            title: "title 1", id: "1"
        }, {
            title: "title 1", id: "1"
        }
    ])
    const addSong = (title) => {
        setsongs([...songs, { title, id: "4" }])
    }

    const[age, setAge] = useState(20);  
    useEffect(()=>{
        console.log("cehange")
    }, [songs]) // to limit based on certain condition its watching
    return (
        <div className="songs-list">
            <ul>
                {songs.map((val, key) => {
                    return (
                        <li key={key}>{val.title}</li>
                    )
                })}
            </ul>


            <NewSongForm addSong={addSong}></NewSongForm>
            <button onClick={()=>setAge(age+1)}>Add 1 to age: {age}</button>
        </div>
    );
}

export default SongsList;