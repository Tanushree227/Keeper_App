import React, { useState } from 'react'

export default function CreateArea(props) {
    const [note, setNote] = useState({
        title: "",
        content: ""
    })

    function handleChange(event)
    {
        const {name, value} = event.target;
        setNote(prevNote => {
            return{
                ...prevNote,
                [name]:value
            }
        })
    }

    function submitNote(event)
    {
        props.onAdd(note);
        event.preventDefault()
    }

  return (
    <div>
        <form>
            <input name='title' value={note.title} placeholder='Title' onChange={handleChange} />
            <textarea name='content' value={note.content} rows="3" placeholder='Take a note...' onChange={handleChange} />
            <button onClick={submitNote}>Add</button>
        </form>
    </div>
  )
}
