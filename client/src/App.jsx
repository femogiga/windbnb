

import './App.css'
import Card from './components/Card'
import Main from './components/Main'
import Header from './components/headercomponents/Header'
import DataProvider from './context/DataContext'

function App() {


  return (

    <div className='app'>
      <Header/>
      <DataProvider>
        <Main />
      </DataProvider>

    </div>
  )
}

export default App
