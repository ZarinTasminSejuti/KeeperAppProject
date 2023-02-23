import React from 'react';
import notes from './notes';
function Note(props){
    return (
        <div>
            <p className ="pnote"><b>{props.title}</b>
                <br/>
            {props.description}</p>
        </div>
    )
}



export default Note;