import React, { useContext, useState } from "react";
import NoteContext from '../context/notes/noteContext';

const AddNote = () => {
  const context = useContext(NoteContext);
  const { addNote } = context;
  const [note, setNote] = useState({ name: "", age: "", city: "" });

  const onChange = (e) => {
    
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.name, note.age,note.city);
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  onChange={onChange}
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="age" className="form-label">
                  Age
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="age"
                  name="age"
                  onChange={onChange}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="city" className="form-label">
                  City
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="city"
                  name="city"
                  onChange={onChange}
                />
              </div>

              <button type="submit" className="btn btn-primary" onClick={handleClick}>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNote;
