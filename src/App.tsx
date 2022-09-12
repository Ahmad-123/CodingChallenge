import React from 'react'
import CohortListView from './Components/CohortListView'
import User from './Components/User'

function App() {
  return (
    <div className='flex flex-col'>
      <User />
      <CohortListView />
    </div>
  )
}

export default App
