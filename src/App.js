import React, { useState } from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Note from './Note';
import InputField from './InputField.js';
//import notes from './notes';


function App()  {

  const [notes, setNotes] = useState([]);

  
  function addNote(newNote){
        setNotes(prevNotes => {
          return [...prevNotes, newNote];
        });
        
    //console.log(note);
  }


  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
     
      <div>
        <Header />
       
        <InputField onAdd={addNote} />

          {notes.map((noteItem, index) => {
            return (
            <Note 
            key={index}
            id={index}
            title = {noteItem.title}
            content = {noteItem.content}
            onDelete={deleteNote} />
            );
          })}

{notes.map((noteItem, index) => {
            return (
            <Note 
            key={index}
            id={index}
            title = {noteItem.title}
            
            onDelete={deleteNote} />
            );
          })}
        <Footer />
      </div>
   
  );
}

export default App;
