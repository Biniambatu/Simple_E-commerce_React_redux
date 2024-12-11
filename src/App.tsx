
import './App.css'
import { Header, Footer } from './components'
import Header2 from './components/Header2'
import { AllRoutes } from './routes/AllRoutes'

function App() {

  return (
    <>
      <div className='App'>
        <Header/>
        <Header2/>
          <AllRoutes/>
        <Footer/>
      </div>
    </>
  )
}
export default App
