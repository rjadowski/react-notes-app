import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { IoIosArrowBack } from 'react-icons/io'
import { v4 as uuid } from 'uuid'

import useCreateDate from '../components/useCreateDate'

const CreateNote = ({ setNotes }) => {
  // State to store the title and details of the new note
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');

  // Get the current date and time
  const date = useCreateDate();

  // Utility function to navigate between pages
  const navigate = useNavigate();

  // Function to handle the submission of the form
  const handleSubmit = (e) => {
    // Prevent the default form submit behavior
    e.preventDefault();

    // Check if the title and details fields have values
    if (title && details) {
      // Create a new note object with a unique ID, title, details, and date
      const note = { id: uuid(), title, details, date };

      // Add the new note to the existing notes array
      setNotes(prevNotes => [note, ...prevNotes]);

      // Navigate to the home page
      navigate('/');
    }
  };

  return (
    <section>
      {/* Header with back button and save button */}
      <header className="create-note__header">
        <Link to="/" className="btn">
          <IoIosArrowBack />
        </Link>
        <button className="btn lg primary" onClick={handleSubmit}>
          Save
        </button>
      </header>
      {/* Form to create a new note */}
      <form action="" className="create-note__form" onSubmit={handleSubmit}>
        {/* Input field for the title */}
        <input
          className="create-note__text-area"
          type="text"
          placeholder="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          autoFocus
        />
        {/* Textarea field for the details */}
        <textarea
          className="create-note__text-area"
          rows="28"
          placeholder="Note details..."
          value={details}
          onChange={e => setDetails(e.target.value)}
        ></textarea>
      </form>
    </section>
  );
};

export default CreateNote;
