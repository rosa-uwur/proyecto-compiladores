import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Header from './components/Header.jsx'
import CodeArea from './components/CodeArea.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <CodeArea />
  </React.StrictMode>,
)
