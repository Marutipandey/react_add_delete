import React ,{useContext} from 'react'
import NoteContext from '../context/notes/noteContext';

const NoteItem = (props) => {
  const context = useContext(NoteContext);
  const { deleteNote } = context;
    const {notee} = props;


 
  return (
    <div>

<div className="container">
    <div className="row ">
        <div className="col-md-12 mt-3">
        <div className="card-group">
  <div className="card">
    <div className="card-body">
      <h6 className="card-title">{notee.name}
      <span className='d-flex  justify-content-end'>
        <i className="fa-solid fa-trash" onClick={()=>{deleteNote(notee.id)}}></i>&nbsp;<i className="fa-solid fa-pen-to-square"></i></span></h6>
      <p className="card-text"> {notee.city}</p>
      <p className="card-text"> {notee.age}</p>
    </div>
  </div> 
</div>
        </div>
    </div>
</div>

       
      
     

    </div>
  )
}

export default NoteItem
