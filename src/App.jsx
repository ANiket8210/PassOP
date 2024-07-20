import Navbar from './components/Navbar'
import Manager from './components/Manager'
import Footer from './components/Footer'

function App() {

  return (
    <><div className="h-screen">
      
      <Navbar/>
      <div className="h-[90vh]"><Manager/></div>
      <Footer/>
    </div>
    </>
  )
}

export default App
