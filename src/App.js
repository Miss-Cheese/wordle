import React from 'react'
import './App.scss'
import Grid from './components/Grid'

function App () {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Hello, it's going to be Wordle!</h1>
      </header>
      <Grid />
    </div>
  )
}

export default App
