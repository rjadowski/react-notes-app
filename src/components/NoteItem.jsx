import React from 'react';
import { Link } from 'react-router-dom';

// The component that displays a single note item in the list of notes
const NoteItem = ({ note }) => {
  // Truncates the note title if it is more than 20 characters
  const truncatedTitle = 
    note.title.length > 15 
    ? `${note.title.substr(0, 20)}...` 
    : note.title;

  return (
    <Link to={`/edit-note/${note.id}`} className="note">
      <h4>{truncatedTitle}</h4>
      <p>{note.date}</p>
    </Link>
  );
};

export default NoteItem;
