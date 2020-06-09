import React, { useCallback, useEffect, useRef } from 'react'
import Textarea from 'react-expanding-textarea'

const MyTextarea = () => {
  const textareaRef = useRef(null)

  const handleChange = useCallback(e => {
    console.log('Changed value to: ', e.target.value)
  }, [])

  useEffect(() => {
    textareaRef.current.focus()
  }, [])

  return (
    <>
      <Textarea
        className="textarea"
        defaultValue=""
        id="my-textarea"
        maxLength="3000"
        name="pet[notes]"
        onChange={handleChange}
        placeholder="Take some notes..."
        rows="5"
        style={{margin: '10px', resize: 'none'}}
        ref={textareaRef}
      />
    </>
  );
}

export default MyTextarea;