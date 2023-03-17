
import React from 'react';
//import notes from './notes';
function Note(props){

    function handleClick() {
        props.onDelete(props.id);
      }

    return (
        <div className='delete'>
            <p className ="pnote"><b>{props.title}</b>
                <br/>
            {props.content}</p>
            <button onClick={handleClick}>DELETE</button>
        </div>
    )
}



export default Note;
