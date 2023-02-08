import React, { useEffect, useState, useCallback} from 'react'
import { Link } from 'react-router-dom'
import NoteItem from '../components/NoteItem'
import {CiSearch} from 'react-icons/ci'
import {BsPlusLg} from 'react-icons/bs'
import{MdClose} from 'react-icons/md'

const Notes = ({notes}) => {
  // State to control the display of the search input
  const [showSearch, setShowSearch] = useState(false);
  // State to store the search text
  const [text, setText] = useState('')
  // State to store the filtered notes based on the search text
  const [filteredNotes, setFilteredNotes] = useState(notes)

  // useCallback hook to filter the notes based on the search text
  const handleSearch = useCallback(() => {
    setFilteredNotes(notes.filter(note => {
      if(note.title.toLowerCase().match(text.toLocaleLowerCase())){
        // If the note title contains the search text, return the note
        return note;
      } else { 
        // If the note title does not contain the search text, return false
        return false;
      }
    }))
  }, [notes, text])

  // UseEffect hook to call the handleSearch function whenever the text or notes change
  useEffect(() => {
    handleSearch()
  }, [handleSearch])

  return (
    <section>
      {/* Notes header section */}
      <header className="notes__header">
        {/* Display "My Notes" if showSearch is false, else display the search input */}
        {!showSearch && <h2>My Notes</h2>}
        {showSearch && 
          <input 
            type="text" 
            value={text} 
            onChange={(e) => {setText(e.target.value); handleSearch();}} 
            autoFocus 
            placeholder='Keyword...' 
          />
        }
        {/* Button to toggle the display of the search input */}
        <button className='btn' onClick={() => {
          setShowSearch(prevState => !prevState); setText('');}}>
          {/* Display <MdClose/> if showSearch is true, else display <CiSearch/> */}
          {showSearch ? <MdClose/> : <CiSearch/>}
        </button>
      </header>
      {/* Notes container section */}
      <div className="notes__container">
        {/* Display "No notes found" if filteredNotes has a length of 0 */}
        {filteredNotes.length === 0 && <p className='empty__notes'>No notes found</p>}
        {
          filteredNotes.map(note => <NoteItem key={note.id} note={note} />)
        }
      </div>
      {/* Link to navigate to create note page */}
      <Link to="/create-note" className='btn add__btn'><BsPlusLg/></Link>
    </section>
  );
  
}

export default Notes
