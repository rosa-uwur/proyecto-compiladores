import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Header from './components/Header.jsx'
import CodeArea from './components/CodeArea.jsx'
import FileSelection from './components/FileSelection.jsx'
import AnalysisButton from './components/AnalysisButton.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <FileSelection />
    <AnalysisButton/>
    <CodeArea />
  </React.StrictMode>,
)
