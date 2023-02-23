import React from 'react';
import './App.css';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Note from './Note';
import notes from './notes';


function App()  {
  return (
     
      <div>
        <Header />
          <div className= "divNote"> {notes.map(newNote => (
            <Note  
            key ={newNote.key}
            title = {newNote.title}
            description = {newNote.description}
            />
          ))}

          </div>
        <Footer />
      </div>
   
  );
}

export default App;
