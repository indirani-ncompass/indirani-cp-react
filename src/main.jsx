import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AskQuestion from './ask-question.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AskQuestion />
  </StrictMode>,
)
