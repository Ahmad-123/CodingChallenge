import CohortListView from 'Components/CohortListView'
import User from 'Components/User'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <div className='flex flex-col'>
      <ToastContainer />
      <User />
      <CohortListView />
    </div>
  )
}

export default App
