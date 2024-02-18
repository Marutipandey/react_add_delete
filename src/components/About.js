// About.js
import React, { useContext } from 'react';
import NoteContext from '../context/notes/noteContext';
import NoteItem from './NoteItem';
import AddNote from './AddNote';

const About = () => {
  const context = useContext(NoteContext);
  const { notes } = context;

  return (
    <div className="container">
      <div className="row">
        <AddNote />
        {notes.map((note) => (
          <div className="col-md-6 mt-3" key={note.id}>
            <NoteItem notee={note} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
