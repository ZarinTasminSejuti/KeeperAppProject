import React, {useState} from 'react';


function InputField(props){

    const [note, setNote] = useState({
        title: "",
        content: ""
    });


    function handleChange(event){
        const {name, value} = event.target;
        setNote (prevNote => {
            return {...prevNote, [name]: value};
        });
    }

    function submitNote(event){
        props.onAdd(note);
        event.preventDefault();
        
    }


    return (
        <div className='container'>
          <div  className ="inputArea">
                <form>
                    <input name='title' onChange={handleChange} type="text" placeholder='Your title...' value={note.title} />
                    <textarea name='content' onChange={handleChange} type="text" placeholder='Take a note...' value={note.content} />
                   
                </form>
                <button onClick={submitNote}>+</button>   
                </div>
         
           
</div>
    )
}



export default InputField;