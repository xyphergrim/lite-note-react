import React from 'react'

const NoteBtn = ({ onAddNote }) => {
    return(
        <div>
            <button onClick={onAddNote}>Add Note</button>
        </div>
    );
}

export default NoteBtn;