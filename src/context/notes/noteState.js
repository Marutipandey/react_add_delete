// NoteState.js
import React, {  useState } from "react";
import NoteContext from "../notes/noteContext";

const NoteState = (props) => {
  const initialState = [
    {
      "id":1,
      "name": "John Doe",
      "age": 30,
      "city": "kolakata my City",
      "isStudent": false,
    },
    {
      "id":2,
      "name": "Priya",
      "age": 50,
      "city": "pune my City",
      "isStudent": false,
    }
  ];

  
  const [notes, setNotes] = useState(initialState);

  const addNote=(name,age,city)=>{
    console.log("adding a new note")
  const note = {
    "id": notes.length + 1,     
     "name":name,
      "age": age,
      "city":city,
      "isStudent": false,
    }
    setNotes(notes.concat(note))
  }
  const deleteNote=(id)=>{
    console.log("dgfhjgkhjsfdghk" + id)
    const newNotes =notes.filter((note)=>{return note.id!==id})
    setNotes(newNotes)
  }

  const editNote=()=>{
    
  }
  return (
    <NoteContext.Provider value={{ notes, setNotes,addNote,deleteNote,editNote }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
