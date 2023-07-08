

import './App.css'
import Card from './components/Card'
import Main from './components/Main'
import DataProvider from './context/DataContext'

function App() {


  return (

    <div className='app'>
      <DataProvider>
        <Main />
      </DataProvider>

    </div>
  )
}

export default App
