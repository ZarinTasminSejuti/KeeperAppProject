
import React from 'react';
import { Delete } from '@mui/icons-material';
//import notes from './notes';
function Note(props){

    function handleClick() {
        props.onDelete(props.id);
      }

    return (
        <div className='pnote'>
            <h2><b>{props.title}</b></h2>
                <br/>
            <p>{props.content}</p>
            <button onClick={handleClick}><Delete /></button>
        </div>
    )
}



export default Note;
