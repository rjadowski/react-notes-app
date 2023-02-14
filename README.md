# Notes App
This is a simple note-taking application built using React and React Router. The app allows users to create, edit, and delete notes. Notes are saved to local storage and are loaded when the app is opened.

# Technologies used
React
React Router

# How to run the app
To run the app, follow these steps:

Clone this repository to your local machine.

Install the required dependencies by running the following command in your terminal:

## npm install

Start the app by running the following command in your terminal:

## npm start

The app will be available at http://localhost:3000.

# Code structure
The app consists of the following components:

App: This is the main component of the app. It defines the routing logic and manages the notes data using useState and useEffect hooks.

Notes: This component displays a list of notes. It allows users to search notes using a search bar and add new notes by clicking the "Add Note" button.

CreateNote: This component displays a form for creating a new note. When the form is submitted, the new note is added to the notes array in the App component's state.

EditNote: This component displays a form for editing an existing note. When the form is submitted, the edited note is saved to the notes array in the App component's state.

useCreateDate: This is a custom hook that returns the current date and time in a formatted string.

# How to use the app
When you open the app, you will see a list of existing notes, if any. To add a new note, click the "Add Note" button. This will take you to the "Create Note" page, where you can enter a title and details for the new note. Click the "Save" button to save the note.

To edit an existing note, click the note's title. This will take you to the "Edit Note" page, where you can edit the note's title and details. Click the "Save" button to save the changes.

To delete a note, click the note's "Delete" button.

To search for a note, click the search button in the header. This will display a search bar where you can enter a search query. Notes that match the search query will be displayed. Click the search button again to hide the search bar.
