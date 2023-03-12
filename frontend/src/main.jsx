import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { TaskProvider } from './context/taskContext'
import { UserProvider } from './context/userContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <TaskProvider>
        <App />
      </TaskProvider>
    </UserProvider>
  </React.StrictMode>
)
