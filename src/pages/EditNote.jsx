import React, { useState } from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { RiDeleteBin6Line } from 'react-icons/ri'
import useCreateDate from '../components/useCreateDate'

const EditNote = ({ notes, setNotes }) => {
  // Use `useParams` hook to get the id of the note to be edited
  const { id } = useParams();

  // Find the note to be edited based on its id
  const note = notes.find(item => item.id === id);

  // Use the state hook to keep track of the title and details of the note
  const [title, setTitle] = useState(note.title)
  const [details, setDetails] = useState(note.details)

  // Use the custom hook `useCreateDate` to get the current date
  const date = useCreateDate();

  // Use the `useNavigate` hook to navigate to different routes
  const navigate = useNavigate();

  // Handle the form submission to save the changes made to the note
  const handleForm = (e) => {
    e.preventDefault();

    // Check if the title and details are not empty
    if (title && details) {
      // Create a new note with the updated data
      const newNote = { ...note, title, details, date }

      // Replace the original note with the updated one in the `notes` array
      const newNotes = notes.map(item => {
        if (item.id === id) {
          item = newNote;
        }
        return item;
      });

      // Update the `notes` array with the new `newNotes` array
      setNotes(newNotes);
    }

    // Navigate to the home page after updating the note
    navigate('/');
  }

  // Handle the deletion of the note
  const handleDelete = () => {
    // Show a confirmation dialog to make sure the user wants to delete the note
    if (window.confirm('Are you sure you want to delete this note?')) {
      // Filter out the note to be deleted from the `notes` array
      const newNotes = notes.filter(item => item.id !== id);

      // Update the `notes` array with the new `newNotes` array
      setNotes(newNotes);

      // Navigate to the home page after deleting the note
      navigate('/');
    }
  }

  return (
    <section>
      <header className="create-note__header">
        {/* Link to the home page */}
        <Link to="/" className="btn">
          <IoIosArrowBack />
        </Link>

        {/* Button to save the changes made to the note */}
        <button className="btn lg primary" onClick={handleForm}>
          Save
        </button>

        {/* Button to delete the note */}
        <button className="btn danger" onClick={handleDelete}>
          <RiDeleteBin6Line />
        </button>
      </header>

      {/* Form to edit the note */}
 <form action="" className="create-note__form" onSubmit={handleForm}>
        <input className="create-note__text-area" type="text" placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)} autoFocus/>
        <textarea className="create-note__text-area" rows="28" placeholder='Note details...' value={details} onChange={(e) => setDetails(e.target.value)}></textarea>
      </form>
      </section>
  )
}

export default EditNote