import { logger } from './logger.ts'
import { useEffect, useState } from 'react'

function App() {
  const [input, setInput] = useState('')

  useEffect(() => {
    logger.log('Hello World')
  }, [])

  useEffect(() => {
    logger.debug('Input changed to ' + input, 'Input')
  }, [input])

  const handleSubmit = () => {
    logger.info('Submitted ' + input, 'Form')
    fetch(`http://localhost:${import.meta.env.VITE_API_PORT || "8000"}/form`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ input }),
    })
  }

  const handleAPICall = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
    const data = await response.json()
    logger.debug(data, "API Call")
  }

  return (
    <>
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={handleSubmit}>Submit</button>
      <br/>
      <button onClick={handleAPICall}>Make an API call</button>
    </>
  )
}

export default App
